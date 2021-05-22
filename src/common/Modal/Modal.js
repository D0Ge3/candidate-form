import { memo } from 'react'
import * as cs from 'classnames'

import { Button } from '../../common/Button/Button'
import { Scrollbar } from '../../common/Scrollbar/Scrollbar'
import { CloseIcon } from '../../common/icons/CloseIcon'

import s from './Modal.module.scss'

export let Modal = ({
  isOpen,
  title,
  text,
  confirmBtnText,
  openModalClassname,
  className,
  children,
  onConfirm,
  onClose,
}) => {
  return (
    <>
      <div
        className={cs(s.backdrop, { [s.backdrop_open]: isOpen })}
        onClick={onClose}
      ></div>
      <div
        className={cs(s.modal, {
          [openModalClassname]: isOpen,
          [className]: className,
        })}
      >
        <div className={s.close} onClick={onClose}>
          <CloseIcon />
        </div>
        <h3 className={cs(s.title, { [s.title_centered]: !children })}>
          {title}
        </h3>
        {children ? (
          <div className={s.scrollbarWrap}>
            <Scrollbar style={{ height: '50vh' }}>{children}</Scrollbar>
          </div>
        ) : (
          <p className={s.text}>{text}</p>
        )}
        <Button
          className={s.submit}
          text={confirmBtnText}
          onClick={onConfirm}
        />
      </div>
    </>
  )
}
Modal = memo(Modal)
