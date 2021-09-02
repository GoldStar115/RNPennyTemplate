import styled from 'styled-components/native'

export const BulletsContainer = styled.View`
  flex-direction: row;
  top: 30%;
  flex: 1;
  position: absolute;
  left: 5%;
  height: 50px;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`

interface BulletProps {
  current: boolean
}

export const Bullet = styled.Text<BulletProps>`
  font-size: 50px;
  width: 10%;
  color: #5fe2af;
  opacity: ${({ current }) => (current ? 1 : '0.4')};
`
