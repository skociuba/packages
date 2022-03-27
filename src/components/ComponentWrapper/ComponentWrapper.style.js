import { css } from "../../emotion.instance"

export const componentWrapper = (
  hasTopMargin,
  hasBottomMargin,
  noPaddings,
  fullWidth
) => css`
  max-width: ${fullWidth ? "100%" : "1440px"};
  margin: 0 auto;
  margin-top: ${hasTopMargin ? "30px" : "0"};
  margin-bottom: ${hasBottomMargin ? "30px" : "0"};
  margin-bottom: ${noPaddings ? "" : "0 16px"};
`
export default componentWrapper
