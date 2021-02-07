// Packages
import React from 'react'

// Styles
import * as S from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  icon?: React.ReactElement
}

const Input = React.forwardRef(
  (props: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    const { disabled, icon, ...restProps } = props
    return (
      <S.Container>
        {Boolean(icon) && <S.Icon>{icon}</S.Icon>}
        <S.Field {...restProps} disabled={disabled} ref={ref} />
      </S.Container>
    )
  }
)

Input.displayName = 'Input'

export default Input
