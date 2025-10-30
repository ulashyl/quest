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
        "Составьте плейлист из 5 песен, ассоциирующихся с темой «Лес». Пусть музыка ласкает слух Рогатого Бога! (в теме отчета) (2 балла)",
    },
    2: {
      title: "Число 2 - Гармония",
      description:
        "Посвятите стихотворение Великому Кернунну (мин. 2 четверостишия) (в теме отчета) (4 балла)",
    },
    3: {
      title: "Число 3 - Творчество",
      description:
        "Нарисуйте Кернунна. Пусть его образ страшит вас! (прикрепите фото рисунка в теме отчета) (6 баллов)",
    },
    4: {
      title: "Число 4 - Стабильность",
      description:
        "Поставьте аватар с костюмом к Самайну (прикрепите скриншот с ГФ в тему отчета) (2 балла)",
    },
    5: {
      title: "Число 5 - Свобода",
      description:
        "Пригласите друга поучаствовать в квесте (укажите в теме отчета, кого пригласили и прикрепите скриншот с созданной им темой) (4 балла)",
    },
    6: {
      title: "Число 6 - Забота",
      description:
        "Старик Мор потерял свою шапку. Найдите ее и отчитайтесь в своей теме, где именно вы ее обнаружили (6 баллов)",
    },
    7: {
      title: "Число 7 - Мудрость",
      description:
        "Составьте список планов на Сайман в теме отчета (2 балла)",
    },
    8: {
      title: "Число 8 - Изобилие",
      description:
        "Обыграйте один или с друзьями, как готовите угощения для Кернунна (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "Число 9 - Завершение",
      description:
        "Напишите, как вы празднуете Самайн (пост от 1000 символов) (6 баллов)",
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
                      1
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      2
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      3
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
                      4
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      5
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      6
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
                      7
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      8
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      9
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
