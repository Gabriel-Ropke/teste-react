import React, { useState } from "react";
import styles from "./Select.module.css";
import { IoMdClose } from "react-icons/io";

export function Select({ title, optionArray, min, max }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState(optionArray);

  console.log(optionArray);

  function changeOpenState() {
    if (selectedOptions.length < max) {
      setIsOpen(!isOpen);
    }
  }

  const handleSelect = (option) => {
    if (selectedOptions.length < max) {
      changeOpenState();
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
      setOptions((prevOptions) =>
        prevOptions.filter((opt) => opt.id !== option.id)
      );
    }
  };

  const handleRemove = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((selectedOption) => selectedOption.id !== option.id)
    );
    setOptions((prevOptions) => [...prevOptions, option]);
  };

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectBox} onClick={() => changeOpenState()}>
        {title || "Selecione até 5 categorias"}
      </div>
      <ul id={styles.optionsList} className={isOpen ? styles.active : ""}>
        {options.map((option) => (
          <li
            key={option.id}
            className={styles.optionItem}
            onClick={() => handleSelect(option)}
          >
            {option.name}
          </li>
        ))}
      </ul>
      <div className={styles.selectedOptions}>
        {selectedOptions.map((selectedOption) => (
          <div key={selectedOption.id} className={styles.selectedOption}>
            {selectedOption.name}
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => {
                if (!isOpen || options.length === 0) {
                  handleRemove(selectedOption);
                }
              }}
            >
              <IoMdClose size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
