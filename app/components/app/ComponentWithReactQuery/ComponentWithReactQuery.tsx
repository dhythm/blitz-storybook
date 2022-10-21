import { FC } from "react"
import { useQuery } from "react-query"

function fetchUser() {
  return fetch("/user")
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res
    })
    .then((res) => res.json())
    .then((data) => data.username)
}

function useFetchUser() {
  const { status, data } = useQuery("user", fetchUser)

  return {
    status,
    username: data,
  }
}

export const ComponentWithReactQuery: FC = () => {
  const { username } = useFetchUser()
  return <p>Hello, {username || "world"}!!</p>
}
