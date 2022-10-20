import { ComponentStory, Meta } from "@storybook/react"
import { handlers } from "app/mocks/handlers"
import { useEffect } from "react"
import { ComponentWithApiCall } from "./ComponentWithApiCall"

export default {
  title: "Components/App/ComponentWithApiCall",
} as Meta

const Template: ComponentStory<typeof ComponentWithApiCall> = (args) => {
  const { worker } = window.msw

  useEffect(() => () => worker.resetHandlers())

  worker.use(handlers.default)

  return <ComponentWithApiCall {...args} />
}
export const $Default = Template.bind({})
