import styled from "styled-components";

import theme, {generics} from "theme";

export default function themedComponent(ComponentToLoad) {
  const component = styled(ComponentToLoad)`
    ${generics}
  `;
  component.defaultProps = theme.defaultProps;
  return component;
}
