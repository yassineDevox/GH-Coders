import axios from "axios";
//la partie provider qui se repete pour chaque requete http 
export default axios.create({
    baseURL:'https://e-commerce-c4214-default-rtdb.firebaseio.com/'
})