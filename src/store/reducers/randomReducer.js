import {GET_RANDOM_USER} from '../types'
import {GET_INFO} from '../types'

const initialState = {
    user:[],
    loading:true,
    
}

export default function(state = initialState, action){

    switch(action.type){
        case GET_RANDOM_USER:
        return {
            ...state,
            user:action.payload,
            loading:false,
        }
        case GET_INFO:
            return {
                ...state,
                user:action.payload,
                loading:false,
                isclicked:true
    
        }
        default: return state
    }

}