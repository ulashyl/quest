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
     title: "28",
      description:
        "Разгадайте зашифрованный алфавит. Кельтский друид постарался, постарайтесь и вы! 13619151611 2164 (в теме отчета) (2 балла)",
    },
    2: {
      title: "29",
      description:
        "Расскажите сказку Великому Рогатому Богу (в теме отчета) (4 балла)",
    },
    3: {
      title: "30",
      description:
        "Сочните песню. Самое главное, чтобы она была усладой для божественных ушей Кернунна (в теме отчета) (6 баллов)",
    },
    4: {
      title: "31",
      description:
        "Оставьте комментарий в любой из тем Творческого уголка (прикрепите ссылку в теме отчета) (2 балла)",
    },
    5: {
      title: "32",
      description:
        "Создайте во флудилке игру по теме Самайна. ИЛИ, если она уже создана, примите в ней участие (прикрепите ссылку на пост в теме отчета) (4 балла)",
    },
    6: {
      title: "33",
      description:
        "Сказывают о загадочных символах, вырезанных на деревьях окрестностей Замка. Найдите их все и сообщите, в каких локациях их видели (в теме отчета) (6 баллов)",
    },
    7: {
      title: "34",
      description:
        "Напишите 5 убедительных причин не выходить из спальни в Самайн (в теме отчета) (2 балла)",
    },
    8: {
      title: "35",
      description:
        "Поговаривают, что рев Кернунна слышали в Безмолвном лесу. Проверьте, правдивы ли слухи (пост в РПГ-локации)(4 балла)",
    },
    9: {
      title: "36",
      description:
        "Отыграйте с друзьями в любой РПГ-локации окрестностей, как вы ищите Кернунна (пост от 1000 символов) (6 баллов)",
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
                      28
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(2)}
                    >
                      29
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(3)}
                    >
                      30
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
                      31
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(5)}
                    >
                      32
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(6)}
                    >
                      33
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
                      34
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(8)}
                    >
                      35
                    </button>
                    <button
                      className="number-button"
                      onClick={() => handleNumberClick(9)}
                    >
                      36
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
