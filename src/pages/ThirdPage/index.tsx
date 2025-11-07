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
     title: "73",
      description:
        "Принесите книгу, где упоминается Ужасающий Кернунн. Даже божества любят читать! (фото обложки+ссылка на книгу в теме отчета) (2 балла)",
    },
    2: {
      title: "74",
      description:
        "Исправьте измененные пробелы, Кернунн любит пытливые умы! Кель тывосп ева лие го (в теме отчета) (4 балла)",
    },
    3: {
      title: "75",
      description:
        "Придумайте магический артефакт, который бы пришёлся по душе Великому Кернунну (фото+название+магические свойства в теме) (6 баллов)",
    },
    4: {
      title: "76",
      description:
        "Напишите три предложения о том, что вас пугает в этот Самайн (в теме отчета) (2 балла)",
    },
    5: {
      title: "77",
      description:
        "Поручите любому участнику выполнить одну из традиций Самайна. Задание считается выполненным, если тот, кому вы его поручили, отчитался о завершении (прикрепите ссылку/скриншот в теме отчета) (4 балла)",
    },
    6: {
      title: "78",
      description:
        "Старик Мор растерял галеоны. Будете ли вы достаточно честны, чтобы вернуть их? Принесите монеты в Хижину, если соблазн над вами не властен(ссылка на пост в теме отчета; укажите, ГДЕ вы нашли монеты) (6 балла)",
    },
    7: {
      title: "79",
      description:
        "Напишите список из любимых вами традиций Самайна в теме отчета (2 балла)",
    },
    8: {
      title: "80",
      description:
        "Выразите свои страхи по поводу разгневанности Кернунна (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "81",
      description:
        "Водите праздничный хоровод с друзьями, пока не устанут ноги (пост от 1000 символов) (6 баллов)",
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
                      73
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      74
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      75
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
                      76
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      77
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      78
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
                      79
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      80
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      81
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
