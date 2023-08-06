import classes from './contact.module.scss';
import Image from 'next/image';
import Button from '@/ui/button';
import { useEffect, useState } from 'react';

const Contact = () => {

const [enteredEmail, setEnteredEmail] = useState('');
const [enteredName, setEnteredName] = useState('');
const [enteredMessage, setEnteredMessage] = useState('');
const [requestStatus, setRequestStatus] = useState();
const [requestError, setRequestError] = useState('');
const [enteredPhone, setEnteredPhone] = useState('');
const [enteredInterest, setEnteredInterest] = useState('');
const [check, setCheck] = useState(false);

useEffect(() => {
if (requestStatus === 'success' || requestStatus === 'error') {
  const timer = setTimeout(() => {
    setRequestStatus(null);
    setRequestError(null)
  }, 3000);

  return () => clearTimeout(timer)
}
},[requestStatus])

const sendContactData = async (contactsDetails) => {
  const response = await fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(contactsDetails),
    headers: {
      'Content-Type': 'application/json'
    }

  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }
}

  const onSetCheck = (e) => {
    setCheck(e.target.checked)
  }

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

   try {
    await sendContactData({
      email: enteredEmail,
      name: enteredName,
      interest: enteredInterest,
      phone: enteredPhone,
      message: enteredMessage,
      check: check
    })
    setRequestStatus('success');
    setEnteredEmail('');
    setEnteredMessage('');
    setEnteredName('');
    setEnteredInterest('');
    setEnteredPhone('');
    setCheck(false)
    
   } catch (error) {
    setRequestError(error.message)
    setRequestStatus('error');
    setEnteredEmail('');
    setEnteredMessage('');
    setEnteredName('');
    setEnteredInterest('');
    setEnteredPhone('');
    setCheck(false)
   }
  }

  const loading = requestStatus === 'loading' ? <div className={classes.loading}>Сообщение отправляется...</div> : null;
  const success = requestStatus === 'success' ? <div className={classes.success}>Сообщение успешно получено</div>: null;
  const error = requestStatus === 'error' ? <div className={classes.error}>Произошла ошибка</div>: null;
 
  return (
    <section id='contacts' className={classes.contact}>
      <div className="container">
       <div className={classes.wrapper}>
        <h2 className={classes.title}>
          Связаться с нами
        </h2>
        <div className={classes.wrapper_contact}>
         <div className={classes.contact_form}>
           <form onSubmit={sendMessageHandler} className={classes.form}>
             <input value={enteredName} onChange={ (e) => setEnteredName(e.target.value)} className={classes.input}  type="text" placeholder='Имя'/>
             <input value={enteredPhone} onChange={ (e) => setEnteredPhone(e.target.value)} className={classes.input}  type="number" required placeholder='Номер телефона'/>
             <input value={enteredEmail} onChange={ (e) => setEnteredEmail(e.target.value)} className={classes.input}  type="email" required placeholder='E-mail'/>
             <input value={enteredInterest} onChange={ (e) => setEnteredInterest(e.target.value)} className={classes.input} type="text" placeholder='Интересующий товар/услуга'/>
             <textarea value={enteredMessage} onChange={ (e) => setEnteredMessage(e.target.value)} className={classes.textarea} name="" id="" cols="30" rows="10" placeholder='Сообщение'>
             </textarea>

             <div className={classes.checkbox_box}>
              <input
                id="agree"
                className={classes.input_checkbox}
                type="checkbox"
                name="Personal"
                checked={check}
                onChange={(e) => onSetCheck(e)}
              />
              <label htmlFor="agree" className={classes.label_checkbox}>
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </label>
            </div>
            {loading}
            {success}
            {error}
            <Button clazz={classes.but} svg_clazz={classes.svg} content={'Отправить'}/>
           </form>
         </div>

         <div className={classes.contact_picture}>
            <div className={classes.img}>
              <Image src={'/images/contact/contact.png'} alt='You will see man with phone' width={749} height={369}/>
            </div>
         </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Contact;