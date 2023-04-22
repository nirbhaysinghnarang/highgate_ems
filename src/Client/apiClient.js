import axios from "axios";
 
const API_URL = "https://4gezcfqhdh.execute-api.us-east-2.amazonaws.com/testing"

export async function loginLambda(email, password){
    const endpoint = API_URL+"/auth"
    return await axios.post(endpoint, JSON.stringify({
        "email":email,
        "password":password,
    }))
}