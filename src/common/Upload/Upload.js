import { memo } from 'react'
import * as cs from 'classnames'

import { PlusIcon } from '../icons/PlusIcon'
import { ClipIcon } from '../icons/ClipIcon'
import { CloseIcon } from '../icons/CloseIcon'

import s from './Upload.module.scss'

export let Upload = ({
  className,
  text,
  name,
  value,
  onChange,
  hasError,
  resetUpload,
}) => {
  return (
    <div className={cs(s.wrap, { [className]: className })}>
      {value ? (
        <div className={cs(s.file, { [s.file_error]: hasError })}>
          <ClipIcon hasError={hasError} />
          <span>{value.name}</span>
          <CloseIcon
            hasError={hasError}
            className={s.close}
            onClick={resetUpload}
          />
        </div>
      ) : (
        <>
          <label className={s.upload} htmlFor={name}>
            <PlusIcon className={s.plus} />
            {text}
          </label>
          <input type="file" onChange={onChange} name={name} id={name} />
        </>
      )}
    </div>
  )
}
Upload = memo(Upload)
