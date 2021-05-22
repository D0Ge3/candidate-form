import * as cs from 'classnames'

import s from './Check.module.scss'

export const Check = ({ className, name, children, value, onChange }) => {
  return (
    <div className={cs(s.wrap, { [className]: className })}>
      <input
        className={s.checkbox}
        type="checkbox"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      <label className={s.label} htmlFor={name}>
        {children}
      </label>
    </div>
  )
}
