import { useEffect, useState } from "react"

export function useParams() {
  const [params, setParams] = useState<Record<string, string>>({})

  useEffect(() => {
    const urlParams = window.location.href.split("?").splice(1)?.[0] || ""

    const paramsArray = urlParams.split("&")

    const paramsObject: Record<string, string> = {}

    for (const paramString of paramsArray) {
      const [key, value] = paramString.split("=")

      paramsObject[key] = value
    }

    setParams(paramsObject)
  }, [])

  return params
}
