import * as cs from 'classnames'
import { memo } from 'react'

import s from './Radio.module.scss'

export let Radio = ({
  className,
  label,
  caption,
  options,
  onChange,
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
              onChange={onChange}
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
Radio = memo(Radio)
