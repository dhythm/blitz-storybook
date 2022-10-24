import { useEffect, useState } from "react"

function mockFn(path: string) {
  return fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res
    })
    .then((res) => res.json())
}
// export function useQuery(path: string, _input: any, _option?: any) {
//   console.log("blitz.mock is called")
//   return useReactQuery("mockedUseQuery", () => mockFn(path))
// }
export function useQuery(queryFn: any, params: any, options?: any) {
  console.log("mocked useQuery")
  const [data, setData] = useState(null)
  useEffect(() => {
    const _f = async () => {
      setData(await mockFn(`/api/rpc/${queryFn.name}`))
    }
    _f()
  }, [])
  return [data]
}
