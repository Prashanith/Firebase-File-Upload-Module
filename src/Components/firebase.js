import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref,uploadBytes} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDl-ONah9pH1PiwqIwFm_flDzvbJn7oTeQ",
  authDomain: "fir-react-e4249.firebaseapp.com",
  projectId: "fir-react-e4249",
  storageBucket: "fir-react-e4249.appspot.com",
  messagingSenderId: "199599898598",
  appId: "1:199599898598:web:7bb33b45211d2a90aaa027",
  measurementId: "G-VPNJ3K3VJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
function uploadFile(file,name){
    let error=null;
    const imagesRef = ref(storage, 'images/'+name);

    uploadBytes(imagesRef, file)
    .then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
    })
    .catch((err)=>{
        error=err;
    })
    return {
        error:error,

    }
}






export default uploadFile;
    