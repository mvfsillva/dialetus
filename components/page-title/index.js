import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { If } from 'react-extras'

import theme from '../../theme/default'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.spacing.medium};

`

const PageTitle = ({ title, description }) => (
  <Wrapper>
    <h1>{title}</h1>
    <If condition={Boolean(description)} render={() => <h2>{description}</h2>} />
  </Wrapper>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default PageTitle
