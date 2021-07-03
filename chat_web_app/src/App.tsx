import React from 'react'
import HomePage from './pages/home_page/HomePage'
import LoginPage from './pages/login_page/LoginPage'
import RegisterPage from './pages/register_page/RegisterPage'
import { TokenContext } from './context/token_context'
import { useToken } from './hooks/useToken'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const App = () => {
    const { token, setToken } = useToken()
    // const [user, setUser] = useState<User>({
    //     firstname: 'Mehmet',
    //     lastname: 'Revnaki',
    //     id: '21dc1c51-cf94-4c4d-b9a6-e69a3f38a888',
    //     status: 'working',
    //     profileImage: 'https://cdn.luxe.digital/media/2019/09/12084906/casual-dress-code-men-street-style-luxe-digital-1.jpg',
    // })
    return (
        <TokenContext.Provider value={{ value: token, set: setToken }}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path="/register"
                        render={() => {
                            return token ? <Redirect to="/home" /> : <RegisterPage setToken={setToken} />
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
