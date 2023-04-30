import { styled } from "@mui/material/styles";
import Page from "../Components/Page";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { getProjects } from "../Client/apiClient";
const RootStyle = styled(Page)(({ theme }) => ({
    overflowY: "scroll",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));


export default function ProjectsView() {


    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getProjects().then(response=>{
            console.log(response)
        })
    }, []);

    

    

    return (   
    <RootStyle>
        <Typography> Projects view </Typography>
    </RootStyle>
    )

}
