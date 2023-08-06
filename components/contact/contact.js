import classes from './contact.module.scss';
import Image from 'next/image';
import Button from '@/ui/button';

const Contact = () => {
  return (
    <section id='contacts' className={classes.contact}>
      <div className="container">
       <div className={classes.wrapper}>
        <h2 className={classes.title}>
          Связаться с нами
        </h2>
        <div className={classes.wrapper_contact}>
         <div className={classes.contact_form}>
           <form className={classes.form}>
             <input className={classes.input}  type="text" placeholder='Имя'/>
             <input className={classes.input}  type="number" required placeholder='Номер телефона'/>
             <input className={classes.input}  type="email" required placeholder='E-mail'/>
             <input className={classes.input} type="text" placeholder='Интересующий товар/услуга'/>
             <textarea className={classes.textarea} name="" id="" cols="30" rows="10" placeholder='Сообщение'>
             </textarea>

             <div className={classes.checkbox_box}>
              <input
                id="agree"
                className={classes.input_checkbox}
                type="checkbox"
                name="Personal"
                required
              />
              <label htmlFor="agree" className={classes.label_checkbox}>
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </label>
            </div>
            <Button clazz={classes.but} svg_clazz={classes.svg} content={'Отправить'}/>
            {/*  <button className={classes.but}>
                <a href="#">
                  <span>ОТПРАВИТЬ</span>
                  <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="#fff">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#fff"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#fff"/>
                </svg>
                </a>
             </button> */}
           </form>
         </div>

         <div className={classes.contact_picture}>
            <div className={classes.img}>
              <Image src={'/images/contact/contact.png'} width={200} height={200}/>
            </div>
         </div>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Contact;