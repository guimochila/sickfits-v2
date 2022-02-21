import useForm from '../hooks/useForm'

interface IFormState {
  name: string
  price: number
}

function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm<IFormState>({
    name: '',
    price: 0,
  })

  return (
    <form>
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

      <button type="button" onClick={clearForm}>
        Clear Form
      </button>
      <button type="button" onClick={resetForm}>
        Reset Form
      </button>
    </form>
  )
}

export default CreateProduct
