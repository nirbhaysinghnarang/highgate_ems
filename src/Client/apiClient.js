import axios from "axios";

const API_URL = "https://4gezcfqhdh.execute-api.us-east-2.amazonaws.com/testing"

export async function loginLambda(email) {
    const endpoint = API_URL + "/auth"
    return await axios.post(endpoint, JSON.stringify({
        "email": email,
    }))
}

export async function projectCSVUploadLambda(payload) {
    const endpoint = API_URL + "/projects/upload"
    const body = { "payload": payload }
    return await axios.post(endpoint, JSON.stringify(body));
}

export async function verifyCodeLambda(code, email) {
    const endpoint = API_URL + "/auth/verify"
    const body = { "email": email, "code": code }
    return await axios.post(endpoint, JSON.stringify(body));

}
