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
     title: "91",
      description:
        "Придумайте хотя бы 3 рифмы к слову ПРИРОДА (в теме) (2 балла)",
    },
    2: {
      title: "92",
      description:
        "Придумайте и составьте рецепт из съедобных (?) грибов. Не забудьте дать название своему кулинарному шедевру (в теме) (4 балла)",
    },
    3: {
      title: "93",
      description:
        "Нарисуй плакат в поддержку обитателей лесов Хогвартса Дамблдора (фото в теме) (6 баллов)",
    },
    4: {
      title: "94",
      description:
        "Спросите о Самайне в теме отчета (2 балла)",
    },
    5: {
      title: "95",
      description:
        "Помогите преподавателю украсить кабинет к празднику. Прикрепите фото/ссылку на хостинг готового варианта украшения кабинета в теме отчета (4 балла)",
    },
    6: {
      title: "96",
      description:
        "Старый смотритель слышал жалобные крики зверят и птицы в лесу. Отыщите бедолаг и позаботьтесь о них, пока Мор совершает обход (отчитайтесь в теме любым способом) (6 баллов)",
    },
    7: {
      title: "97",
      description:
        "Напишите в теме отчета пять вариантов существующих имен Рогатого Бога и поясните, где они используются (2 балла)",
    },
    8: {
      title: "98",
      description:
        "Попробуйте разговорить Старика Мора о Кернунне в его Хижине (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "99",
      description:
        "Взгляните страху в лицо! Подберите подходящий празднику костюм и выйдите навстречу Дикой Охоте (пост от 1000 символов) (6 баллов)",
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
                      91
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      92
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      93
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
                      94
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      95
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      96
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
                      97
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      98
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      99
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
