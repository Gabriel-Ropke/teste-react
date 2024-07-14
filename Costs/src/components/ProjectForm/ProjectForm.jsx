import React, { useState, useRef } from "react";
import styles from "./ProjectForm.module.css";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { fetchAPI } from "../../assets/functions";
export function ProjectForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    chapter: "",
    release: "",
  });
  const [categories, setCategories] = useState([]);
  fetchAPI({
    fetchURL: "http://localhost:5000/categories",
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((data) => setCategories(data));

  const [imageSrc, setImageSrc] = useState("");
  const fileInputRef = useRef(null); // Cria uma referência para o input file

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const updateInputImage = (e) => {
    const target = e.target;
    const file = target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        const readerTarget = e.target;
        setImageSrc(readerTarget.result);
      });

      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageSrc("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Redefine o valor do input file
    }
  };

  return (
    <form action="POST">
      <h1>Cadastrar Mangá</h1>
      <div className={styles.inputs}>
        <Input
          type={"text"}
          text={"Nome da Obra"}
          name={"name"}
          handleOnChange={handleInputChange}
          value={formValues.name}
        />
        <Input
          type={"number"}
          text={"Número de Capítulos"}
          name={"chapter"}
          handleOnChange={handleInputChange}
          value={formValues.chapter}
        />
        <Input
          type={"number"}
          text={"Ano de Lançamento"}
          name={"release"}
          handleOnChange={handleInputChange}
          value={formValues.release}
        />
        <Select
          title={"Selecione até 5 categorias"}
          min={1}
          max={5}
          optionArray={categories}
        />
      </div>

      <div className={styles.inputImgContainer}>
        <span className={styles.inputImgTitle}>Capa da Obra</span>
        <img src={imageSrc} alt="" />
        <span
          className={imageSrc ? styles.closeButton : styles.hidden}
          onClick={removeImage}
        >
          <IoMdClose size={25} />
        </span>
        <label htmlFor="image" className={imageSrc ? styles.hidden : ""}>
          <FaPlus size={100} />
          <input
            type="file"
            id="image"
            alt=""
            onChange={updateInputImage}
            ref={fileInputRef} // Associa a referência ao input file
          />
        </label>
      </div>
      <button type="submit" value="Criar Projeto">
        Criar Projeto
      </button>
    </form>
  );
}
