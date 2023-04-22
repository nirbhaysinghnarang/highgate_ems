import Chart from "react-apexcharts";
import { Stack, Typography, Card, Divider } from "@mui/material";

export function SavingsAnalytic({
  projectSeries,
  projectxaxis,
  cardStyle,
  graphHeight,
  graphWidth,
}) {
  return (
    <Card sx={{ padding: 4, borderRadius: 5 }} elevation={5} style={cardStyle}>
      <Stack direction="column" divider={<Divider orientation="horizontal" />}>
        <Typography variant="subtitle1" align="center" gutterBottom>
          {" "}
          Reported Energy Savings
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom gutterTop>
          {" "}
          Total: 50,000kW
        </Typography>
        <Chart
          series={projectSeries}
          type="bar"
          width={graphWidth}
          height={graphHeight}
          options={{
            chart: { id: "basic-bar" },
            xaxis: projectxaxis,
          }}
        ></Chart>
      </Stack>
    </Card>
  );
}
