import React, { useContext, useState } from "react";
import { PopBrowseContainer, PopBrowseContent } from '../PopBrowse/PopBrowse.styled';
import { Calendar } from "../../Calendar/Calendar";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import {  addTasks, } from "../../../api";
import { CardsContext } from "../../../contexts/cards";
import { useUser } from "../../../hooks/useUser";

function PopNewCard() {
  const navigate = useNavigate();
  const { cards, setCards } = useContext(CardsContext);
  const { userData } = useUser();
  const [selected, setSelected] = React.useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    topic: "",
    description: "",
    status: "Без статуса",
    date: "",
  });

  function addCard() {
    try {


      const newCard = {
        ...newTask, date: selected,

      };

      console.log(newCard);
      addTasks(newCard).then((data) => {
        setCards(data.tasks);

      })

    } catch (error) {
      alert(error.message);
    }

  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNewTask({
      ...newTask,
      [name]: value,
    });
  };


  // const {userData} = useUser();
  //   const {cards, setCards} = useContext(CardsContext);
  //    const [selected, setSelected] = useState();
  //   const { setTasks } = useUser();
  //   const navigate = useNavigate();
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setNewTask({
  //       ...newTask,
  //       [name]: value,
  //     });
  //   };
  //   const [newTask, setNewTask] = useState({
  //     title: "",
  //     topic: "",
  //     description: "",
  //   });
  //   const addCard = async () => {
  //     let newCard = {
  //       ...newTask,
  //       date: selected,
  //     };

  //     addTasks(newCard).then(() => {
  //       getTasks().then((res) => {
  //         setTasks(res.tasks);
  //         navigate(appRoutes.MAIN);
  //       });
  //     });
  //   };

  return (
    <PopBrowseContent id="popBrowse">

      <PopBrowseContainer>
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={appRoutes.MAIN} className="pop-new-card__close">
              ✖
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <textarea value={newTask.title}
                    onChange={handleInputChange}
                    className="form-new__input"

                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea value={newTask.description}
                    onChange={handleInputChange}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </form>


             <Calendar selected={selected} setSelected={setSelected} />

              {/* <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={6}
                          height={11}
                          viewBox="0 0 6 11"
                        >
                          <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                        </svg>
                      </div>
                      <div className="nav__action" data-action="next">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={6}
                          height={11}
                          viewBox="0 0 6 11"
                        >
                          <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="calendar__content">
                    <div className="calendar__days-names">
                      <div className="calendar__day-name">пн</div>
                      <div className="calendar__day-name">вт</div>
                      <div className="calendar__day-name">ср</div>
                      <div className="calendar__day-name">чт</div>
                      <div className="calendar__day-name">пт</div>
                      <div className="calendar__day-name -weekend-">сб</div>
                      <div className="calendar__day-name -weekend-">вс</div>
                    </div>
                    <div className="calendar__cells">
                      <div className="calendar__cell _other-month">28</div>
                      <div className="calendar__cell _other-month">29</div>
                      <div className="calendar__cell _other-month">30</div>
                      <div className="calendar__cell _cell-day">31</div>
                      <div className="calendar__cell _cell-day">1</div>
                      <div className="calendar__cell _cell-day _weekend">2</div>
                      <div className="calendar__cell _cell-day _weekend">3</div>
                      <div className="calendar__cell _cell-day">4</div>
                      <div className="calendar__cell _cell-day">5</div>
                      <div className="calendar__cell _cell-day ">6</div>
                      <div className="calendar__cell _cell-day">7</div>
                      <div className="calendar__cell _cell-day _current">8</div>
                      <div className="calendar__cell _cell-day _weekend">9</div>
                      <div className="calendar__cell _cell-day _weekend">10</div>
                      <div className="calendar__cell _cell-day">11</div>
                      <div className="calendar__cell _cell-day">12</div>
                      <div className="calendar__cell _cell-day">13</div>
                      <div className="calendar__cell _cell-day">14</div>
                      <div className="calendar__cell _cell-day">15</div>
                      <div className="calendar__cell _cell-day _weekend">16</div>
                      <div className="calendar__cell _cell-day _weekend">17</div>
                      <div className="calendar__cell _cell-day">18</div>
                      <div className="calendar__cell _cell-day">19</div>
                      <div className="calendar__cell _cell-day">20</div>
                      <div className="calendar__cell _cell-day">21</div>
                      <div className="calendar__cell _cell-day">22</div>
                      <div className="calendar__cell _cell-day _weekend">23</div>
                      <div className="calendar__cell _cell-day _weekend">24</div>
                      <div className="calendar__cell _cell-day">25</div>
                      <div className="calendar__cell _cell-day">26</div>
                      <div className="calendar__cell _cell-day">27</div>
                      <div className="calendar__cell _cell-day">28</div>
                      <div className="calendar__cell _cell-day">29</div>
                      <div className="calendar__cell _cell-day _weekend">30</div>
                      <div className="calendar__cell _other-month _weekend">
                        1
                      </div>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    id="datepick_value"
                    defaultValue="08.09.2023"
                  />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Выберите срок исполнения <span className="date-control" />.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">


                {/* <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
              <div className="categories__theme _green">
                <p className="_green">Research</p>
              </div>
              <div className="categories__theme _purple">
                <p className="_purple">Copywriting</p>
              </div> */}

                <div className="prod_checbox">
                  <div className="radio-toolbar">
                    <input type="radio" id="radio1" name="topic" onChange={handleInputChange} value="Web Design" className="hidden" />
                    <label htmlFor="radio1">Web Design</label>

                    <input type="radio" id="radio2" name="topic" onChange={handleInputChange} value="Research" className="hidden" />
                    <label htmlFor="radio2">Research</label>

                    <input type="radio" id="radio3" name="topic" onChange={handleInputChange} value="Copywriting" className="hidden" />
                    <label htmlFor="radio3">Copywriting</label>
                  </div>
                </div>




              </div>
            </div>
            <Link to={appRoutes.MAIN}
            >
              <button onClick={addCard} className="form-new__create _hover01" id="btnCreate">
                Создать задачу
              </button>
            </Link>
          </div>
        </div>
      </PopBrowseContainer>
    </PopBrowseContent>
  )
}
export default PopNewCard;