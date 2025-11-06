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
     title: "64",
      description:
        "Зашифруйте послание Кернунну на выдуманном языке. Пусть никто не поймет! Но если спросят, будьте готовы ответить (тема отчета) (2 балла)",
    },
    2: {
      title: "65",
      description:
        "Кажется, у гриндиллоу выпали молочные зубы. Старик Мор видел их на берегу Черного озера. Найдите им применение (фото в теме отчета) (4 балла)",
    },
    3: {
      title: "66",
      description:
        "Покажите, что вы не боитесь Рогатого Бога! Сочините шуточное стихотворение (от 3 четверостиший в теме отчета) (6 баллов)",
    },
    4: {
      title: "67",
      description:
        "Сыграйте в 5 игр во флудилке. Пусть ваше веселье станет заразительным! (ссылки в теме отчета) (2 балла)",
    },
    5: {
      title: "68",
      description:
        "Подготовьте приглашение на несуществующую вечеринку и отправьте его совой любому обитетелю, не принимающему участие в квесте (скриншот в теме отчета) (4 балла)",
    },
    6: {
      title: "69",
      description:
        "Сделайте подарок любому обитателю. Красивая коробка, аппетитное содержимое и… подложите блевательный батончик, так, чтобы о нем никто не узнал (мини-РПГ-пост+фото) (6 баллов)",
    },
    7: {
      title: "70",
      description:
        "Напишите 3 вредных совета на тему «Как вести себя с кельтским Богом» (в теме отчета) (2 балла)",
    },
    8: {
      title: "71",
      description:
        "Сладость или гадость? Сделайте мелкую пакость в любой РПГ-локации ХД (РПГ-пост)(4 балла)",
    },
    9: {
      title: "72",
      description:
        "Вы давно не навещали Кернунна. Подготовьте на его поляне в Безмолвном лесу «теплый прием» (пост от 1000 символов) (6 баллов)",
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
                      64
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      65
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      66
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
                      67
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      68
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      69
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
                      70
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      71
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      72
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
