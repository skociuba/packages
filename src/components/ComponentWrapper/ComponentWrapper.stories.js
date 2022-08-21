import React from "react"
import { storiesOf } from "@storybook/react"
import { css } from "../../emotion.instance"
import ComponentWrapper from "./ComponentWrapper"

const stories = storiesOf("components", module)

const hasTopMargin = css`
  margin-top: 30px;
  border: 1px solid red;
  background-color: #ff8080;
`
const withoutProperties = css`
  border: 1px solid red;
  background-color: #ff8080;
`
const hasBottomMargin = css`
  margin-bottom: 30px;
  border: 1px solid red;
  background-color: #ff8080;
`
const noPaddings = css`
  padding: 0;
  border: 1px solid red;
  background-color: #ff8080;
`
const fullWidth = css`
  max-width: 100%;
  border: 1px solid red;
  background-color: #ff8080;
`

stories.add("ComponentWrapper", () => {
  return (
    <div>
      <ComponentWrapper className={withoutProperties}>
        without additional properties
      </ComponentWrapper>
      <ComponentWrapper className={hasBottomMargin}>
        hasBottomMargin
      </ComponentWrapper>
      <ComponentWrapper className={noPaddings}>noPaddings</ComponentWrapper>
      <ComponentWrapper className={fullWidth}>fullWidth</ComponentWrapper>
      <ComponentWrapper className={hasTopMargin}>hasTopMargin</ComponentWrapper>
    </div>
  )
})
