import classes from './about.module.scss';
import Image from 'next/image';
import Button from '@/ui/button';

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
            <Button clazz={classes.see} svg_clazz={classes.svg} content={'Читать'}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;