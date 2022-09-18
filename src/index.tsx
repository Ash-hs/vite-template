import ReactDOMClient from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/theme'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { Suspense } from 'react'
import { Loading } from '@components/Loading'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render(
  <ErrorBoundary>
    <Suspense fallback={<Loading height={'100vh'}/>}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </ErrorBoundary>
)
