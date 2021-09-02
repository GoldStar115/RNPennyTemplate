const strPadLeft = (value: string, pad: string, length: number) => {
  return (new Array(length + 1).join(pad) + value).slice(-length)
}

export const formatTimeFromSeconds = (seconds: number) => {
  if (!seconds) return null
  seconds = Math.floor(seconds)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds - minutes * 60
  return `${minutes.toString()}:${strPadLeft(
    remainingSeconds.toString(),
    '0',
    2,
  )}`
}
