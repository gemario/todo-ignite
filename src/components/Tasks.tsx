import Clipboard from '../assets/clipboard.svg';
import { Card } from './Card';


import styles from './Tasks.module.css';

export function Tasks() {
  return(
    <div className={styles.tasks}>
        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={styles.tasksCompleted}>
            <strong>Concluídas</strong>
            <span>0</span>
          </div>
        </div>
    

          <Card />
          {/*<div className={styles.tasksContent}> 
            <img src={Clipboard} alt="" />
            <div className={styles.paragraph}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>*/}
        
    </div>
  ) 
}