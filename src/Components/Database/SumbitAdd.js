
import firebase from 'firebase'


export const writeUserData = (title, price, description, category, image, name, number, email, location) => {
    // var keys = firebase.database().ref('users').push().key;

    var details = {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      name: name,
      number: number,
      email: email,
      location: location
    }

    firebase.database().ref('users').child(email).set(details);
  }

