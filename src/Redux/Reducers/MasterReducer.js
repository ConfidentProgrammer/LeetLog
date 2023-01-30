import { combineReducers } from "redux";
import deleteStatus from "./deleteCardReducer";
import isPushed from "./pushedReducers";
import getQuestions from "./GetQuestionsReducer";
import GetFiltersReducer from "./GetFiltersReducer";
import DeleteFilter from "./DeleteFilter";
const MasterReducer = combineReducers({
    isPushed, deleteStatus,getQuestions,GetFiltersReducer
})
export default MasterReducer;