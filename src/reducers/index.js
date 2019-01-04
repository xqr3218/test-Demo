const initialState = {count :1}
export default function counter(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return Object.assign({},state, {count:++state.count || 1})
      case 'DECREMENT':
        return Object.assign({},state, {count:--state.count || -1})
      default:
        return state
    }
  }



  