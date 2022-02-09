import { ADD_TO_CART, ADD_TO_EMAIL, HANDLE_LOGIN_VISIBILITY, REMOVE_FROM_CART, RESET_CART } from "./actions-type";
import { HANDLE_DRAWER_VISIBILITY } from "./actions-type";
const initialState = {
  cartList: [],
  isDrawerVisbible: false,
  isLoginVisible:false,
  name:[],
}

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartList: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartList: action.payload,
      };
    case RESET_CART:
      return {
        ...state,
        cartList: [],
      };
      case ADD_TO_EMAIL:
        return {
          ...state,
          name: action.payload,
        };
    case HANDLE_DRAWER_VISIBILITY:
      return {
        ...state,
        isDrawerVisible: action.payload,
      };
      case HANDLE_LOGIN_VISIBILITY:
        return {
          ...state,
          isLoginVisbible: action.payload,
        };

    default:
      return state;
  }
};

export default MainReducer;
