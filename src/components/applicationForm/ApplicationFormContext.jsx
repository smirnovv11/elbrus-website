import { useContext, createContext } from "react"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import { useAlert } from "../alert/AlertContext";

const ApplicationFormContext = createContext()

export const useForm = () => {
    return useContext(ApplicationFormContext)
}

const ApplicationFormProvider = ({children}) => {

    const form = useRef();

    const alert = useAlert()

    const sendEmail = (e) => {
        e.preventDefault();

        if (data.phone.length != 18) {
            alert.error(true)
            alert.sendAlert()
            return
        }

        data.schedule = '--'
        data.time = '--'

        emailjs.sendForm('service_eqbemnn', 'template_18nx53b', form.current, '8VrACJdCdG9bli8F3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        alert.error(false)
        alert.sendAlert();
    };

    const [data, setData] = useState({
        name: '',
        surname: '',
        phone: '',
        type: '0',
        time: '',
        schedule: '',
        object: '',
        comp: '',
        pos: ''
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
                schedule: '',
                object: '',
                comp: '',
                pos: ''
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