import { ITask } from '../Interfaces';
import styles from './Card.module.css';


import { Trash } from 'phosphor-react';

interface TaskProps {
  task: ITask,
  deleteTask(taskId: number): void,
  handleTaskCompleted(taskId: number): void,
}

export function Card({ task, deleteTask, handleTaskCompleted }: TaskProps) {

  return(
    <div className={styles.cardWrapper}>
      <input 
        type="checkbox"
        onClick={() => handleTaskCompleted(task.id)}
      />  
      <label className={styles.label} >
        {task.content}
      </label>
      <button 
        className={styles.btn}
        title="Deletar tarefa"
        onClick={() => deleteTask(task.id)}
      >
        <Trash size={20}/>
      </button>
    </div>
  )
}