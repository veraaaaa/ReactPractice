import { LOADDATA, SETSHOW } from './action-types'

const defaultState = {
  list: [],
  isShow:true

}

export default (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        ...state,
        list: action.data
      }
      case SETSHOW:
        return{
          ...state,
          isShow:action.data
        }
    
    default:
      return state
  }
}