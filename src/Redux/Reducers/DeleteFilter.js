const DeleteFilter = (pushedState='', action) => {
    switch(action.type) {
        case "Delete": 
        pushedState.push(action.payload)
        return pushedState;
        default:
            return pushedState;
    }
  }
  
  export default DeleteFilter;