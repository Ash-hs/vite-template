import { formatEther, parseUnits } from 'ethers/lib/utils'

export const isIOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const refreshPage = () => window.location.reload()

export const debounce = (fn: any, wait: number, immediate = true) => {
  let timeout: any;
  return function () {
    clearTimeout(timeout)
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    if (immediate && !timeout) fn.apply(this, arguments)
    timeout = setTimeout(() => {
      if (!immediate) {
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        fn.apply(this, arguments)
      }
      if (immediate)  timeout = null;
    }, wait);
  }
}

export const gweiToEth = (gweiValue: unknown) => {
  if (!gweiValue) {
    if (gweiValue === 0) return 0
    return '- '
  }
  const ethValue = Number(formatEther(parseUnits(String(gweiValue), 'gwei')))
  return ethValue >= 0.001 ? `${ethValue.toFixed(3)}` : '<0.001'
}
