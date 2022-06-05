import { useQueryClient } from 'react-query'
import { User } from '../@types/graphql-generated'
import useRemoveFromCart from '../hooks/useRemoveFromCart'
import BigButton from './styled/BigButton'

interface IRemoveFromCartProps {
  id: string
}

function RemoveFromCart({ id }: IRemoveFromCartProps) {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useRemoveFromCart(id, {
    onMutate: async (cartItemId: string) => {
      await queryClient.cancelQueries('user')

      const previousUser = queryClient.getQueriesData<User>('user')

      const [queryName, oldUser] = previousUser[0]
      const newCartData = oldUser.cart.filter((item) => item.id !== cartItemId)

      queryClient.setQueryData(queryName, { ...oldUser, cart: newCartData })

      return { previousUser }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData<User>('user', context.previousUser)
    },
    onSettled: () => {
      queryClient.invalidateQueries('user')
    },
  })

  return (
    <BigButton
      type="button"
      title="Remove this item from cart"
      disabled={isLoading}
      onClick={() => mutate(id)}
    >
      &times;
    </BigButton>
  )
}

export default RemoveFromCart
