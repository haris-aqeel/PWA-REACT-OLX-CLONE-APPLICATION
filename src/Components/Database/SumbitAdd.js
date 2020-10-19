
import firebase from 'firebase'


export const writeUserData = (title, price, description, category, image, name, number) => {
    firebase.database().ref('users/' + number).set({
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
      name: name,
      number: number,
    });
  }

