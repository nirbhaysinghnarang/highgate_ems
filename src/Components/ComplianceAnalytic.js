import Chart from "react-apexcharts";
import { Stack, Typography, Card } from "@mui/material";

export function ComplianceAnalytic({ series, labels }) {
  return (
    <Card sx={{ padding: 4, borderRadius: 5 }} elevation={5}>
      <Stack direction="column">
      <Typography variant="h5" gutterBottom>
        {" "}
        Compliance
      </Typography>
      <Chart
        series={series}
        labels={labels}
        type="pie"
        width="380"
        options={{
          series: series,
          labels: labels,
          plotOptions: {
            pie: {
              expandOnClick: true,
            },
          },
        }}
      ></Chart>
    </Stack>
    </Card>
    
  );
}
