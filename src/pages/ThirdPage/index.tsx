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
     title: "55",
      description:
        "Сделайте фото с Великим Рогатым Богом (фото в теме отчета) (2 балла)",
    },
    2: {
      title: "56",
      description:
        "Доставьте недостающие буквы и у тебя получится восстановить фразу. Я П•Е••ОН•ЮС• •ЕР•Д Т•Б•Й , • В••ИК•Й ••РН•Н! (тема отчета) (4 балла)",
    },
    3: {
      title: "57",
      description:
        "Создайте тематический мерч (фото в теме отчета) (6 баллов)",
    },
    4: {
      title: "58",
      description:
        "Контактируйте со Стариком Мором хотя бы один раз (приложите отчет любым удобным для вас способом в вашу тему)(2 балла)",
    },
    5: {
      title: "59",
      description:
        "Успокойте ПОшку. Преподнесите утешительный презент в жилом крыле Башни ПО (прикрепите ссылку на пост в теме отчета) (4 балла)",
    },
    6: {
      title: "60",
      description:
        "Где-то в окрестностях видели кентавра. Рискнете ли вы пробраться к месту его обитания и оставить для него дар? (ссылка на пост в загаданной локации) (6 баллов)",
    },
    7: {
      title: "61",
      description:
        "Успокойте Старика Мора, написав ему приятное письмо (приложите скриншот) (2 балла)",
    },
    8: {
      title: "62",
      description:
        "Напишите ваши мысли о том, верите ли вы в спасение от гнева Кернунна (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "63",
      description:
        "Отыщите дары леса в любой РПГ-локации окрестностей или Запретного леса (пост от 1000 символов) (6 баллов)",
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
                      55
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      56
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      57
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
                      58
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      59
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      60
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
                      61
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      62
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      63
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
