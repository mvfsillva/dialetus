import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { For, Choose } from 'react-extras'

import FlexWrap from '../../styles/flex-wrap'

const Wrapper = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.shadow.medium};
  color: ${({ theme }) => theme.palette.black};
  border-radius: ${({ theme }) => theme.radius};
  padding: ${({ theme }) => theme.spacing.medium};
  width: 360px;
  margin: ${({ theme }) => theme.spacing.medium};

  h1, h2, h3 {
    margin-top: ${({ theme }) => theme.spacing.medium};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing};
  }

  .center {
    text-align: center;
  }
`

const Card = ({ data }) => {
  const dialetusService = 'https://github.com/mvfsillva/dialetus-service'

  return (
    <FlexWrap>
      <For of={data} render={item =>
          <Wrapper key={item.slug}>
            <hgroup>
              <h2 className="center">{item.dialect}</h2>
              <h3>Significado:</h3>
            </hgroup>
            <For of={item.meanings} render={meaning =>
              <p key={meaning}>{meaning}</p>
            }/>
            <div>
              <h3>Exemplos:</h3>
              <Choose>
                <Choose.When condition={item.examples === undefined}>
                  Nos ajude adicionando exemplos no <a href={dialetusService} rel="noopener noreferrer" target="_blank">
                    Dialetus Service
                  </a>
                </Choose.When>
                <Choose.When condition={Array.isArray(item.examples)}>
                  <For of={item.examples} render={example => <p key={example}>{example}</p>} />
                </Choose.When>
              </Choose>
            </div>
          </Wrapper>
        }
      />
    </FlexWrap>
  )
}
Card.defaultProps = {
  data: []
}

Card.propTypes = {
  data: PropTypes.array
}

export default Card
