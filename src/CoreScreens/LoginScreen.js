import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import PinInput from 'react-pin-input';

import { TextField, Button, Stack, Card, Typography, Divider, Box, CircularProgress } from "@mui/material";
import { loginLambda, verifyCodeLambda } from "../Client/apiClient";
import Page from "../Components/Page";
const RootStyle = styled(Page)(({ theme }) => ({
    overflowY: "scroll",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}));

export default function LoginScreen() {
    const [username, setUsername] = useState("");
    const [sentCode, setSentCode] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(true);
    const [verifSuccess, setVerifSuccess] = useState(false);
    const [verifError, setVerifError] = useState(false);
    const [pin, setPin] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };


    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault();
        if (username !== "" && validateEmail(username)) {
            loginLambda(username).then(response => {
                console.log(response)
                if (response.data.statusCode === 200) {
                    setSuccess(true);
                }else{
                    setError(true);
                    setSuccess(false);
                }
            }).catch(err => {
                console.log(err);
                setError(true);
            }).finally(() => {
                setSentCode(true)
                setLoading(false)
            })
        } else {
            console.log("Invalid email.")
        }

    };

    useEffect(() => {
        
        if (sentCode) {
            console.log("Attempting verification")
            setLoading(true);
            verifyCodeLambda(pin, username).then(response => {
                console.log(response)
                if(response.data.statusCode==200){
                    setVerifSuccess(true)
                }else{
                    setVerifError(true)
                    if(response.data.statusCode==418){
                        setErrorMessage("Your code has expired.")
                    }else if(response.data.statusCode==423){
                        setErrorMessage("You entered an incorrect code.")
                    }
                    else{
                        setErrorMessage("An unknown error occured.")
                    }
                }
            }).catch((err)=>{
                setVerifError(true)
            }).finally(()=>{
                setLoading(false)
            })
        }
    }, [pin])

    return (

        <RootStyle title="Login | Highgate" isLogin={true}>
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", alignItems: "center", justifyContent: "center" }} >
                {!sentCode && <Card sx={{ p: 3 }}>
                    <Typography variant='h4' color="rgba(36,89,97,1)" >
                        Highgate
                    </Typography>
                    <Divider sx={{ mb: 2, mt: 2 }} ></Divider>
                    <form onSubmit={handleSubmit} >
                        <Stack spacing={2} >
                            <TextField
                                label="Email"
                                variant="outlined"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            <Button sx={{ bgcolor: "rgba(36,89,97,1)" }} variant="contained" type="submit" >
                                Send code.
                            </Button>
                            
                        </Stack>
                    </form>
                    {loading && <CircularProgress sx={{mt:2, mb:2}}></CircularProgress>}
                    {sentCode && !success && <Typography variant="h5" color="red">
                    The email entered does not exist.
                </Typography>}

                </Card>}

               
                {sentCode && success &&
                    <Card sx={{ p: 3 }}>
                        <Typography variant="subtitle1">
                            Enter the passcode sent to <strong>{username}</strong>
                        </Typography>
                        <PinInput
                            length={6}
                            initialValue=""
                            secretDelay={100}
                            type="numeric"
                            inputMode="number"
                            style={{ padding: '10px' }}
                            inputStyle={{ borderColor: 'grey', borderRadius: 5, borderWidth: 2 }}
                            inputFocusStyle={{ borderColor: 'rgba(36,89,97,1)",' }}
                            onComplete={(value, index) => {
                                setPin(value);
                            }}
                            autoSelect={true}
                            regexCriteria={/^[0-9]*$/}
                        />
                        {loading && <CircularProgress sx={{mt:2, mb:2}}></CircularProgress>}
                        {verifSuccess && <Typography>Success!</Typography>}
                        {verifError && <Typography>{errorMessage}</Typography>}
                    </Card>
                }





            </Box>

        </RootStyle >



    );
}
