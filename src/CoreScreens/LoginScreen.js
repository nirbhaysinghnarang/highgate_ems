import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import { loginLambda } from "../Client/apiClient";
import Page from "../Components/Page";
const RootStyle = styled(Page)(({ theme }) => ({
    overflowY: "scroll",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

export default function LoginScreen(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginLambda(username, password).then(response=>{
            console.log(response);
        })
    };

    return (

        <RootStyle title="Login | Highgate EMS " isLogin={true}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{padding:3}}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button sx={{bgcolor:"rgba(36,89,97,1)"}} variant="contained" type="submit">
                        Login
                    </Button>
                </Stack>
            </form>

        </RootStyle>

    );
}
