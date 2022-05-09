import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import fun from "./Images/fun4.gif"
const App = lazy(() => import('./App'))
const AppSpanish = lazy(() => import('./es/AppSpanish'))

ReactDOM.render(
    <>
        <BrowserRouter>
            <Suspense fallback={<div><img src={fun} /></div>}>
                {
                    window.location.pathname.split('/')[1] === 'es' ?
                        <AppSpanish />
                        :
                        <App />
                }
            </Suspense>
        </BrowserRouter>
    </>,
    document.getElementById('root')
)

