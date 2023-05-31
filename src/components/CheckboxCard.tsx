import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import styles from './CheckboxCard.module.css'

export function CheckboxCard() {
  return(
    <div className={styles.checkbox}>
      <Checkbox.Root className={styles.checkboxRoot}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      
    </div>  
  );
}