import { FC, useEffect, useState } from "react"

export const ComponentWithApiCall: FC = () => {
  const [username, setUsername] = useState()
  useEffect(() => {
    const _f = async () => {
      const data = await fetch("/user")
      const { username = "" } = await data.json()
      setUsername(username)
    }
    _f()
  }, [])
  return <p>Hello, {username || "world"}!!</p>
}
