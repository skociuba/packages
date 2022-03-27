import React from "react"
import { storiesOf } from "@storybook/react"
import { css } from "../../emotion.instance"
import ComponentWrapper from "./ComponentWrapper"

const stories = storiesOf("components", module)

const hasTopMargin = css`
  margin-top: 30%;
`
const hasBottomMargin = css`
  margin-bottom: 30px;
`
const noPaddings = css`
  margin-bottom: 0;
`
const fullWidth = css`
  max-width: 100%;
`

stories.add("ComponentWrapper", () => {
  return (
    <div>
      <ComponentWrapper className={hasTopMargin}>hasTopMargin</ComponentWrapper>
      <ComponentWrapper className={hasBottomMargin}>
        hasBottomMargin
      </ComponentWrapper>
      <ComponentWrapper className={noPaddings}>noPaddings</ComponentWrapper>
      <ComponentWrapper className={fullWidth}>fullWidth</ComponentWrapper>
    </div>
  )
})
