import { ChangeEvent, useState } from 'react'

function useForm<T>(initialState: T | { [k: string]: any }) {
  const [inputs, setInputs] = useState(initialState)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const inputKey = e.target.name || e.target.id
    let inputValue: any = e.target.value

    if (e.target.type === 'number') {
      inputValue = inputValue !== '' ? parseInt(inputValue) : ''
    }

    setInputs({
      ...inputs,
      [inputKey]: inputValue,
    })
  }

  function resetForm() {
    setInputs(initialState)
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(initialState).map(([key, _]) => [key, '']),
    )

    setInputs(blankState)
  }

  return { inputs, handleChange, resetForm, clearForm }
}

export default useForm
