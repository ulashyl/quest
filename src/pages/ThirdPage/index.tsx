import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import thirdBackground from "../../assets/third.jpg";
import chooseButton from "../../assets/choose.png";
import tableImage from "../../assets/table.png";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import backButton from "../../assets/back_btn.png";
import "./ThirdPage.css";

const ThirdPage = () => {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const numbersData = {
    1: {
     title: "19",
      description:
        "Составьте плейлист из 5 песен ассоциирующихся с темой “Кельтский бог” (в теме отчета) (2 балла)",
    },
    2: {
      title: "20",
      description:
        "Расскажите анекдот старику Мору, возможно, ему понравится (в теме отчета) (4 балла)",
    },
    3: {
      title: "21",
      description:
        "Составьте ребус, основанный на преданиях о Кернунне (в теме отчета) (6 баллов)",
    },
    4: {
      title: "22",
      description:
        "Повысьте репутацию любому обитателю ХД, в комментарии написав поздравление с праздником (прикрепите скриншот в тему отчета) (2 балла)",
    },
    5: {
      title: "23",
      description:
        "Напишите дифирамб Старику Мору. Задание считается выполненным, если смотрителю понравится ваша хвала (прикрепите ссылку в теме отчета) (4 балла)",
    },
    6: {
      title: "24",
      description:
        "Проследите за Стариком Мором. Составьте план его ночного обхода, указав локации (сделайте это в виде картинки-карты) (6 баллов)",
    },
    7: {
      title: "25",
      description:
        "Опишите идею костюма для празднования в теме отчета (2 балла)",
    },
    8: {
      title: "26",
      description:
        "Преподнесите праздничный презент преподавателю в его кабинете (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "27",
      description:
        "Опишите поэтапное приготовление праздничного блюда на Кухне (пост от 1000 символов) (6 баллов)",
    },
  };

  const handleBack = () => {
  };

  const handleNumberClick = (number: number) => {
    setSelectedNumber(number);
  };

  const closeModal = () => {
    setSelectedNumber(null);
  };

  return (
    <div className="third-page-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${thirdBackground})` }}
      >
        <div className="content">
          {!selectedNumber && (
            <img
              src={chooseButton}
              alt="Choose"
              className="choose-button"
              onClick={handleBack}
            />
          )}

          {!selectedNumber && (
            <div className="table-container">
              <img src={tableImage} alt="Table" className="table-image" />
              <div className="table-content">
                <div className="table-row">
                  <img
                    src={category1}
                    alt="Category 1"
                    className="category-image"
                  />
                  <div className="numbers-row">
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(1)}
                    >
                      19
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      20
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      21
                    </button>
                  </div>
                </div>
                <div className="table-row">
                  <img
                    src={category2}
                    alt="Category 2"
                    className="category-image"
                  />
                  <div className="numbers-row">
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(4)}
                    >
                      22
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      23
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      24
                    </button>
                  </div>
                </div>
                <div className="table-row">
                  <img
                    src={category3}
                    alt="Category 3"
                    className="category-image"
                  />
                  <div className="numbers-row">
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(7)}
                    >
                      25
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      26
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      27
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedNumber && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-table-container">
              <img src={tableImage} alt="Table" className="modal-table-image" />
              <div className="modal-text-content">
                {/* <h2 className="modal-title">
                  {
                    numbersData[selectedNumber as keyof typeof numbersData]
                      .title
                  }
                </h2> */}
                <p className="modal-description">
                  {
                    numbersData[selectedNumber as keyof typeof numbersData]
                      .description
                  }
                </p>
              </div>
            </div>
            <img
              src={backButton}
              alt="Back"
              className="modal-back-button"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdPage;
