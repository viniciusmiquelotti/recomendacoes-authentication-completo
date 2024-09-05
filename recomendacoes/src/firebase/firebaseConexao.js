import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArZdcJlm9GGzYuw1pSqOoEoXgjOxA71ss",
  authDomain: "recomendacoes-fb-88478.firebaseapp.com",
  projectId: "recomendacoes-fb-88478",
  storageBucket: "recomendacoes-fb-88478.appspot.com",
  messagingSenderId: "46439184352",
  appId: "1:46439184352:web:f0eac8495dba4bb558dd85"
};


const conexao = initializeApp(firebaseConfig)

const autenticacao = getAuth(conexao)
const bd = getFirestore(conexao)
const repositorio = getStorage(conexao)

export {autenticacao, bd, repositorio}






