import firebase from 'firebase'



firebase.database().ref('users').on('child_added', function (data) {
        return data.val();
    })
