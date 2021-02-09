import homeImg from '../../img/HouseLine.svg'
import chartImg from '../../img/ChartPieSlice.svg'
import chartLineUpImg from '../../img/ChartLineUp.svg'
import moneyImg from '../../img/Money.svg'
import handsImg from '../../img/Handshake.svg'
import pixImg from '../../img/Group.svg'
import credCardImg from '../../img/CreditCard.svg'
import receiptImg from '../../img/Receipt.svg'
import wrenchImg from '../../img/Wrench.svg'
import questionImg from '../../img/Question.svg'
import CaretRight from '../../img/CaretRight.svg'

import * as S from './styles'
import NavIcon from '../NavIcon'

const SideMenu = () => {
  return (
    <S.Wrapper>
      <NavIcon icon={homeImg} />
      <NavIcon icon={chartImg} active />
      <NavIcon icon={chartLineUpImg} />
      <NavIcon icon={moneyImg} />
      <NavIcon icon={handsImg} />
      <NavIcon icon={pixImg} disable />
      <NavIcon icon={credCardImg} disable />
      <NavIcon icon={receiptImg} />
      <NavIcon icon={wrenchImg} />
      <NavIcon icon={questionImg} />
      <S.OpenBox>
        <img src={CaretRight} alt="" />
      </S.OpenBox>
    </S.Wrapper>
  )
}

export default SideMenu
