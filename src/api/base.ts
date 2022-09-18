export const http = async ({url, token, method = 'GET', data}: Record<string, any>) => {
  const res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      ...(token && { Authorization: 'Bearer ' + token }),
      ...(data && {'Content-Type': 'application/json'})
    },
    ...(data && {body: JSON.stringify(data)})
  })
  if (res.status === 204) return null
  if (res.status === 201) return res.json()
  if (!res.ok) {
    throw Error(await res.text())
  }
  if (res.headers.get('content-type').startsWith('application/json')) {
    return res.json()
  } else {
    return res.text()
  }
}

export const wrapHttp = async ({url, token, method = 'GET', data}: Record<string, any>) : Promise<[boolean, any]>=> {
  return http({url, token, method, data}).then(
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
