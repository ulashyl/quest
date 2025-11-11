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
     title: "109",
      description:
        "Пятью словами опишите великое кельтское божество, чей гнев вы укрощаете (в теме отчета) (2 балла)",
    },
    2: {
      title: "110",
      description:
        "Преподнесите Рогатому Богу символ вашего уважения и почтения - ему и природе ( в теме отчета) (4 балла)",
    },
    3: {
      title: "111",
      description:
        "Расскажите свой собственный сказ о Самайне в Хогвартсе (в теме отчета) (6 баллов)",
    },
    4: {
      title: "112",
      description:
        "Поблагодарите Старика Мора за его рассказы (в теме отчета) (2 балла)",
    },
    5: {
      title: "113",
      description:
        "Выполните домашнее задание по предмету, который считаете связанным с квестом (укажите в теме, почему выбрали этот предмет + скриншот отправления) (4 балла)",
    },
    6: {
      title: "114",
      description:
        "Сказка ложь, да в ней намек. Внимательно изучите рассказы Старика Мора. О чем он вам намекал все это время? (отпишите догадки в теме отчета) (6 баллов)",
    },
    7: {
      title: "115",
      description:
        "Предложите свои идеи, как можно задобрить Кернунна перед финалом (в теме отчета) (2 балла)",
    },
    8: {
      title: "116",
      description:
        "Сегодня Кернунн приходил во снах ко всем обитателям Хогвартса. Расскажите, что снилось вам (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "117",
      description:
        "Отправляйтесь на встречу с Кернунном и продемонстрируйте готовность. К чему - решите сами! (РПГ-пост от 1000 символов) (6 баллов)",
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
                      109
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      110
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      111
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
                      112
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      113
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      114
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
                      115
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      116
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      117
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
