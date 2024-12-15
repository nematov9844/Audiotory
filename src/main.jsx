import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/theme.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
)