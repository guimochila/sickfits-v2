import { ChangeEvent, useState } from 'react'

function useForm<T>(initialState: T | { [k: string]: any }) {
  const [inputs, setInputs] = useState(initialState)

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const inputKey = e.target.name || e.target.id
    let inputValue: any = e.target.value

    if (e.target.type === 'number') {
      inputValue = inputValue !== '' ? parseInt(inputValue) : ''
    }

    if (e.target.type === 'file') {
      const target = e.target as HTMLInputElement
      inputValue = target.files?.length ? target.files[0] : ''
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