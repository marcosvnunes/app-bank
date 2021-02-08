import Logo from '../../img/Logos.svg'
import Eye from '../../img/eye.svg'
import Calendar from '../../img/Calendar.png'
import ChatText from '../../img/ChatText.svg'
import Bell from '../../img/Bell.svg'
import RightMenu from '../../img/right-menu.svg'

import * as S from './styles'

function Header() {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} alt=""/>
      <S.Division />
       <S.AccountSelect>
         <select name="" id="">
           <option value="">
             Conta Corrente
           </option>
         </select>
         <span>Ag. 00005-1 CC. C.C. 00000000000000000020-1</span>
       </S.AccountSelect>
       <div>
         <span>Saldo <img src={Eye} alt=""/> </span> 
         R$40.000,00
       </div>
       <div>
         <input type="text"/>
         <img src={ChatText} alt=""/>
         <img src={Calendar} alt=""/>
         <img src={Bell} alt=""/>
         <img src={RightMenu} alt=""/>
       </div>
    </S.Wrapper>
  );
}

export default Header;
