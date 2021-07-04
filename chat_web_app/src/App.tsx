import React from 'react'
import HomePage from './pages/home_page/HomePage'
import LoginPage from './pages/login_page/LoginPage'
import RegisterPage from './pages/register_page/RegisterPage'
import { TokenContext } from './context/token_context'
import { useToken } from './hooks/useToken'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
    const { token, setToken } = useToken()

    return (
        <TokenContext.Provider value={{ value: token, set: setToken }}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/register"
                        render={() => {
                            return token ? <Redirect to="/home" /> : <RegisterPage />
                        }}
                    />
                    <Route
                        exact
                        path="/login"
                        render={() => {
                            return token ? <Redirect to="/home" /> : <LoginPage />
                        }}
                    />
                    <Route
                        exact
                        path="/home"
                        render={() => {
                            return token ? <Redirect to="/home" /> : <HomePage />
                        }}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => {
                            console.log(token)
                            return token ? <Redirect to="/home" /> : <Redirect to="/login" />
                        }}
                    />
                </Switch>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}

export default App
