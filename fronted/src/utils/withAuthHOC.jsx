import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./HOC/AuthContext"


const WithAuthHOC = (WrappedComponent) => {

    const { setLogin } = useContext(AuthContext)
    
    return (props) => {

        const navigate = useNavigate()

        useEffect(() => {

            const isLogin = localStorage.getItem('isLogin')

            if (!isLogin) {
                setLogin(false)
                navigate('/')
                return;
            }
        }, [navigate])
        
        return <WrappedComponent {...props} />
    }
}

export default WithAuthHOC;