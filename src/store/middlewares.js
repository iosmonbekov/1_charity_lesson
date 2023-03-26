export const logger = ({store}) => {
    return (next) => {
        return (action) => {
            console.log(action.type)
            next(action)
            console.log(store.getState())
        }
    }
}
