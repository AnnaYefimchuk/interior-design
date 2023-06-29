import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';

import Modal from '../../home/Modal';
import './ButtonModal.css';

export default function ButtonModal(props) {

    const [isOpen, setIsOpen] = useState(false);

    const form = useRef();
    const [info, setInfo] = useState("");
    const [data, setData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    })

    const handleChangeName = e => {
        setData(existingValues => ({
            ...existingValues,
            name: e.target.value,
        }))
    }

    const handleChangePhone = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setData(existingValues => ({
            ...existingValues,
            number: value,
        }))
    };

    const handleChangeEmail = e => {
        setData(existingValues => ({
            ...existingValues,
            email: e.target.value,
        }))
    }

    const handleChangeMessage = e => {
        setData(existingValues => ({
            ...existingValues,
            message: e.target.value,
        }))
    }

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [info]);

    const sendEmail = (e) => {
        e.preventDefault();

        if (data.name.length > 2 && data.number.length > 9 && data.email.length > 5) {
            emailjs.sendForm('service_wb554je', 'template_9i7vl1p', form.current, 'XHTVsS6lmvH3UWac2')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            setInfo("Sent")
            setData(e => ({
                ...e,
                name: "",
                number: "",
                email: "",
                message: ""
            }));

        } else {
            setInfo("Please, fill in the required fields (*)")
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className='home-page-aboutcompany-button'>{props.nameBtn}</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='input-form-block'>
                    <p className='lwt'>Let's Work Together</p>
                    <form ref={form} onSubmit={sendEmail} className="input-form-block">
                        <input type="text" className='input-form-block-input' name="user_name" value={data.name} onChange={handleChangeName} placeholder="Name*" />
                        <input type="text" className='input-form-block-input' name="user_phone" value={data.number} onChange={handleChangePhone} placeholder="Phone number*" />
                        <input type="email" className='input-form-block-input' name="user_email" value={data.email} onChange={handleChangeEmail} placeholder="E-mail*" />
                        <textarea type="text" className='input-form-block-input textareaStyle' name="message" value={data.message} onChange={handleChangeMessage} placeholder="Message..." />
                        <p className='output-info'>{info}</p>
                        <button className="home-page-aboutcompany-button-black">Send</button>
                    </form>
                </div>
            </Modal>
        </>
    );
}