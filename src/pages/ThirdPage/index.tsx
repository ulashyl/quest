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
     title: "Число 1 - Начало",
      description:
        "Что зашифровал Кернунн в тексте? Йом венг мокшилс килев! (тема отчета) (2 балла)",
    },
    2: {
      title: "Число 2 - Гармония",
      description:
        "Придумай загадку, чтобы запутать разум Рогатого Бога (тема отчета) (4 балла)",
    },
    3: {
      title: "Число 3 - Творчество",
      description:
        "Выполни домашнее задание (основу) по любой дисциплине из вашего индивидуального расписания (скриншот в теме отчета) (6 баллов)",
    },
    4: {
      title: "Число 4 - Стабильность",
      description:
        "Выберите три обитателя ХД, чьи праздничные образы запомнились вам больше всего. Отметьте, кому бы вы хотели сделать комплимент (в теме отчета) (2 балла)",
    },
    5: {
      title: "Число 5 - Свобода",
      description:
        "Создайте уникальный сувенир к Самайну и прикрепите фото или ссылку на хостинг в теме отчета (4 балла)",
    },
    6: {
      title: "Число 6 - Забота",
      description:
        "Смотритель Мор утверждает, что видел следы Дикой Охоты в окрестностях. Отыщите их и, если вам самим удастся их запечатлеть, прикрепите СВОЕ фото в теме отчета (6 баллов)",
    },
    7: {
      title: "Число 7 - Мудрость",
      description:
        "Поздравьте с праздником друга (приложите скриншот поздравления) (2 балла)",
    },
    8: {
      title: "Число 8 - Изобилие",
      description:
        "Напишите, как украшаете любую локацию на ГФ в тематике Самайна (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "Число 9 - Завершение",
      description:
        "Расскажите о традициях Самайна/Хеллоуина в вашей семье (пост от 1000 символов) (6 баллов)",
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
                      10
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      11
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      12
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
                      13
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      14
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      15
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
                      16
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      17
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      18
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
