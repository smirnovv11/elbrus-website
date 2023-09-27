import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AlertContext = createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const AlertProvider = ({children}) => {

    const [isAlert, setIsAlert] = useState('none')

    const sendAlert = () => {
        setIsAlert('inline')
        setTimeout(() => setIsAlert('none'), 4200)
    }

    return (
        <AlertContext.Provider value ={
            {
                isAlert: isAlert,
                sendAlert
            }
        }>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider