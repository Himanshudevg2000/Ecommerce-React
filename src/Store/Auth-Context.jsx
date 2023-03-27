import React, {useState} from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn : false,
    loginHandler:(token) => {},
    logoutHandler: () => {}
})

export const AuthContextProvider = props => {
    const InitialToken = localStorage.getItem('token')
    const [token,setToken] = useState(InitialToken)

    const isLoggedIn = !!token
    const Loginhandler = token => {
        setToken(token)
        localStorage.setItem('token',token)
    }

    const LogoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const AuthDataValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        loginHandler:Loginhandler,
        logoutHandler: LogoutHandler
    }

    return <AuthContext.Provider value={AuthDataValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;