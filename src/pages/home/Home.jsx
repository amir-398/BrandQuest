import { useState } from "react";
import style from "./home.module.css";
import { IoMdAddCircle } from "react-icons/io";
import home_img from "../../assets/home_img.png";
import { IoClose } from "react-icons/io5";
export default function Home() {
  const [inputs, setInputs] = useState([{ value: "" }, { value: "" }]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const handleAddInput = () => {
    if (inputs.length < 8) {
      setInputs([...inputs, { value: "" }]);
    }
    if (inputs.length >= 8) {
      setModalIsVisible(true);
    }
    // Ajoute un nouvel élément au tableau
  };
  // recuprer les données :
  // Gestionnaire pour les changements d'input
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };
  return (
    <>
      <div className={style.section_1}>
        <img className={style.home_img} src={home_img} alt="home img" />
        <h1>Brand Quest</h1>
        <h2>Every Move is a Power Player</h2>
        <div className={style.form}>
          <h4>Players names</h4>
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              placeholder="enter player name here"
              onChange={(event) => handleInputChange(index, event)}
            /> // Rend chaque input
          ))}
          <div className={style.addIconContainer}>
            <IoMdAddCircle
              color="#fff"
              size={35}
              onClick={() => handleAddInput()}
            />
          </div>
        </div>
        <button className={style.startPlayBtn}>Start game</button>
      </div>
      <div className={style.section_2}></div>
    </>
  );
}
