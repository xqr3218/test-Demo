export default function counter(count = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return count + 1
      case 'INCREMENT_IF_ODD':
        return (count % 2 !== 0) ? count + 1 : count
      case 'DECREMENT':
        return count - 1
      default:
        return count
    }
  }



  