import Appcontainer from './Appcontainer'
import React from 'react'
import ProductSlide from './Reductool/ProductSlide'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: {
    count_store: ProductSlide,
  }
})


export default function App() {
  return (
    <Provider store={store}>
      <Appcontainer />
    </Provider>
  )
}
