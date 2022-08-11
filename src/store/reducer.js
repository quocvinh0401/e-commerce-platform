import actions from "./actions";

const initState = {
  user: null,
  category: null,
  filterConditions: {
    mainCategory: "",
    subCategory: "",
    types: [],
    location: [],
    rangePrice: {
      minPrice: undefined,
      maxPrice: undefined,
    },
    rating: 0,
  },
  carts: [],
  checkedCarts: [],
};

const reducer = (state, action) => {
  let newCarts = [...state.carts];
  let newCheckedCarts = [...state.checkedCarts];
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actions.SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    case actions.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case actions.SET_FILTER_MAIN_CATEGORY:
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          mainCategory: action.mainCategory,
          subCategory: "",
        },
      };

    case actions.SET_FILTER_SUB_CATEGORY:
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          subCategory: action.subCategory,
          mainCategory: "",
          type: [],
        },
      };

    case actions.SET_FILTER_TYPE:
      let newTypes = [...state.filterConditions.types];
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          types: newTypes.includes(action.types)
            ? newTypes.filter((type) => type !== action.types)
            : [...state.filterConditions.types, action.types],
        },
      };

    case actions.SET_FILTER_LOCATION:
      let newLocations = [...state.filterConditions.location];
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          location: newLocations.includes(action.location)
            ? newLocations.filter((location) => location !== action.location)
            : [...state.filterConditions.location, action.location],
        },
      };

    case actions.SET_FILTER_RANGE_PRICE:
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          rangePrice: {
            minPrice: action.rangePrice.minPrice,
            maxPrice: action.rangePrice.maxPrice,
          },
        },
      };

    case actions.SET_FILTER_RATING:
      return {
        ...state,
        filterConditions: {
          ...state.filterConditions,
          rating: action.rating,
        },
      };

    case actions.ADD_CART:
      let isHaveNewCart = true;
      for (let i = 0; i < newCarts.length; i++) {
        if (newCarts[i].product.id === action.carts.product.id) {
          isHaveNewCart = false;
          newCarts[i].amount += action.carts.amount;
          break;
        }
      }
      return {
        ...state,
        carts: isHaveNewCart ? [action.carts, ...state.carts] : newCarts,
      };

    case actions.DELETE_CART:
      newCarts.splice(actions.carts, 1);
      return {
        ...state,
        carts: newCarts,
      };

    case actions.INCREASE:
      newCarts[action.indexCart].amount += 1;
      return {
        ...state,
        carts: newCarts,
      };

    case actions.DECREASE:
      state.carts[action.indexCart].amount -= 1;
      return {
        ...state,
        carts: [...state.carts],
      };

    case actions.SET_CHECKED_CARTS:
      let isHaveNewCheckedCart = false;
      for (let i = 0; i < newCheckedCarts.length; i++) {
        if (newCheckedCarts[i].product.id === action.checkedCart.product.id) {
          newCheckedCarts.splice(i, 1);
          isHaveNewCheckedCart = true;
          break;
        }
      }
      return {
        ...state,
        checkedCarts: isHaveNewCheckedCart
          ? newCheckedCarts
          : [...newCheckedCarts, action.checkedCart],
      };

    case actions.DELETE_CHECKED_CART:
      for (let i = 0; i < newCheckedCarts.length; i++) {
        if (newCheckedCarts[i].product.id === action.checkedCart.product.id) {
          newCheckedCarts.splice(i, 1);
          break;
        }
      }
      return {
        ...state,
        checkedCarts: newCheckedCarts,
      };

    case actions.CHOOSE_ALL_CART:
      return {
        ...state,
        checkedCarts:
          newCarts.length === newCheckedCarts.length ? [] : newCarts,
      };

    case actions.DELETE_ALL_CART:
      return {
        ...state,
        carts: [],
      };

    case actions.DELETE_ALL_CHECKED_CART:
      return {
        ...state,
        checkedCarts: [],
      };

    default:
      return state;
  }
};

export { initState };
export default reducer;
