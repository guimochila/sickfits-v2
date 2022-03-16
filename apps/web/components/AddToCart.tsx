import { useQueryClient } from 'react-query'
import useAddToCart from '../hooks/useAddToCart'

interface IAddToCartProps {
  id: string
}

function AddToCart({ id }: IAddToCartProps) {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useAddToCart(id, {
    onSuccess: () => {
      queryClient.refetchQueries(['user'])
    },
  })

  return (
    <button disabled={isLoading} type="button" onClick={() => mutate()}>
      Add{isLoading && 'ing'} To Cart 🛒
    </button>
  )
}

export default AddToCart
