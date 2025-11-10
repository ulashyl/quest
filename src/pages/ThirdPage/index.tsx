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
     title: "100",
      description:
        "Пришла пора мемов (3 шт), думаю, они понравятся Ужасающему Кернунну (в теме) (2 балла)",
    },
    2: {
      title: "101",
      description:
        "Расскажите легенду о Кернунне (в теме) (4 балла)",
    },
    3: {
      title: "102",
      description:
        "Напишите рассказ о том, что произойдет, если Кернунн внезапно появится в современном городе (в теме) (6 баллов)",
    },
    4: {
      title: "103",
      description:
        "Ответьте любому участнику квеста на вопрос предыдущего дня (в своей теме отчета, отметьте, на чей вопрос вы ответили) (2 балла)",
    },
    5: {
      title: "104",
      description:
        "Возьмите индивидуальное расписание и закройте хотя бы один пункт (прикрепите скриншот с отметкой о выполнении в теме отчета) (4 балла)",
    },
    6: {
      title: "105",
      description:
        "Отыщите алтарь и сделайте подношение Кернунну(предположите, ГДЕ он был все это время!) (мини-пост+фото) (6 баллов)",
    },
    7: {
      title: "106",
      description:
        "Предложите блюда для праздничного пира в Большом зале в теме отчета (2 балла)",
    },
    8: {
      title: "107",
      description:
        "Опишите, как создаете/находите артефакт, который смог бы защитить вас от Дикой Охоты (пост в РПГ-локации) (4 балла)",
    },
    9: {
      title: "108",
      description:
        "Продемонстрируйте свое уважение к природе и животным в любой РПГ-локации (пост от 1000 символов) (6 баллов)",
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
                      100
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      101
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      102
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
                      103
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      104
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      105
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
                      106
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      107
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      108
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
