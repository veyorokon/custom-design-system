import styled from "styled-components";

import theme, {generics} from "theme";

export default function themedComponent(ComponentToLoad, defaultProps = null) {
  const component = styled(ComponentToLoad)`
    ${generics}
  `;
  defaultProps
    ? (component.defaultProps = theme.defaultProps[defaultProps])
    : (component.defaultProps = {});
  return component;
}
