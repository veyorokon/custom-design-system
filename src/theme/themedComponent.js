import styled from "styled-components";

import theme, {generics} from ".";

export default function themedComponent(
  ComponentToLoad,
  defaultPropName = null
) {
  const component = styled(ComponentToLoad)`
    ${generics}
  `;
  defaultPropName && theme.defaultProps[defaultPropName]
    ? (component.defaultProps = theme.defaultProps[defaultPropName])
    : (component.defaultProps = {});
  return component;
}
