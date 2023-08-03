import classes from './header.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';

const Header = () => {

  const [activeLi, setActiveLi] = useState('Главная');
  const [trigger, setTrigger] = useState(false);

  const arrLink = [
    {id: 1, content: "Главная", href: '#', clazz: classes.link},
    {id: 2, content: "Галерея", href: '#', clazz: classes.link},
    {id: 3, content: "Проекты", href: '#', clazz: classes.link},
    {id: 4, content: "Сертификаты", href: '#', clazz: classes.link},
    {id: 5, content: "Контакты", href: '#', clazz: classes.link},
  ];

  const onActive = (e) => {
    setActiveLi(e.currentTarget.textContent);
  };

  const onTrigger = () => {
   setTrigger(trig => !trig)
  }

  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.img_wrapper}>
            <a href="#">
              <Image src={'/images/header-logo/logo1.png'} alt='You will see logo' width={68.552} height={41.527}/>
            </a>
          </div>

          <nav className={cn(classes.nav_header, {[classes.active_nav]: trigger})}>
            <ul>
              {
                arrLink.map(({id, href, content, clazz}) => {
                  return <li onClick={onActive} key={id}><a className={cn(clazz, {[classes.link_active]: activeLi === content})} href={href}>{content}</a></li>
                })
              }
            </ul>
          </nav>

          <div onClick={onTrigger} className={cn(classes.hamburger, {[classes.hamburger_active]: trigger})}>
              <div></div>
              <div></div>
              <div></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;