import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Input,
    CircularProgress,
    Typography,
} from "@mui/material";
import Page from "../Components/Page";
import Papa from 'papaparse';
import { projectCSVUploadLambda } from "../Client/apiClient";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { WarningOutlined } from "@mui/icons-material";
const RootStyle = styled(Page)(({ theme }) => ({
    overflowY: "scroll",
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

export default function ProjectUpload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [parsed, setParsed] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const inputStyles = {
        backgroundColor: "#f0f0f0",
        border: "none",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "16px",
        margin: "10px 0",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease-in-out",
        ":focus": {
            outline: "none",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
        },
        "::placeholder": {
            color: "#999",
        },
    };

    const handleFileUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "text/csv") {
            setFile(selectedFile);
            setError("");
        } else {
            setFile(null);
            setError("Please select a valid CSV file");
        }
    };

    const handleFileSubmit = (e) => {
        e.preventDefault();
        if (file) {
            parseFile(file);
            console.log("Uploading file:", file.name);
            setLoading(true);
        } else {
            setError("Please select a file to upload");
        }
    };

    const parseFile = (file) => {
        Papa.parse(file, {
            header: true,
            complete: results => {
                setParsed(results.data)
            },
        });
    };


    const extractFromParsed = (parsed) => {
        if (!parsed || parsed.length < 2) {
            setError(true);
            return;
        }
        const map = parsed[2];
        if (map.hasOwnProperty("")) delete map[""]
        const data = parsed.slice(3).map((elem) => {
            const datum = {}
            Object.keys(map).forEach(key => {
                datum[map[key]] = elem[key];
            })
            return datum;
        });
        return data
    }

    useEffect(() => {
        if (parsed) {
            console.log(extractFromParsed(parsed));
            projectCSVUploadLambda(extractFromParsed(parsed)).then(response => {
                setLoading(false);
                setSuccess(true);
            }).catch(e => {
                console.log(e)
                setError(true);
            })
        }
    }, [parsed])

    return (
        <RootStyle title="Upload Project CSV | My App">
            <Container maxWidth="sm">
                {!success &&
                    <Box sx={{ my: 10, mx: "auto", maxWidth: 480, textAlign: "center" }}>
                        <Typography variant="h3" gutterBottom>
                            Upload Project CSV
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }} variant="subtitle1">
                            Please select a CSV file to upload
                        </Typography>

                        {loading && <CircularProgress sx={{ marginTop: 1 }}></CircularProgress>}

                        <Box component="form" onSubmit={handleFileSubmit} sx={{ mt: 5 }}>
                            <FormControl sx={{ mb: 3 }} variant="outlined" fullWidth>
                                <Input
                                    style={inputStyles}
                                    id="csv-file"
                                    type="file"
                                    accept=".csv"
                                    onChange={handleFileUpload}
                                />
                                {error && <FormHelperText error>{error}</FormHelperText>}
                            </FormControl>

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                disabled={!file}
                            >
                                Upload
                            </Button>
                        </Box>
                    </Box>}
                {success &&
                    <Box sx={{ my: 10, mx: "auto", maxWidth: 480, textAlign: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ color: "rgba(36,89,97,1)" }}>
                            Successfully uploaded
                        </Typography>
                        <DoneOutlineIcon size={"large"} sx={{ color: 'rgba(36,89,97,1)' }}></DoneOutlineIcon>

                    </Box>}

                {error &&
                    <Box sx={{ my: 10, mx: "auto", maxWidth: 480, textAlign: "center" }}>
                        <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
                            There was a problem uploading your data.
                        </Typography>
                        <DoneOutlineIcon size={"large"} sx={{ color: 'red' }}></DoneOutlineIcon>

                    </Box>}


            </Container>
        </RootStyle>
    );
}
