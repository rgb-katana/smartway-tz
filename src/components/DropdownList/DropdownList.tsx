import { useState, type FC } from 'react';
import styles from './DropdownList.module.scss';

const DropdownListComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const toggleList = () => setIsOpen(!isOpen);
  // const onOptionClicked = value => () => {
  //   setSelectedOption(value);
  //   setIsOpen(false);
  //   console.log(selectedOption);
  // };

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown_header} onClick={toggleList}>
        <span className={styles.dropdown_selected}>DropdownList</span>
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
