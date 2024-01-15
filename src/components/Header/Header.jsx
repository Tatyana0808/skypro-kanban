import { useState } from "react";
import { Container } from "../Common/Common.styled";
import { HeaderBlock, HeaderWrapper,HeaderNav,HeaderLogo } from "./Header.styled";
function Header({ addCard }) {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopUp() {
    setIsOpened((prev) => !prev)
  }
  return (

    <HeaderWrapper>

      <Container>
        
        <HeaderBlock > 
          <HeaderLogo>
          
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          
          <HeaderNav>  
            <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={addCard}>
              Создать новую задачу
            </button>
            <a href="#" className="header__user _hover02" onClick={togglePopUp}>
              Ivan Ivanov
            </a>
            {isOpened && <div
              className="header__pop-user-set pop-user-set"

            >
              {/* <a href="">x</a> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>}

          </HeaderNav>
          </HeaderBlock>
      </Container>
    </HeaderWrapper>
  )
}
export default Header;