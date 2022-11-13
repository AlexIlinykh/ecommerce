import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX4zoapBPJp-DFhmw0FsiKrQbLaIfxw_g",
    authDomain: "shopdb-b0587.firebaseapp.com",
    projectId: "shopdb-b0587",
    storageBucket: "shopdb-b0587.appspot.com",
    messagingSenderId: "783670547948",
    appId: "1:783670547948:web:f4ee02b55f1e36482d1cc9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
}
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot)
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      });
    }    catch(error){
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
}