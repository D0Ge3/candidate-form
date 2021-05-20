import * as cs from 'classnames'

import s from './Radio.module.scss'

export const Radio = ({
  className,
  label,
  caption,
  options,
  hasError,
  name,
}) => {
  return (
    <div className={className}>
      <div className={s.titleWrap}>
        {label && <h3 className={s.title}>{label}</h3>}
        {caption && (
          <span className={cs(s.caption, { [s.caption_error]: hasError })}>
            {caption}
          </span>
        )}
      </div>
      <div className={s.radioBtsWrap}>
        {options.map((option) => (
          <div className={s.radioWrap} key={option.value}>
            <input
              className={s.radio}
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
            />
            <label className={s.label} htmlFor={option.value}>
              {option.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
