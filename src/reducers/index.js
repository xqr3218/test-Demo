export default function counter(count = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return Object.assign({},state, {count:++state.count || 1})
      case 'DECREMENT':
        return count - 1
      default:
        return count
    }
  }



  