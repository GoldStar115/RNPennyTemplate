import { checkIfAppUpdateAvailable } from '@services'
import * as React from 'react'
import { useEffect } from 'react'

export const HiddenAppUpdateWatcher = () => {
  useEffect(() => {
    checkIfAppUpdateAvailable()
  }, [])
  return <>{false && null}</>
}
