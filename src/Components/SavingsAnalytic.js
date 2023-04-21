import Chart from "react-apexcharts";
import { Stack, Typography, Card } from "@mui/material";

export function ProgressAnaytic({ projectSeries, projectLabels, goalSeries, goalLabels }) {
    return (
        <Card sx={{ padding: 4, borderRadius: 10 }} elevation={5}>
            <Stack direction="row">
                <Stack direction="column" alignContent="flex-start">
                    <Typography variant="h6" gutterBottom>
                        {" "}
                        Projects
                    </Typography>
                    <Chart
                        series={projectSeries}
                        labels={projectLabels}
                        type="donut"
                        width="200"
                        options={{
                            legend:{
                                show:false
                            },
                            series: projectSeries,
                            labels: projectLabels,
                            plotOptions: {
                                pie: {
                                    showLabels:false,
                                    expandOnClick: true,
                                },
                            },
                        }}
                    ></Chart>
                </Stack>

                <Stack direction="column">
                    <Typography variant="h6" gutterBottom>
                        {" "}
                        Goals
                    </Typography>
                    <Chart
                        series={goalSeries}
                        labels={goalLabels}
                        type="donut"
                        width="200"
                        options={{
                            legend:{
                                show:false
                            },
                            series: goalSeries,
                            labels: goalLabels,
                            plotOptions: {
                                pie: {
                                    showLabels:false,
                                    expandOnClick: true,
                                },
                            },
                        }}
                    ></Chart>
                </Stack>
            </Stack>
        </Card>

    );
}
