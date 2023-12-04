import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AlertContext = createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

const AlertProvider = ({children}) => {

    const [isAlert, setIsAlert] = useState('none')
    const [isError, setIsError] = useState(false);

    const sendAlert = () => {
        setIsAlert('inline')
        setTimeout(() => setIsAlert('none'), 4200)
    }

    const error = (value) => {
        setIsError(value)
    }

    return (
        <AlertContext.Provider value ={
            {
                isAlert: isAlert,
                sendAlert,
                isError: isError,
                error
            }
        }>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider