import {
  MUTATION_ADD_CART_ITEM,
  MUTATION_REMOVE_CART_ITEM,
  MUTATION_SYNC_CART,
  MUTATION_UPDATE_CART_ITEM
} from 'mutations'

import ShoppingCart from '../services/ShoppingCart'

export function syncCartItems(store) {
  ShoppingCart.fetch()
    .then(resp=>{
      store.dispatch(MUTATION_SYNC_CART,resp.data);
    });
}

export function addCartItem(store,id,amount) {
  ShoppingCart.addById(id,amount)
    .then(resp=>{
      store.dispatch(MUTATION_ADD_CART_ITEM,resp.data);
    });
}

export function updateCartItem(store, id, amount) {
  ShoppingCart.updateById(id,amount)
    .then(resp=>{
      store.dispatch(MUTATION_UPDATE_CART_ITEM,resp.data);
    })
}