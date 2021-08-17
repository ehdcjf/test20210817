const initialState = { 
  isLogin:false,
  user:{
    isLogin:false,
  },
  post:{

  },
  comment:{

  },
  category:{

  }
}

const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

export const USER_LOGIN_ACTION = (data) => { 
  return{ 
    type:USER_LOGIN,
    data, 
  }
}

export const USER_LOGOUT_ACTION = ( ) => { 
  return{ 
    type:USER_LOGOUT,
  }
}

const reducer = (state=initialState,action) =>{ 
  switch(action.type){ 
    case USER_LOGIN: 
      return {
        ...state,
        user:{
          ...state.user,
          isLogin:true,
        }
      }
    case USER_LOGOUT: 
      return state 
    default:
      return state; 
  
  }

}

export default reducer