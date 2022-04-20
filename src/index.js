import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import AppSpanish from './es/AppSpanish'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <>
        <BrowserRouter>
            {
                window.location.pathname.split('/')[1] === 'es' ?
                    <AppSpanish />
                    :
                    <App />
            }
        </BrowserRouter>
    </>,
    document.getElementById('root')
)

