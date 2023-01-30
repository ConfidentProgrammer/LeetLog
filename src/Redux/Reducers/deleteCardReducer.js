const deleteStatus = (pushedState, action) => {
  switch(action.type) {
      case "YES": 
      return pushedState = !pushedState;
      default:
          return false;
  }
}

export default deleteStatus