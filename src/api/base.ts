export const http = async ({url, method = 'GET', data}: Record<string, any>) => {
  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      ...(data && {'Content-Type': 'application/json'})
    },
    ...(data && {body: JSON.stringify(data)})
  })
  if (res.status === 204) return null
  if (res.status === 201) return res.json()
  if (!res.ok) {
    throw Error(await res.text())
  }
  return res.json()
}

export const wrapHttp = async ({url, method = 'GET', data}: Record<string, any>) : Promise<[boolean, any]>=> {
  return http({url, method, data}).then(
    (data) => {
      return [false, data]
    },
    (error: Error) => {
      return [true, error.message]
    }
  )
}

export const buildUrl = (url: string, params: Record<string, any>) => {
  return `${url}?` + Object.entries(params).filter(([_, value]) => Array.isArray(value) ? value.length : !['', undefined, null].includes(value)).map(([key, value]) =>
    Array.isArray(value) ? value.map(item => `${key}=${item}`).join('&') : `${key}=${value}`).join('&')
}
