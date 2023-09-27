import { useContext, createContext } from "react"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';

const ApplicationFormContext = createContext()

export const useForm = () => {
    return useContext(ApplicationFormContext)
}

const ApplicationFormProvider = ({children}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k58u8e8', 'template_wum69gq', form.current, 'ywk6rl1MR_6xlqcJZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

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
                form: form,
                sendEmail,
                clearForm,
                changeData
            }
        }>
            {children}
        </ApplicationFormContext.Provider>
    )
}

export default ApplicationFormProvider