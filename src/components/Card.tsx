import { CheckboxCard } from './CheckboxCard';
import styles from './Card.module.css';


import { Trash } from 'phosphor-react';

export function Card() {
  return(
    <div className={styles.cardWrapper}>
      <CheckboxCard />
      <label className={styles.label} htmlFor="">
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </label>
      <button 
        className={styles.btn}
        title="Deletar tarefa"
      >
        <Trash size={20}/>
      </button>
    </div>
  )
}