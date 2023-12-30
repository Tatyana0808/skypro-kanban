
import Header from './components/Header/Header';

import Wrapper from './components/Wrapper/Wrapper';
import PopBrowse from './components/PopUp/PopBrowse/PopBrowse';
import './App.css';
import PopExit from './components/PopUp/PopExit/PopExit';
import PopNewCard from './components/PopUp/PopNewCard/PopNewCard';
import Main from './components/Main/Main';

function App() {


  return (<Wrapper>
    <PopBrowse/>
    <PopExit/>
    <PopNewCard/>
    <Header/>
    <Main/>
  

  </Wrapper>);



}

export default App;