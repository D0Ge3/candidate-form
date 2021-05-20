import { Input } from '../../common/Input/Input'
import { Button } from '../../common/Button/Button'

export const CandidateForm = () => {
  return (
    <div>
      <h2>Анкета соискателя</h2>
      <form action="">
        <Input
          placeholder="Имя"
          label="Имя*"
          caption="Input caption message."
          hasError
        />
        <Input
          placeholder="Имя"
          label="Имя*"
          caption="Input caption message."
        />
        <Input placeholder="Имя" label="Имя*" />
        <Input placeholder="Имя" label="Имя*" disabled />
        <Button text="Отправить" />
        <div style={{ marginTop: '20px' }}>
          <Button text="Отправить" disabled />
        </div>
      </form>
    </div>
  )
}
