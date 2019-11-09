/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Transition, Text} from "components";
import {Stage, Layer, Rect, Image} from "react-konva";
import * as S from "./styles";

class URLImage extends React.Component {
  state = {
    image: null
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener("load", this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener("load", this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
      width: this.image.naturalWidth,
      height: this.image.naturalHeight,
      isScaling: this.props.isScaling
    });

    const {image, width, height} = this.state;
    const wRatio = window.innerWidth / width;
    const hRatio = window.innerHeight / height;
    const ratio = Math.min(hRatio, wRatio);
    this.props.updateImage(ratio, image.naturalWidth, image.naturalHeight);
  };

  componentWillReceiveProps(props) {
    if (this.state.isScaling !== props.isScaling) {
      this.loadImage();
    }
  }

  render() {
    const {image} = this.state;

    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        image={image}
        ref={node => {
          this.imageNode = node;
        }}
      />
    );
  }
}

const Option = ({children, margin, width, height}) => {
  return (
    <S.OptionMenuButton
      fontWeight={"bold"}
      fontSize={"1.2rem"}
      bg={"oranges.0"}
      color={"whites.0"}
      margin={margin}
      width={width}
      height={height}
    >
      {children}
    </S.OptionMenuButton>
  );
};

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxWidth: 800,
      maxHeight: 800,
      imageRatio: null,
      imageWidth: null,
      imageHeight: null
    };
  }

  handleUpdateImage = (ratio, imageWidth, imageHeight) => {
    const {maxWidth, maxHeight} = this.state;
    const {isScaling} = this.props;
    //Condition 1 - both dimensions are over the max
    if (imageWidth > maxWidth && imageHeight > maxHeight) {
      //Scale the image down until the height is under the max
      const heightOver = imageHeight - maxHeight;
      const widthOver = imageWidth - maxWidth;

      //largest dimension is height
      if (heightOver > widthOver) {
        const over = imageHeight - maxHeight;
        const ratio = imageWidth / imageHeight;
        const newHeight = imageHeight - over;
        const newWidth = imageWidth - over * ratio;
        this.setState({
          imageRatio: ratio,
          imageWidth: newWidth,
          imageHeight: newHeight
        });
      } else {
        const over = imageWidth - maxWidth;
        const ratio = imageHeight / imageWidth;
        const newWidth = imageWidth - over;
        const newHeight = imageHeight - over * ratio;
        this.setState({
          imageRatio: ratio,
          imageWidth: newWidth,
          imageHeight: newHeight
        });
      }
    }

    //Condition 2 - image height dimension is over the max
    else if (imageWidth < maxWidth && imageHeight > maxHeight) {
      //Scale the image down until the height is under the max
      const over = imageHeight - maxHeight;
      const ratio = imageWidth / imageHeight;
      const newHeight = imageHeight - over;
      const newWidth = imageWidth - over * ratio;
      this.setState({
        imageRatio: ratio,
        imageWidth: newWidth,
        imageHeight: newHeight
      });
    }

    //Condition 3 - both image dimensions are under the max
    else if (isScaling && imageWidth < maxWidth && imageHeight < maxHeight) {
      //Scale the image down until the height is under the max
      const heightUnder = maxHeight - imageHeight;
      const widthUnder = maxWidth - imageWidth;

      //largest dimension is height
      if (heightUnder < widthUnder) {
        const under = maxHeight - imageHeight;
        const ratio = imageWidth / imageHeight;
        const newHeight = imageHeight + under;
        const newWidth = imageWidth + under * ratio;
        this.setState({
          imageRatio: ratio,
          imageWidth: newWidth,
          imageHeight: newHeight
        });
      } else {
        const under = maxWidth - imageWidth;
        const ratio = imageHeight / imageWidth;
        const newWidth = imageWidth + under;
        const newHeight = imageHeight + under * ratio;
        this.setState({
          imageRatio: ratio,
          imageWidth: newWidth,
          imageHeight: newHeight
        });
      }
    }

    //Condition 3.5 & scaling - both image dimensions are under the max
    else if (imageWidth < maxWidth && imageHeight < maxHeight) {
      const ratio = imageWidth / imageHeight;
      this.setState({
        imageRatio: ratio,
        imageWidth: imageWidth,
        imageHeight: imageHeight
      });
    }

    //Condition 4 - image width dimension is over the max
    else if (imageWidth > maxWidth && imageHeight < maxHeight) {
      //Scale the image down until the wdith is under the max
      const over = imageWidth - maxWidth;
      const ratio = imageHeight / imageWidth;
      const newWidth = imageWidth - over;
      const newHeight = imageHeight - over * ratio;
      this.setState({
        imageRatio: ratio,
        imageWidth: newWidth,
        imageHeight: newHeight
      });
    }
  };

  render() {
    //const {maxWidth, maxHeight} = this.state;
    const {imagePreviewUrl} = this.props;
    const {imageWidth, imageHeight} = this.state;
    return (
      <React.Fragment>
        {imagePreviewUrl ? (
          <S.CanvasContainer
            width={imageWidth}
            height={imageHeight}
            bg={"whites.0"}
          >
            <Stage width={imageWidth} height={imageHeight}>
              <Layer>
                {/*<ColoredRect maxWidth={740} maxHeight={490} />*/}
                <URLImage
                  isScaling={this.props.isScaling}
                  updateImage={this.handleUpdateImage}
                  src={imagePreviewUrl}
                  x={0}
                  y={0}
                  width={imageWidth}
                  height={imageHeight}
                />
              </Layer>
            </Stage>
          </S.CanvasContainer>
        ) : (
          <div>loading</div>
        )}
      </React.Fragment>
    );
  }
}

class ImageUploader extends React.Component {
  render() {
    return (
      <S.GetImageBox flexDirection={"column"} alignItems={"center"}>
        <S.UploadCloudIcon mt={4} height={100} />
        <S.Header mt={5} fontWeight={400} fontSize={"2.4rem"}>
          Upload an image to annotate
        </S.Header>
        <Text mt={4}>Choose an image from your computer to get started.</Text>
        <form>
          <input
            onChange={e => this.props.handleImageChange(e)}
            id="file-input"
            type="file"
            style={{display: "none"}}
          />

          <S.Label
            background={"oranges.0"}
            width={"18rem"}
            height={"5rem"}
            mt={5}
            htmlFor="file-input"
          >
            <S.UploadIcon height={"2.5rem"} />
            Upload
          </S.Label>
        </form>
      </S.GetImageBox>
    );
  }
}

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
      imagePreviewUrl: null,
      isScaling: false
    };
  }

  _handleImageChange(e) {
    e.preventDefault();

    try {
      let reader = new FileReader();
      let imageFile = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          imageFile: imageFile,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(imageFile);
    } catch {}
  }

  toggleScaling() {
    const {isScaling} = this.state;
    this.setState({isScaling: !isScaling});
  }

  render() {
    const {imagePreviewUrl, isScaling} = this.state;
    return (
      <S.ViewComponent flexDirection={"column"} height={"100vh"} width={"100%"}>
        <S.OptionMenu
          justifyContent={"space-around"}
          width={"50rem"}
          height={"6rem"}
        >
          <form onSubmit={e => this._handleSubmit(e)}>
            <input
              onChange={e => this._handleImageChange(e)}
              id="file-input2"
              type="file"
              style={{display: "none"}}
            />

            <S.Label
              fontSize={"1.2rem"}
              width={"13rem"}
              height={"3.6rem"}
              htmlFor="file-input2"
              background={"oranges.0"}
            >
              <S.UploadIcon height={"2rem"} />
              Upload
            </S.Label>
          </form>
          <Option>
            <S.DowloadIcon height={"2rem"} />
            <S.ButtonText color={"white"}>Download</S.ButtonText>
          </Option>

          <S.OptionLabel> Auto Scaling</S.OptionLabel>
          <S.Switch
            disabled={!imagePreviewUrl}
            onChange={() => this.toggleScaling()}
            id="toggle"
            color={"default"}
          />
        </S.OptionMenu>

        {imagePreviewUrl ? (
          <Canvas
            isScaling={isScaling}
            imagePreviewUrl={imagePreviewUrl}
            x={10}
          />
        ) : (
          <ImageUploader handleImageChange={e => this._handleImageChange(e)} />
        )}
      </S.ViewComponent>
    );
  }
}

export default View;
