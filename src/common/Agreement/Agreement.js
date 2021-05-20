import * as cs from 'classnames'

import s from './Agreement.module.scss'

export const Agreement = ({ className, name, children }) => {
  return (
    <div className={cs(s.wrap, { [className]: className })}>
      <input className={s.checkbox} type="checkbox" name={name} id={name} />
      <label className={s.label} htmlFor={name}>
        {children}
      </label>
    </div>
  )
}
