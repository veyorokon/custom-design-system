/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import styled from "styled-components";
import {Box, Button, Flex, Text, Heading} from "components";
import {height, space, fontSize, color, margin, width} from "styled-system";
import {Upload} from "styled-icons/boxicons-regular/Upload";
import {Download} from "styled-icons/boxicons-regular/Download";
import {Upload as MainUpload} from "styled-icons/icomoon/Upload";
import {Switch as MSwitch} from "@material-ui/core";
import {FormControl} from "@material-ui/core";

import configure from "theme/config";
const background = configure("background", "bg", "colors");

const ViewComponent = styled(Box)`
  background-size: 2rem 2rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-position: -2px -2px, -2px -2px, -1px -1px;
  background-size: 50px 50px, 50px 50px, 10px 10px, 10px 10px;
  background-color: #e8e8e8;
  position: relative;
  overflow: hidden;
`;

const OptionMenu = styled(Flex)`
  display: flex;
  align-items: center;
  background: #fff;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  padding: 0.7rem;
  z-index: 50;
`;

const OptionMenuButton = styled(Button)`
  cursor: pointer;
  align-items: flex-end;
  justify-content: center;
  display: flex !important;
  transition: all 0.2s;
  ${background};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.17);
  backface-visibility: hidden;
  ${margin}
  ${space}

  &:focus {
    outline: none;
  }
  &:active {
    color: black;
    transform: scale(1) !important;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.19);
    filter: brightness(0.97);
  }
  &:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.17);
    transform: scale3d(1.02, 1.02, 22);
  }
`;

const Form = styled.form`
  ${background}
`;

const Label = styled.label`
  cursor: pointer;
  justify-content: center;
  display: flex !important;
  color: white;
  ${background};
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.17);
  backface-visibility: hidden;
  text-transform: uppercase;
  font-weight: bold;
  ${fontSize}
  ${height}
  ${width}
  border-radius: 5px;
  align-items: center;
  transition: all 0.2s;
  ${margin}
  ${space}

&:focus {
    outline: none;
  }
  &:active {
    transform: scale(1) !important;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.19);
    filter: brightness(0.97);
  }
  &:hover {
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.17);
    transform: scale3d(1.02, 1.02, 22);
  }
`;

const UploadIcon = styled(Upload)`
  ${height}
  ${background}
  width: auto;
  margin-right: 7px;
  display: inline-block;
  color: white;
`;
const DowloadIcon = styled(Download)`
  ${height}
  ${background}
  width: auto;
  margin-right: 7px;
  display: inline-block;
  color: white;
`;

const UploadCloudIcon = styled(MainUpload)`
  width: auto;
  ${background}
  display: inline-block;
  ${height}
  ${color}
  ${margin}
`;

const ButtonText = styled(Text)`
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: 2px !important;
`;

const CanvasContainer = styled(Box)`
  ${width}
  ${height}
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const GetImageBox = styled(Flex)`
  width: 50rem;
  height: 50rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 1rem;
`;

const Header = styled(Heading)`
  font-family: -apple-system, BlinkMacSystemFont !important;
`;

const OptionLabel = styled(Text)`
  margin-left: auto;
  font-size: 1.4rem;
`;

const Switch = styled(MSwitch)`
  ${background}
`;

Switch.FormControl = styled(FormControl)`
  ${background}
`;

export {
  ViewComponent,
  OptionMenu,
  OptionMenuButton,
  UploadIcon,
  DowloadIcon,
  UploadCloudIcon,
  ButtonText,
  CanvasContainer,
  GetImageBox,
  OptionLabel,
  Header,
  Form,
  Label,
  Switch
};
