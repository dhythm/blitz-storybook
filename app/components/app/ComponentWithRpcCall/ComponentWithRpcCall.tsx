import getCurrentUser from "app/users/queries/getCurrentUser"
import { useQuery } from "blitz"
import { FC } from "react"

export const ComponentWithRpcCall: FC = () => {
  const [currentUser] = useQuery(getCurrentUser, null)
  return <p>Hello, {currentUser?.name || "world"}!!</p>
}
