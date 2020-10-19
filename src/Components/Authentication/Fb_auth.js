import {auth, provider} from '../../Pages/Login'
export const Fb_auth_login = (dispatch) => {

    auth().signInWithPopup(provider)
      .then(({ user }) => {
        
        dispatch({
          type: "Set_User_Data",
          username: user.displayName,
          photourl: user.photoURL,
          user: true,
          email: user.email
        })
      })

}

export const Fb_auth_logout = (dispatch) => {

    auth().signOut().then(function() {
        dispatch({
            type: "Set_User_Data",
            username: null,
            photourl: null,
            user: false, 
            email: null
          })
      }).catch(function(error) {
        console.log(error)
      });

}






