import { memo } from 'react'
import * as cs from 'classnames'

import s from './Agreement.module.scss'

export let Agreement = ({ className, name, value, onChange, onClickLink }) => {
  return (
    <div className={cs(s.wrap, { [className]: className })}>
      <input
        className={s.checkbox}
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={onChange}
      />
      <span className={s.labelWrap}>
        <label className={s.label} htmlFor={name}>
          <span>* Я согласен с</span>
        </label>
        <a className={s.link} onClick={onClickLink}>
          политикой конфиденциальности
        </a>
      </span>
    </div>
  )
}

Agreement = memo(Agreement)
