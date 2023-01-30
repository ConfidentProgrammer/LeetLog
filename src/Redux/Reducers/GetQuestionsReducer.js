const getQuestions = (pushedState='', action) => {
  switch(action.type) {
      case "GetData": 
      return action.payload;
      default:
          return pushedState;
  }
}

export default getQuestions;