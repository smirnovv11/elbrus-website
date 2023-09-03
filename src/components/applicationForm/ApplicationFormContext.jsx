import { useContext, createContext } from "react"
import { useState } from "react"

const ApplicationFormContext = createContext()

export const useForm = () => {
    return useContext(ApplicationFormContext)
}

const ApplicationFormProvider = ({children}) => {

    
    const [data, setData] = useState({
        name: '',
        surname: '',
        phone: '',
        type: '0',
        time: '',
        schedule: ''
    });

    const changeData = newData => {
        setData(newData);
    }
    
    const clearForm = () => {
        setData(prev => {
            return {
                name: '',
                surname: '',
                phone: '',
                type: '0',
                time: '',
                schedule: ''
            }
        })
    }
    return (
        <ApplicationFormContext.Provider value={
            {
                data: data,
                clearForm,
                changeData
            }
        }>
            {children}
        </ApplicationFormContext.Provider>
    )
}

export default ApplicationFormProvider