import * as cs from 'classnames'

import s from './Button.module.scss'

export const Button = ({ className, disabled, text, onClick, ...rest }) => {
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
