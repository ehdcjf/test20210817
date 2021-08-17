import { createWrapper } from "next-redux-wrapper"
import { createStore} from 'redux'

const configureStore = () => { 
  const store = createStore(reducer)
  

}

const wrapper = createWrapper(configureStore,{})

export default wrapper