export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const debounce = (fn: any, wait: number, immediate = true) => {
  let timeout: any;
  return function () {
    clearTimeout(timeout)
    // @ts-ignore
    if (immediate && !timeout) fn.apply(this, arguments)
    timeout = setTimeout(() => {
      if (!immediate) {
        // @ts-ignore
        fn.apply(this, arguments)
      }
      if (immediate)  timeout = null;
    }, wait);
  }
}
