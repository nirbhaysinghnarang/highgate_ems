import React from "react";
import { Stack, Typography, Card, Box } from "@mui/material";
import { Timer, Group, MonetizationOn } from "@mui/icons-material";

import VolunteerNews from "../Types/VolunteerNews.type.js";

function NewsComponent({ news }) {
    return (
        <Stack>
            <Typography variant="h6">{news.title}</Typography>
            <img style={{height:"200px", borderRadius:5}}src={news.imgLink}></img>
        </Stack>);

}

export default function VolunteerNewsComponent({ items }) {
    return (
        <Card sx={{ padding: 4, borderRadius: 10 }} elevation={5}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                {" "}
                Highlights
            </Typography>
            <Stack direction={"row"} spacing={2} justifyContent={"space-around"} alignContent={"center"}>
            {items.slice(0,2).map(item=>
                <NewsComponent news={item}></NewsComponent>
            )}

            </Stack>
           
            
        </Card>
    );
}
