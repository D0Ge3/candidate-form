import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as cs from 'classnames'

import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { Radio } from '../../common/Radio/Radio'
import { Agreement } from '../Agreement/Agreement'
import { Upload } from '../../common/Upload/Upload'
import { Modal } from '../../common/Modal/Modal'
import { Privacy } from '../../common/Privacy/Privacy'

import s from './CandidateForm.module.scss'

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/[А-Я]{1}[а-я]{1,}/, {
      message: 'неправильный формат имени',
    })
    .required('укажите имя'),
  lastName: Yup.string()
    .matches(/[А-Я]{1}[а-я]{1,}/, {
      message: 'неправильный формат фамилии',
    })
    .required('укажите фамилию'),
  email: Yup.string()
    .email('неправильный формат email')
    .required('укажите email'),
  githubLink: Yup.string().url('неправильный формат ссылки'),
  sex: Yup.string().required('укажите пол'),
})

export const CandidateForm = () => {
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      sex: '',
      resumeFile: null,
      githubLink: '',
      agreement: false,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values)
      setShowSuccess(true)
    },
  })

  const closeSuccessModal = () => {
    setShowSuccess(false)
    formik.resetForm()
  }
  const getError = (field) =>
    errors[field] && touched[field] ? errors[field] : null

  const submitIsDisable = !(
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.email &&
    formik.values.sex &&
    formik.values.agreement
  )

  const { touched, errors } = formik
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Анкета соискателя</h2>
      <form action="">
        <h3 className={s.subtitle}>Личные данные</h3>
        <div className={s.personalData}>
          <Input
            className={s.field}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            label="Имя *"
            placeholder="Имя"
            name="firstName"
            onBlur={formik.handleBlur}
            hasError={getError('firstName')}
            caption={getError('firstName')}
          />
          <Input
            className={s.field}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            label="Фамилия *"
            placeholder="Фамилия"
            name="lastName"
            hasError={getError('lastName')}
            caption={getError('lastName')}
          />
          <Input
            className={s.field}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Электронная почта *"
            placeholder="Электронная почта"
            type="email"
            name="email"
            hasError={getError('email')}
            caption={getError('email')}
          />
          <Upload
            value={formik.values.resumeFile}
            onChange={(e) =>
              formik.setFieldValue('resumeFile', e.target.files[0])
            }
            resetUpload={() => formik.setFieldValue('resumeFile', null)}
            name="resumeUpload"
            text="Загрузить резюме"
            className={s.upload}
          />
        </div>
        <Radio
          className={s.sex}
          name="sex"
          label="Пол *"
          value={formik.values.sex}
          onChange={formik.handleChange}
          options={[
            { value: 'male', text: 'Мужской' },
            { value: 'female', text: 'Женский' },
          ]}
          hasError={getError('sex')}
          caption={getError('sex')}
        />
        <h3 className={s.subtitle}>Github</h3>
        <Input
          type="url"
          value={formik.values.githubLink}
          onChange={formik.handleChange}
          className={s.field}
          onBlur={formik.handleBlur}
          label="Вставьте ссылку на Github"
          placeholder="Вставьте ссылку на Github"
          name="githubLink"
          hasError={getError('githubLink')}
          caption={getError('githubLink')}
        />
        <Agreement
          value={formik.values.agreement}
          onChange={formik.handleChange}
          className={s.agreement}
          name="agreement"
          onClickLink={() => setShowPrivacy(true)}
        />
        <Button
          onClick={formik.handleSubmit}
          className={s.submit}
          text="Отправить"
          disabled={submitIsDisable}
        />
      </form>
      <Modal
        isOpen={showSuccess}
        title={`Спасибо ${formik.values.firstName}!`}
        text="Мы скоро свяжимся с вами"
        confirmBtnText="Понятно"
        className={cs(s.modal, s.modal_confirm)}
        openModalClassname={s.modal_open_confirm}
        onConfirm={closeSuccessModal}
        onClose={closeSuccessModal}
      />
      <Modal
        isOpen={showPrivacy}
        title="Политика конфиденциальности"
        confirmBtnText="Я согласен"
        className={cs(s.modal, s.modal_privacy)}
        openModalClassname={s.modal_open_privacy}
        onConfirm={() => {
          setShowPrivacy(false)
          formik.setFieldValue('agreement', true)
        }}
        onClose={() => {
          setShowPrivacy(false)
        }}
      >
        <Privacy className={s.privacy} />
      </Modal>
    </div>
  )
}
