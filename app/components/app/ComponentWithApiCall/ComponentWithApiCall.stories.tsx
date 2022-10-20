import { ComponentStory, Meta } from "@storybook/react"
import { rest } from "msw"
import { useEffect } from "react"
import { ComponentWithApiCall } from "./ComponentWithApiCall"

export default {
  title: "Components/App/ComponentWithApiCall",
} as Meta

const Template: ComponentStory<typeof ComponentWithApiCall> = (args) => {
  const { worker } = window.msw

  useEffect(() => () => worker.resetHandlers())

  worker.use(
    rest.get("*/user", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          username: "admin",
        })
      )
    })
  )

  return <ComponentWithApiCall {...args} />
}
export const $Default = Template.bind({})
