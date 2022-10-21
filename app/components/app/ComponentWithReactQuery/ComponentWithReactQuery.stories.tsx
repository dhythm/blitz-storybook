import { ComponentStory, Meta } from "@storybook/react"
import { rest } from "msw"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ComponentWithReactQuery } from "./ComponentWithReactQuery"
const defaultQueryClient = new QueryClient()

export default {
  title: "Components/App/ComponentWithReactQuery",
} as Meta

const Template: ComponentStory<typeof ComponentWithReactQuery> = (args) => {
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

  return (
    <QueryClientProvider client={defaultQueryClient}>
      <ComponentWithReactQuery {...args} />
    </QueryClientProvider>
  )
}
export const $Default = Template.bind({})
