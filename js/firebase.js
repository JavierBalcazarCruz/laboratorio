
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import {  getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.mn ,com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAeEMOrFGJPKW-RGIu5j-lEZzPsOtby9wc",
    authDomain: "lab-asofarma.firebaseapp.com",
    projectId: "lab-asofarma",
    storageBucket: "lab-asofarma.appspot.com",
    messagingSenderId: "17116995507",
    appId: "1:17116995507:web:d25f7b4897eca643f5f5c6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
export const saveInfo =(apellidoP,apellidoM,nombre,esp,cedula,email,tel,chkmail,chksms,chkwh,chklinea,chkprod,chkievent,chkep,chkevirtual,chkehib,chkmedica,chkrmedicas,chkprivacidad)=>{

 addDoc(collection(db,'doc'),{apellidoP,apellidoM,nombre,esp,cedula,email,tel,chkmail,chksms,chkwh,chklinea,chkprod,chkievent,chkep,chkevirtual,chkehib,chkmedica,chkrmedicas,chkprivacidad})
}