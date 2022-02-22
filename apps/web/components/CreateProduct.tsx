import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { Product, ProductCreateInput } from '../@types/graphql-generated'
import useCreateProduct from '../hooks/useCreateProduct'
import useForm from '../hooks/useForm'
import DisplayError from './DisplayError'
import Form from './styled/Form'

interface IFormState {
  name: string
  price: number
  image: string
  description: string
}

function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm<IFormState>({
    image: '',
    name: '',
    price: 0,
    description: '',
  })
  const productMutation = useCreateProduct<ProductCreateInput>(inputs)
  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    productMutation.mutate()
    clearForm()
    console.log(productMutation)
    // router.push({
    //   pathname: `/products/${productMutation.data?.createProduct.id}`,
    // })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <DisplayError error={productMutation.error} />
      <fieldset
        aria-busy={productMutation.isLoading}
        disabled={productMutation.isLoading}
      >
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
