import firebase from 'firebase/compat';
import 'firebase/auth';
import 'firebase/firestore';


const config ={
    apiKey: "AIzaSyDiBprDF6PR1BHYhTv9CWZAL_umHZqmDzg",
    authDomain: "react-ecommerce-e1cab.firebaseapp.com",
    projectId: "react-ecommerce-e1cab",
    storageBucket: "react-ecommerce-e1cab.appspot.com",
    messagingSenderId: "344673334659",
    appId: "1:344673334659:web:961f05e8c9f578e8adf2b6",
    measurementId: "G-MM90WT72K6"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//function is coming user has firebase docment
export const createUserProfileDocument = async (userAuth,additionalData) =>{
    // if no user signin then simply return
    if(!userAuth) return;
    // get user sign docment from firebase db
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // get snapshot from ref that show either that sign in user exists in our db
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        console.log(userAuth)
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log('error creating in user:',err.message)
        }
    }
    return userRef;

}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;