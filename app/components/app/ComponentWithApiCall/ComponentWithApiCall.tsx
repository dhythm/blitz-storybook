import { FC, useEffect } from "react"

export const ComponentWithApiCall: FC = () => {
  useEffect(() => {
    const _f = async () => {
      const data = await fetch("/user")
      console.log(await data.json())
    }
    _f()
  }, [])
  return <p>Hello, world!!</p>
}
