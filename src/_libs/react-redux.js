import { createContext, useContext, useState } from "react";

const ProviderContext = createContext(null)

export function Provider({ store, children }) {
    const [state, setState] = useState(store.getState())
 
    return <ProviderContext.Provider value={[store, state, setState]}>
        {children}
    </ProviderContext.Provider>
}

export function useSelector(fn){
    const [store, state] = useContext(ProviderContext)

    return fn(state)
}

export function useDispatch(){
    const [store, state, setState] = useContext(ProviderContext)

    return (action) => {
        store.dispatch(action)
        setState(store.getState())
    }
}