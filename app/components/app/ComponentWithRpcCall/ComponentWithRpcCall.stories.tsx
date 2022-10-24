import { ComponentStory, Meta } from "@storybook/react"
import { rest } from "msw"
import { useEffect } from "react"
import { QueryClient } from "react-query"
import { ComponentWithRpcCall } from "./ComponentWithRpcCall"
const defaultQueryClient = new QueryClient()

export default {
  title: "Components/App/ComponentWithRpcCall",
} as Meta

const Template: ComponentStory<typeof ComponentWithRpcCall> = (args) => {
  const { worker } = window.msw

  useEffect(() => () => worker.resetHandlers())

  worker.use(
    rest.post("*/api/rpc/getCurrentUser", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          name: "admin",
        })
      )
    })
  )

  return <ComponentWithRpcCall {...args} />
}
export const $Default = Template.bind({})
