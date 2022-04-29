import { FormEvent } from 'react'
import useForm from '../hooks/useForm'
import useProduct from '../hooks/useProduct'
import useUpdateProduct from '../hooks/useUpdateProduct'
import DisplayError from './DisplayError'
import Form from './styled/Form'

interface IUpdateProductProps {
  id: string
}

interface IFormState {
  name: string
  price: number
  description: string
}

function UpdateProduct({ id }: IUpdateProductProps) {
  const product = useProduct(id)
  const { inputs, handleChange, clearForm } = useForm<IFormState>({
    name: product.data?.name,
    price: product.data?.price,
    description: product.data?.description,
  })
  const updateMutation = useUpdateProduct(id, inputs as IFormState)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    updateMutation.mutate()
    clearForm()
  }

  if (product.isLoading) {
    return <p>Loading...</p>
  }

  console.log(product.data)

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={product.error || updateMutation.error} />
      <fieldset
        aria-busy={updateMutation.isLoading}
        disabled={updateMutation.isLoading}
      >
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

        <button type="submit">Update Product</button>
      </fieldset>
    </Form>
  )
}

export default UpdateProduct
