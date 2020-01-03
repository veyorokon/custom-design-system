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
    ? (component.defaultProps = {
        ...theme.defaultProps.All,
        ...theme.defaultProps[defaultPropName]
      })
    : (component.defaultProps = theme.defaultProps.All);
  return component;
}
