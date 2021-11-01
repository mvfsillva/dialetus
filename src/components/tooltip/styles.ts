import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 4px;
  box-shadow: 2px 3px 3px ${({ theme: { colors } }) => colors.lightGray};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1rem;
`

export const Title = styled.h4`
  color: ${({ theme: { colors } }) => colors.black};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.bold};
`

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.gray};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
`
