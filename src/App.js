// import React from "react";
import moment from "moment";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import React, { PureComponent } from 'react';
import { Grid, Paper } from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';

// import   ResponsiveContainer from "recharts";
import mydata from "./mydata/github_recdata.json";
import PaginationTableComponent from "./Table";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // 
} from "recharts";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  container: {
    padding: theme.spacing(1),
  },
  horizontalPaper: {
    margin: theme.spacing(1),
    // padding: theme.spacing(2),
  },
  verticalPaper: {
    margin: theme.spacing(1),
    // padding: theme.spacing(2),
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
  },
}))



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   firsticon: {
//     margin: theme.spacing(1),
//     fontSize: theme.typography.pxToRem(50),
//     // backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));


const App = () => {


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="false">
      <CssBaseline />
      <div className={classes.verticalPaper}>
        <Grid container spacing={2} >
          <Grid align="center" item xs={12} sm={12} md={12}>
            <Typography component="h1" variant="h5">
              REC Price
            </Typography>
            <Typography component="h5" variant="body1">
              (KRW/REC)
            </Typography>
          </Grid>
          <Grid align="center" item xs={12} sm={12} md={7}>

            <ResponsiveContainer
              width="99%"
              aspect={1.1}
              key={`rc_${mydata.length}`}>

              <ComposedChart
                // width={500}
                // height={400}
                data={mydata}
                key={`cc_${mydata.length}`}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis
                  dataKey="date"
                  interval={100}
                  tickFormatter={(unixTime) => moment(unixTime).format("YY/MM")}
                />
                <YAxis tickFormatter={tick => {
                  return tick.toLocaleString();
                }}
                />
                <Tooltip
                  formatter={(value, name, props) => [
                    new Intl.NumberFormat("en").format(value),
                    "종가"
                  ]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="closing_price"
                  fill="url(#colorPv)"
                  stroke="#82ca9d"
                  fillOpacity={1}
                />{" "}
                {/* <Bar
              type="monotone"
              dataKey="trade_volume"
              barSize={20}
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </Grid>
          <Grid align="center" item xs={12} sm={12} md={5}>
            <PaginationTableComponent />
          </Grid>
        </Grid>

      </div>
    </Container>
  );
}
export default App