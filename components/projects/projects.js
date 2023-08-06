import classes from './projects.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import cn from 'classnames';
import Button from '@/ui/button';

const Projects = () => {
  const [content, setContent] = useState(1);

  const arrProject = [
   {id: 1, path:'/images/company-project/project5.png', alt:'You will see project', width: 570, height: 255, descr: 'ДОСУГОВЫЙ ЦЕНТР', href:"#", clazz: classes.img_box  },
   {id: 2, path:'/images/company-project/project1.png', alt:'You will see project', width: 570, height: 255, descr: 'ДОСУГОВЫЙ ЦЕНТР2', href:"#", clazz: classes.img_box2 },
   {id: 3, path:'/images/company-project/project2.png', alt:'You will see project', width: 270, height: 255, descr: 'ДОСУГОВЫЙ ЦЕНТР3', href:"#", clazz: classes.img_box3  },
   {id: 4, path:'/images/company-project/project3.png', alt:'You will see project', width: 470, height: 255, descr: 'ДОСУГОВЫЙ ЦЕНТР4', href:"#", clazz: classes.img_box4  },
   {id: 5, path:'/images/company-project/project4.png', alt:'You will see project', width: 370, height: 255, descr: 'ДОСУГОВЫЙ ЦЕНТР5', href:"#", clazz: classes.img_box5 }
  ]
 
  const onGetContent = (id) => {
    setContent(id)
  }
  
  return (
    <section id='projects' className={classes.projects}>
      <div className="container">
        <div className={classes.wrapper}>
          <h2 className={classes.title}>
            Наши проекты
          </h2>
          <div className={classes.wrapper_projects}>
            {
              arrProject.map(({id, path, alt, width, height, descr, href, clazz}) => {
               return <div onClick={() => onGetContent(id)} key={id} className={clazz}>
              <Image  src={path} alt={alt} width={width} height={height}/>
              <div hidden={content !== id} className={cn({[classes.up_content]: content === id})}>

                <div hidden={content !== id} className={cn({[classes.deep_wrap]: content === id})}>
                  <div hidden={content !== id} className={cn({[classes.descr]: content === id})}>
                    {descr}
                  </div>

                  <button hidden={content !== id} className={cn({[classes.detail]: content === id})}>
                  <a href={href}>
                    Подробнее
                    <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="#fff">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z" fill="#fff"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z" fill="#fff"/>
                    </svg>
                  </a>
                  </button>
                </div>
              </div>
            </div>
              })
            }
          </div>
          <Button clazz={classes.see} svg_clazz={classes.svg} content={'Все проекты'}/>
        </div>
      </div>
    </section>
  )
}

export default Projects;