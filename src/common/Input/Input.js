import * as cs from 'classnames'

import s from './Input.module.scss'

export const Input = ({
  value,
  onChange,
  type = 'text',
  name,
  hasError,
  caption,
  label,
  className,
  disabled,
  onBlur,
  ...rest
}) => {
  return (
    <div
      className={cs(s.wrap, {
        [className]: className,
        [s.wrap_disabled_error]: disabled && hasError,
      })}
    >
      {label && (
        <label className={s.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        name={name}
        id={name}
        className={cs(s.input, {
          [s.input_error]: hasError,
        })}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={onBlur}
        {...rest}
      />
      {caption && (
        <span className={cs(s.caption, { [s.caption_error]: hasError })}>
          {caption}
        </span>
      )}
    </div>
  )
}
