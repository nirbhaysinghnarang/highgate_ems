import Chart from "react-apexcharts";
import { Stack, Typography, Card, Avatar } from "@mui/material";

function Comment({ comment }) {
    console.log(comment.profileName);
    return (
        <Card sx={{ padding: 2, borderRadius: 1, width: "50%", }} elevation={2}>
            <Stack direction="row" spacing={2} alignContent={"center"}>
                <Avatar alt={comment.profileName}></Avatar>
                <Stack direction="column" >
                    <Typography variant="body1">{comment.profileName}</Typography>
                    <Typography variant="subtitle2">{comment.commentText}</Typography>
                </Stack>

                <Typography variant="subtitle2">{comment.timestamp.toUTCString()}</Typography>
            </Stack>

        </Card>);
}

export function CommentBoard({ comments }) {
    return (
        <Card sx={{ padding: 4, borderRadius: 10, width: "100%" }} elevation={5}>
            <Stack direction="column">
                <Typography variant="h5" gutterBottom>
                    {" "}
                    Discussions
                </Typography>
                <Stack direction="column" spacing={1}>
                    {comments.map(comment => <Comment comment={comment}></Comment>)}
                </Stack>
            </Stack>
        </Card>

    );
}
