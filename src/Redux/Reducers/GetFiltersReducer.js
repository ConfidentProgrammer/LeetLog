const GetFiltersReducer = (pushedState=[], action) => {
    switch(action.type) {
        case "GetTag": 
        return [...pushedState, action.payload];

        case "deleteTag":
        return pushedState.filter(element => element !== action.payload)
        default:
            return pushedState;
    }
  }
  
  export default GetFiltersReducer;