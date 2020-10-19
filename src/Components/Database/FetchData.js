import firebase from 'firebase'

export const FetchData = () => {

    firebase.database().ref('users').on('child_added', function (data) {
        return data.val();
        
        // switch (category) {
        //     case 'mobile':
        //         break
        //     case 'cars':
        //         break
        //     case 'motorcycles':
        //         break
        //     case 'tablets':
        //         break
        //     case 'houses':
        //         break
        //     case 'tv':
        //         break
        //     case 'land':
        //         break
        //     default:
        //         break
        // }

        })

}
