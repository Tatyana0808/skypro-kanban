

import { useState } from 'react';

import { GlobalStyle } from './Global.styled';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './lib/appRoutes';
import CardPage from './pages/CardPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import "./App.css"
import PopExit from './components/PopUp/PopExit/PopExit';


import NotFoundPage from './pages/NotFoundPage';
import CardNewPage from './pages/CardNewPege';
function App({ addCard, isLoaded, cards }) {

  // const {user} = useUser();
  const [userData, setUserData] = useState(null);

  // const [cards, setCards] = useState(null);
  // const [isLoaded,setIsLoaded] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //  getTasks({token: user?.token})
  // .then((data) => {
  //   console.log(data.tasks);
  //   setCards(data.tasks);
  // }) 
  // .then(() =>{
  //   setIsLoaded(false);
  // })
  // .catch((error) => {
  // setError(error.message);
  // }) 
  // }, [user?.token])


  // function addCard() {
  //   setCards([
  //     ...cards,
  //     {
  //       id: cards.length + 1,
  //       theme: "Web Design",
  //       title: "Название задачи",
  //       date: "30.10.23",
  //       status: "Без статуса",

  //     }
  //   ])

  // }


  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={appRoutes.CARD} element={<CardPage />} />
          <Route path={appRoutes.MAIN} element={<MainPage
            isLoaded={isLoaded}
            cards={cards}
            addCard={addCard} />} >
            <Route path={`${appRoutes.CARD}/:cardId`} element={<CardPage setUserData={setUserData} />} />
            <Route path={appRoutes.CARD_NEW} element={<CardNewPage />} />
            <Route path={appRoutes.EXIT} element={<PopExit />} />
          </Route>
        </Route>


        <Route path={appRoutes.LOGIN} element={<LoginPage />} />
        <Route path={appRoutes.REGISTER} element={<RegisterPage setUserData={setUserData} />} />
        {<Route path={appRoutes.NOT_FOUND} element={<NotFoundPage />} />}
      </Routes>

    </>
  );



}

export default App;
