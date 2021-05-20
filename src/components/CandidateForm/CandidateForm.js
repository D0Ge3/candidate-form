import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'

import s from './CandidateForm.module.scss'
import { Radio } from '../../common/Radio/Radio'

export const CandidateForm = () => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Анкета соискателя</h2>
      <form action="">
        <h3 className={s.subtitle}>Личные данные</h3>
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
        <div style={{ background: '#D9D9D9', height: '42px' }}></div>
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
        <span>
          <input type="checkbox" />* Я согласен с политикой конфиденциальности
        </span>
        <Button text="Отправить" />
      </form>
    </div>
  )
}
