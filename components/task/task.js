import classes from './task.module.scss';

const Task = () => {
  return (
    <section className={classes.task}>
      <div className="container">
        <h2 className={classes.title}>Основные задачи</h2>

        <div className={classes.wrapper}>
          <div className={classes.block1}>
            <div className={classes.number}>1</div>
            <div className={classes.text}>
               Создание комфортных условий и повышение качества обслуживания клиентов
            </div>
          </div>

          <div className={classes.block2}>
            <div className={classes.number}>2</div>
            <div className={classes.text}>
               Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Task;