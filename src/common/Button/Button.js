import { memo } from 'react'
import * as cs from 'classnames'

import s from './Button.module.scss'

export let Button = ({ className, disabled, text, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={cs(s.button, {
        [className]: className,
      })}
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  )
}
Button = memo(Button)
