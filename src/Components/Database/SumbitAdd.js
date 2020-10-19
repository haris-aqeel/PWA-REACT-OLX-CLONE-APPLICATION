
import firebase from 'firebase'


export const writeUserData = (title, price, description, category, image, name, number) => {
    var keys = firebase.database().ref('users').push().key;

    var details = {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      name: name,
      number: number,
    }

    firebase.database().ref('users').child(keys).set(details);
  }

