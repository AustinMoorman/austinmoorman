import React, { useState, useEffect } from 'react';
import './contact.css';
import { ReactComponent as Phone } from '../../icons/phone.svg'
import { ReactComponent as Email } from '../../icons/email.svg'

function Contact(props) {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [send, setSend] = useState('send')

    const reset = () => {
        setEmail('')
        setName('')
        setCompany('')
        setMessage('')
        setErrorMessage('Thank you! I will be in contact soon!')
        setSend('sent')

    }

    const handleSend = () => {
        let goToGo = true;
        if (!email) {
            setErrorMessage('Please provide an return email.')
            goToGo = false
        }
        if (!name) {
            setErrorMessage('Please provide your name.')
            goToGo = false
        }
        if (!message) {
            setErrorMessage(`Your email doesn't have a message.`)
            goToGo = false
        }
        if (goToGo) {
            fetch(`${process.env.REACT_APP_EXPRESS_URL}/email`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email, name: name, company: company, message: message }) }).then(res => {
                if (res.status == 201) {
                    reset()
                } else {
                    setErrorMessage('There was an error sending your email. Please try again.')
                }
            })
        }


    }
    const onChange = (event) => {
        setErrorMessage('')
        switch (event.target.name) {
            case 'email':
                setEmail(event.target.value)
                break;
            case 'name':
                setName(event.target.value)
                break;
            case 'company':
                setCompany(event.target.value)
                break;
        }
    }
    if(props.pageVars){
        return (
        <div className="contact" id="contact">
            <a id="contactA" className="linkAnchor"></a>
            <h3>Contact</h3>
            <div className="emailCreator" >
                <div className="contactInfo">
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="Email"></input>
                    <br />
                    <input type="text" name="name" value={name} onChange={onChange} placeholder="Name"></input>
                    <br />
                    <input type="text" name="company" value={company} onChange={onChange} placeholder="Company"></input>
                    <a onClick={handleSend}>{send}</a>
                    <p className="contactErrorMessage">{errorMessage}</p>
                </div>
                <div className="emailBody">
                    <div className="contactLinks">
                              <Phone className="phoneIcon" /><a href={`tel:${props.pageVars.contact.number}`}>{props.pageVars.contact.number}</a>
                    <Email className="emailIcon" /><a href={`mailto:${props.pageVars.contact.email}`}>austin.moorman08@gmail.com</a>
                    </div>
                    <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="message"></textarea>

                </div>

            </div>
        </div>
    )
    }else{
        return <div></div>
    }

    

}
export default Contact;