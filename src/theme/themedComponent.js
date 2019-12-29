import styled from "styled-components";

import {generics} from "theme";

export default function themedComponent(ComponentToLoad) {
  return styled(ComponentToLoad)`
    ${generics}
  `;
}
