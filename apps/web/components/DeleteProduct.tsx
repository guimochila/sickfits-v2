import useDeleteProduct from '../hooks/useDeleteProduct'

interface IDeleteProductProps {
  id: string
  children: React.ReactNode
}

function DeleteProduct({ id, children }: IDeleteProductProps) {
  const deleteProduct = useDeleteProduct(id)

  return (
    <button
      type="button"
      disabled={deleteProduct.isLoading}
      onClick={() => {
        if (confirm('Are you sure you want delete this item')) {
          deleteProduct.mutate()
        }
      }}
    >
      {children}
    </button>
  )
}

export default DeleteProduct
