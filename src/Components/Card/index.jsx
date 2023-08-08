import React from 'react'
import { useContext } from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (product) => {
    context.closeCheckoutSideMenu()
    context.openProductDetail()
    context.setProductToShow(product)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.setOpenNotification(true)
    setTimeout(() => {
      context.setOpenNotification(false)
    }, 2000)
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1  bg-green-500">
          <CheckIcon className="h-6 w-6 text-black" />
        </button>
      )
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      )
    }
  }

  return (
    <div
      onClick={() => showProduct(data)}
      className="bg-white curso-pointer w-56 h-60 cursor-pointer"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.description}
        />
        {renderIcon(data.id)}
      </figure>

      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

export default Card
