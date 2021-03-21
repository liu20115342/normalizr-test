import { createStore, applyMiddleware} from 'redux'
import todoApp from './reducers'
const configureStore = () => {

    return createStore(
        todoApp,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore;