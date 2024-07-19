import React, { useEffect, useRef, useState } from 'react'
import '../styles/communicate.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import map from '../assets/map.png'
import emailjs from '@emailjs/browser'
import { FaCheck } from "react-icons/fa";


export default function Communicate() {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissions, setSubmissions] = useState<number[]>(JSON.parse(localStorage.getItem('submissions') || '[]'));
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        localStorage.setItem('submissions', JSON.stringify(submissions));
    }
        , []);
    type errortypes = {
        user_name: string | null,
        user_email: string | null,
        message: string | null
    }
    const [errors, setErrors] = React.useState<errortypes>({ user_name: '', user_email: '', message: '' });
    const mailClick = () => {
        window.location.href = 'mailto:selmanates007@gmail.com';
    }

    const phoneNumber = '+905384384030';
    const handleGoogleMap = () => {
        window.open('https://maps.app.goo.gl/TcUZD8E1S48n36eR7', '_blank');
    }

    function sendEmail(e: any): void {
        e.preventDefault();
        if (!validateForm()) {
            console.log('Form is invalid');
        }
        else {
            console.log('Form is valid');
            const now = Date.now();
            const oneHourAgo = now - 60 * 60 * 1000;
            const recentSubmissions = submissions.filter(timeStamp => timeStamp > oneHourAgo);
            console.log(recentSubmissions);

            if (recentSubmissions.length > 2) {
                alert('Son bir saatte çok fazla gönderim yaptınız')
                return;
            }
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                const newSubmissions = [...submissions, now];
                setSubmissions(newSubmissions);
                //save to local storage
                localStorage.setItem('submissions', JSON.stringify(newSubmissions));
                emailjs.sendForm('service_ra2bnh8', 'template_5gxhw7w', form.current!, {
                    publicKey: 'Cm0b_8IcBiqhFh2YA',
                })
                    .then(
                        () => {

                            setIsSubmitting(true);
                            setIsSubmitted(true);
                            setTimeout(() => {
                                setIsSubmitted(false);
                                setIsSubmitting(false);
                            }, 2000);
                        },
                        (error) => {
                            console.log('FAILED...', error.text);
                        },
                    );
                    form.current!.reset();
                    setErrorMessage('');
            }, 2000)





        }
    }

    const validateForm = () => {
        const newErrors = { user_name: '', user_email: '', message: '' };
        const formdata = new FormData(form.current!);
        console.log(formdata.get('user_name'));
        console.log(formdata.get('user_email'));
        console.log(formdata.get('message'));

        if (!formdata.get('user_name')) {
            newErrors.user_name = "Ad soyad Alanı boş bırakılamaz";
        }
        const email = formdata.get('user_email') as string;
        if (!email) {
            newErrors.user_email = "E mail alanı boş bırakılamaz";

        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.user_email = "Geçerli bir e mail adresi giriniz";
        }
        if (!formdata.get('message')) {
            newErrors.message = "Mesaj alanı boş bırakılamaz";
        } console.log(newErrors);
        setErrors(newErrors);
        return Object.values(newErrors).every((err) => !err);


    };

    return (
        <div className='communicate'>
            <h1>İletişim</h1>

            <div className='communicate-title' >Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz...</div>
            <div className='title-div'>

                <div className='com-title-div' onClick={handleGoogleMap}>
                    <div className='com-title-icon'><IoLocationSharp style={{ fontSize: "45px", color: "white" }} /></div>
                    <div className='com-title-text'>
                        <h4>Adres</h4>
                        <span>Antalya, Türkiye</span>
                    </div>
                </div>

                <a href={`tel:${phoneNumber}`}> <div className='com-title-div' >

                    <div className='com-title-icon'><FaPhoneAlt style={{ fontSize: "35px", color: "white" }} /></div>
                    <div className='com-title-text'>
                        <h4>Telefon</h4>
                        <span>+90 538 438 40 30</span>
                    </div>
                </div></a>
                <div className='com-title-div' onClick={mailClick} >
                    <div className='com-title-icon'><MdEmail style={{ fontSize: "45px", color: "white" }} /></div>
                    <div className='com-title-text'>
                        <h4>E mail adresi</h4>
                        <span>selmanates007@gmail.com</span>
                    </div>
                </div>
                <div className='phone-div'></div>
                <div className='email-div'></div>
            </div>
            <div className='communicate-div'>
                <div className='communicate-left' onClick={handleGoogleMap}> <div className="map-card">
                    <div className="content">
                        <div className='map-img'><img src={map} alt='Selman ATEŞ'></img></div>

                    </div>
                </div></div>
                <div className='communicate-right'>
                    <div className='right-title'>Bana mesaj yazın...</div>

                    <form className='form' ref={form} onSubmit={sendEmail}>
                        <div className='error-div'> <div className='name-mail'>

                            <div className="InputContainer">
                                <input placeholder="Adınız Soyadınız" id="input" className="input" name="user_name" type="text" />

                            </div>

                            <div className="InputContainer">
                                <input placeholder="E mail adresiniz " id="input" className="input" name="user_email" type="text" />
                            </div>

                        </div>
                            <div style={{ display: "flex", flexDirection: "row", color: "red", fontSize: "18px", width: "100%", whiteSpace: "nowrap", alignItems: "center", justifyContent: "center" }}><span className='error'>{errors.user_name}</span><span className='error'>{errors.user_email}</span></div></div>
                        <div className='error-div'>  <div className='message-div'>
                            <div className='message'>
                                <textarea placeholder='Mesajınızı giriniz' id='textarea' name='message'></textarea>

                            </div>
                        </div>

                            <span className='error'>{errors.message}</span>
                        </div>
                        <div className='submit-button-div'>{isSubmitted ? (
                            <div className="submitted-animation">Gönderildi<FaCheck style={{
                                fontSize: "35px",
                                color: "green",
                                marginLeft: "15px"
                            }}></FaCheck></div>
                        ) : (
                            <button id='submit-button' type='submit' value="send" disabled={isSubmitting}>
                                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                            </button>
                        )}</div>
                    </form>

                </div>
            </div>


        </div>
    )
}