import { useState, type FC } from 'react';
import styles from './DropdownList.module.scss';
import ChevronIcon from 'assets/icons/right.svg?react';

const DropdownListComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown_header} onClick={toggleList}>
        <span className={styles.dropdown_selected}>New list</span>
        <ChevronIcon />
      </div>
      {isOpen && (
        <div className={styles.dropdown_list_container}>
          <ul className={styles.dropdown_list}>
            <li className={styles.dropdown_list_item}>First item filter</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownList = DropdownListComponent;
