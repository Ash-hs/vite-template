import ReactDOMClient from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/theme'

const container = document.getElementById('root')

const root = ReactDOMClient.createRoot(container)

root.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<App/>
		</ThemeProvider>
	</BrowserRouter>
)
