import React,{useRef} from 'react'
import '../styles/communicate.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import map from '../assets/map.png'
import emailjs, { send } from '@emailjs/browser'

export default function Communicate() {
const form = useRef<HTMLFormElement | null>(null);




    const handleGoogleMap = () => {
        window.open('https://maps.app.goo.gl/TcUZD8E1S48n36eR7', '_blank');
    }

    function sendEmail(e:any): void {
        e.preventDefault();
   
        emailjs
        .sendForm('service_ra2bnh8', 'template_5gxhw7w', form.current!, {
          publicKey: 'Cm0b_8IcBiqhFh2YA',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        //form control
        //empty the form
        form.current!.reset();
    }

    return (
        <div className='communicate'>
            <h1>İletişim</h1>
            <div className='communicate-title'>Benimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz...</div>
            <div className='title-div'>
                <div className='com-title-div'>
                    <div className='com-title-icon'><IoLocationSharp style={{ fontSize: "45px", color: "white" }} /></div>
                    <div className='com-title-text'>
                        <h4>Adres</h4>
                        <span>Antalya, Türkiye</span>
                    </div>
                </div>

                <div className='com-title-div'>
                    <div className='com-title-icon'><FaPhoneAlt style={{ fontSize: "35px", color: "white" }} /></div>
                    <div className='com-title-text'>
                        <h4>Telefon</h4>
                        <span>+90 538 438 40 30</span>
                    </div>
                </div>
                <div className='com-title-div'>
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
                        <div className='name-mail'>

                            <div className="InputContainer">
                                <input placeholder="Adınız Soyadınız" id="input" className="input" name="user_name" type="text" />

                            </div>
                            <div className="InputContainer">
                                <input placeholder="E mail adresiniz " id="input" className="input" name="user_email" type="text" />

                            </div>
                        </div>
                        <div className='message-div'> 
                        <div className='message'> 
                            <textarea placeholder='Mesajınızı giriniz' id='textarea' name='message'>

                        </textarea>
                        </div>
                        </div>
                        <div className='submit-button-div'><button id='submit-button' type='submit' value="send">Gönder</button></div>
                    </form>

                </div>
            </div>


        </div>
    )
}