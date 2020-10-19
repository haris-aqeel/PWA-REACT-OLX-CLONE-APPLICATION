

export const initialState = {
    basket :[],
    userdata: {user: false, username: null, userphoto: null, email: null}
}



const reducer = (state, action) => {

    switch(action.type){
        case 'Add_To_Basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'Remove_From_Basket':
            let remArray = state.basket.filter(({id})=> id !== action.item.id)
            
            return {
                ...state,
                basket: remArray
            };
            
        case "Set_User":
            return{
                ...state,
                user: action.user
            };

        case "Set_User_Data":
            return{
                ...state,
                userdata: {user: action.user, username: action.username, userphoto: action.photourl, email: action.email}
            }

        default: 
            return state;
    }
}

export default reducer;