import {auth, provider} from '../../Pages/Login'
export const Fb_auth_login = (dispatch) => {

    auth().signInWithPopup(provider)
      .then(({ user }) => {
          console.log(user)
        dispatch({
          type: "Set_User_Data",
          username: user.displayName,
          photourl: user.photoURL,
          user: true
        })
      })

}

export const Fb_auth_logout = (dispatch) => {

    auth().signOut().then(function() {
        dispatch({
            type: "Set_User_Data",
            username: null,
            photourl: null,
            user: false
          })
      }).catch(function(error) {
        console.log(error)
      });

}






