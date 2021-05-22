import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { Radio } from '../../common/Radio/Radio'
import { Check } from '../../common/Check/Check'
import { Upload } from '../../common/Upload/Upload'

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
    },
  })
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
            hasError={
              errors.firstName && touched.firstName ? errors.firstName : null
            }
            caption={
              errors.firstName && touched.firstName ? errors.firstName : null
            }
          />
          <Input
            className={s.field}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            label="Фамилия *"
            placeholder="Фамилия"
            name="lastName"
            hasError={
              errors.lastName && touched.lastName ? errors.lastName : null
            }
            caption={
              errors.lastName && touched.lastName ? errors.lastName : null
            }
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
            hasError={errors.email && touched.email ? errors.email : null}
            caption={errors.email && touched.email ? errors.email : null}
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
          hasError={errors.sex && touched.sex ? errors.sex : null}
          caption={errors.sex && touched.sex ? errors.sex : null}
        />
        <h3 className={s.subtitle}>Github</h3>
        <Input
          type="url"
          value={formik.values.githubLink}
          onChange={formik.handleChange}
          className={s.field}
          label="Вставьте ссылку на Github"
          placeholder="Вставьте ссылку на Github"
          name="githubLink"
          hasError={
            errors.githubLink && touched.githubLink ? errors.githubLink : null
          }
          caption={
            errors.githubLink && touched.githubLink ? errors.githubLink : null
          }
        />
        <Check
          value={formik.values.agreement}
          onChange={formik.handleChange}
          className={s.agreement}
          name="agreement"
        >
          <span>
            * Я согласен с{' '}
            <a onClick={() => console.log('show agreement')}>
              политикой конфиденциальности
            </a>
          </span>
        </Check>
        <Button
          onClick={formik.handleSubmit}
          className={s.submit}
          text="Отправить"
          disabled={
            !(
              formik.values.firstName &&
              formik.values.lastName &&
              formik.values.email &&
              formik.values.sex &&
              formik.values.agreement
            )
          }
        />
      </form>
    </div>
  )
}
