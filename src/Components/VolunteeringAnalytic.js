import Chart from "react-apexcharts";
import { Stack, Typography, Card } from "@mui/material";

export function VolunteeringAnalytic({ series, labels }) {
    return (
        <Card sx={{ padding: 4, borderRadius: 10 }} elevation={5}>
                <Stack direction="column" alignContent="flex-start">
                    <Typography variant="h6" gutterBottom>
                        {" "}
                        Areas
                    </Typography>
                    <Chart
                        series={series}
                        labels={labels}
                        type="donut"
                        width="300"
                        options={{
                            series: series,
                            labels: labels,
                            plotOptions: {
                                pie: {
                                    showLabels:false,
                                    expandOnClick: true,
                                },
                            },
                        }}
                    ></Chart>
                </Stack>

                
        </Card>

    );
}
