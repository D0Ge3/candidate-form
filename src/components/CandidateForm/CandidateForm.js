import { useState } from 'react'
import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'
import { Radio } from '../../common/Radio/Radio'
import { Agreement } from '../../common/Agreement/Agreement'
import { Upload } from '../../common/Upload/Upload'

import s from './CandidateForm.module.scss'

export const CandidateForm = () => {
  const [file, setFile] = useState(null)
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Анкета соискателя</h2>
      <form action="">
        <h3 className={s.subtitle}>Личные данные</h3>
        <div className={s.personalData}>
          <Input
            className={s.field}
            label="Имя *"
            placeholder="Имя"
            name="firstName"
          />
          <Input
            className={s.field}
            label="Фамилия *"
            placeholder="Фамилия"
            name="lastName"
          />
          <Input
            className={s.field}
            label="Электронная почта *"
            placeholder="Электронная почта"
            type="email"
            name="email"
          />
          <Upload
            value={file}
            onChange={(e) => setFile(e.target.files[0])}
            resetUpload={() => setFile(null)}
            name="resumeUpload"
            text="Загрузить резюме"
            className={s.upload}
          />
        </div>
        <Radio
          className={s.sex}
          name="sex"
          label="Пол *"
          options={[
            { value: 'male', text: 'Мужской' },
            { value: 'female', text: 'Женский' },
          ]}
        />
        <h3 className={s.subtitle}>Github</h3>
        <Input
          className={s.field}
          label="Вставьте ссылку на Github"
          placeholder="Вставьте ссылку на Github"
          name="githubLink"
        />
        <Agreement className={s.agreement} name="agreement">
          <span>
            * Я согласен с{' '}
            <a onClick={() => console.log('show agreement')}>
              политикой конфиденциальности
            </a>
          </span>
        </Agreement>
        <Button className={s.submit} text="Отправить" />
      </form>
    </div>
  )
}
