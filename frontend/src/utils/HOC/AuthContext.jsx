import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    var login = localStorage.getItem('isLogin')
    var useInfoData = localStorage.getItem("userInfo")
    const [isLogin, setLogin] = useState(login?login:false)
    const [userInfo, setUserInfo] = useState(
      useInfoData ? JSON.parse(useInfoData) : null,
    );

    return (
        <AuthContext.Provider value={{isLogin,setLogin,userInfo,setUserInfo}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider