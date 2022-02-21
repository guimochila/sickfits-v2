import { FormEvent } from 'react'
import useForm from '../hooks/useForm'
import Form from './styled/Form'

interface IFormState {
  name: string
  price: number
  image: string
  description: string
}

function CreateProduct() {
  const { inputs, handleChange } = useForm<IFormState>({
    image: '',
    name: '',
    price: 0,
    description: '',
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  )
}

export default CreateProduct
