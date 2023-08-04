import classes from './about.module.scss';
import Image from 'next/image';

const About = () => {
  return(
    <section className={classes.about}>
      <div className="container">
        <div className={classes.wrapper_main}>
          <div className={classes.img_wrapper}>
            <div className={classes.img_box}>
             <Image  src={'/images/about/about1.png'} alt='You will see home-project' width={270} height={265}/>
            </div>

            <div className={classes.img_box2}>
             <Image  src={'/images/about/about2.png'} alt='You will see home-project' width={270} height={345}/>
            </div>

            <div className={classes.img_box3}>
             <Image  src={'/images/about/about3.png'} alt='You will see home-project' width={270} height={140}/>
            </div>
          </div>

          <div className={classes.content_about}>
            <h2 className={classes.title}>О компании</h2>
            <p className={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <button className={classes.see}><span>Читать</span>
            <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#333333"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#333333"/>
           </svg>
           </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;