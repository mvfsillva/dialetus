import * as S from './styles'
import { Container } from 'layout'

const Footer = () => {
  return (
    <S.Wrapper>
      <Container>
        <p>
          Made with <S.Love>♥</S.Love> by{' '}
          <a href="https://mvfsillva.dev" target="blank">
            Marcus Silva
          </a>
        </p>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
