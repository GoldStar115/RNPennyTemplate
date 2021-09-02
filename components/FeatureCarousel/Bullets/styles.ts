import styled from 'styled-components/native'

export const BulletsContainer = styled.View`
  position: absolute;
  flex-direction: row;
  bottom: 3%;
  justify-content: center;
  padding-left: 25px;
`
interface BulletProps {
  current: boolean
}

export const Bullet = styled.Text<BulletProps>`
  font-size: 50px;
  width: 15%;
  color: white;
  opacity: ${({ current }) => (current ? 1 : '0.4')};
`
