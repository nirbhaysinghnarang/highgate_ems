import Chart from "react-apexcharts";
import { Stack, Typography, Card } from "@mui/material";

// const ColoredLine = ({ color }) => (
//     <hr
//         style={{
//             color: color,
//             backgroundColor: color,
//             height: 5
//         }}
//     />
// );

export function SavingsAnalytic({ projectSeries, projectxaxis}) {
    return (
        <Card sx={{ padding: 4, borderRadius: 10 }} elevation={5}>
            <Stack direction="column">
                    <Typography variant="h5" gutterBottom>
                        {" "}
                        Reported Energy Savings
                    </Typography>
                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                    <Chart
                        series={projectSeries}
                        type="bar"
                        width="450"
                        options={{
                            chart: {id: "basic-bar"},
                            xaxis: projectxaxis,
                        }}
                    ></Chart>
            </Stack>
        </Card>

    );
}
