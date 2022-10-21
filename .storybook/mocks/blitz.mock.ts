import { useQuery as useReactQuery } from "react-query"

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
// export const useQuery = (path: string, _input: any, _option?: any) => {
//   return useReactQuery("mockedUseQuery", () => mockFn(path))
// }
export function useQuery(path: string, _input: any, _option?: any) {
  console.log("blitz.mock is called")
  return useReactQuery("mockedUseQuery", () => mockFn(path))
}
