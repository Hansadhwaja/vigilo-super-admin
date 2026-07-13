import { useCallback } from "react"
import { useSearchParams } from "react-router"

const PAGE_PARAM = "page"

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateUrl = useCallback(
    (params: URLSearchParams) => {
      setSearchParams(params, {
        replace: true,
        preventScrollReset: true,
      })
    },
    [setSearchParams]
  )

  const getParam = useCallback(
    (key: string, defaultValue = "") => {
      return searchParams.get(key) ?? defaultValue
    },
    [searchParams]
  )

  const setParam = useCallback(
    (
      key: string,
      value: string | number | null | undefined,
      resetPage = true
    ) => {
      const params = new URLSearchParams(searchParams)

      if (value === undefined || value === null || value === "") {
        params.delete(key)
      } else {
        params.set(key, String(value))
      }

      if (resetPage && key !== PAGE_PARAM) {
        params.delete(PAGE_PARAM)
      }

      updateUrl(params)
    },
    [searchParams, updateUrl]
  )

  const setMultipleParams = useCallback(
    (
      updates: Record<string, string | number | null | undefined>,
      resetPage = true
    ) => {
      const params = new URLSearchParams(searchParams)

      Object.entries(updates).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") {
          params.delete(key)
        } else {
          params.set(key, String(value))
        }
      })

      if (resetPage) {
        params.delete(PAGE_PARAM)
      }

      updateUrl(params)
    },
    [searchParams, updateUrl]
  )

  const removeParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams)

      params.delete(key)

      updateUrl(params)
    },
    [searchParams, updateUrl]
  )

  const clearParams = useCallback(() => {
    setSearchParams(
      {},
      {
        replace: true,
        preventScrollReset: true,
      }
    )
  }, [setSearchParams])

  return {
    getParam,
    setParam,
    setMultipleParams,
    removeParam,
    clearParams,
    searchParams,
  }
}

export default useQueryParams
