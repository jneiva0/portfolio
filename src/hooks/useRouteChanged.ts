import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useRouteChanged = (fn: () => void) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      fn()
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, fn])
}
