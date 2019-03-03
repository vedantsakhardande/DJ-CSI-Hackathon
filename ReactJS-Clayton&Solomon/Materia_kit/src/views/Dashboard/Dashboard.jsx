import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
// import Tasks from "components/Tasks/Tasks.jsx";
// import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import axios from 'axios';
// import { bugs, website, server } from "variables/general.jsx";
import DetailedCard from "../DetailedCard/DetailedCard.jsx";
import AddExpense from "../AddExpense/AddExpense.jsx";
import Personalize from "../Personalize/Personalize.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
const host='http://192.168.43.46:8080';
class Dashboard extends React.Component {
  state = {
    value: 0,
    expense_posts:[],
    total_day_expense:[],
    total_month_expense:[],
    total_year_expense:[],


  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  
  componentDidMount () {
    axios.get(host+'/rest/get-day-wise-data-expenses')
    .then(Response=>{
      console.log(Response);
      this.setState({expense_posts: Response.data })
      console.log(this.state.expense_posts[0][0].category)
      console.log(this.state.expense_posts[0][1].category)
    })

    axios.get(host+'/rest/get-all-month-expense-amount')
    .then(Response=>{
      console.log(Response);
      this.setState({total_month_expense: Response.data })
      console.log(this.state.total_month_expense[0])
      console.log(this.state.total_month_expense[0])
    })
    
    //var currentDate = new Date();
    // var date1 = currentDate.getDate();
    // var date2 =currentDate
    


  }
  handleSubmit = event => {
    event.preventDefault();

    const send ={
      id: 56,
      category: "1string",
      expense: "2string",
      mode_of_pay: "3string",
      date: "2019-03-03T00:41:26.417+0000"
    };
    console.log("here");
    console.log(host+`/rest/post-day-expense`);
    axios.post(host+`/rest/post-day-expense`, { send })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    const data ={
      dailyExpense : {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[12, 17, 7, 17, 23, 18, 38]]
      },
      MonthlyExpense: {
        labels: ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        series: [[
          100,
          200,300,800,400,600,400,400,800,600,400,700,1000]]
      },
      MonthlyIncome:  {
        labels: ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
      },
      

    }
    // const table1 ={
    //   date1: [["1",this.state.expense_posts[0][0].category,this.state.expense_posts[0][0].expense,this.state.expense_posts[0][0].mode_of_pay]]
      
    // }
    // tableData={[
    //   ["1", {table1.date1.category}, "$36,738", "Niger"],
    //   ["2", "Minerva Hooper", "$23,789", "Curaçao"],
    //   ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
    //   ["4", "Philip Chaney", "$38,735", "Korea, South"]
    // ]}
    const { classes } = this.props;
    return (
      <div>
        
        
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Income</p>
                <h3 className={classes.cardTitle}>
                  Rs. 590000
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="danger">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Expense</p>
                <h3 className={classes.cardTitle}>Rs.290800{this.state.total_month_expense[3]}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="success">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Investments</p>
                <h3 className={classes.cardTitle}>Rs.180800{}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Savings</p>
                <h3 className={classes.cardTitle}>Rs70300.{}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={data.dailyExpense}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Expense</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today sales.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={data.MonthlyExpense}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Expense</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={data.MonthlyIncome}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Monthly Savings </h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        
          <GridContainer>
          
        </GridContainer>
        <GridContainer>
          
        </GridContainer>
        <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Expense Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Date:03/03/2019
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["CategoryNo", "Name", "Expense", "Payment Method"]}
                  tableData={[
                    ["1", "Food", "RS6,738", "Cash"],
                    ["2", "Sports", "Rs3,789", "Credit Card"],
                    ["3", "Clothing", "Rs6,142", "Credit Card"],
                    ["4","Extras", "Rs8,735", "Cash"],
                  ]}
                  // tableData={[
                  //   ["1", this.state.expense_posts[0][0].category, this.state.expense_posts[0][0].expense, this.state.expense_posts[0][0].mode_of_pay],
                  //   ["2", this.state.expense_posts[0][1].category, this.state.expense_posts[0][1].expense, this.state.expense_posts[0][1].mode_of_pay],
                  //   ["3", this.state.expense_posts[0][2].category, this.state.expense_posts[0][2].expense, this.state.expense_posts[0][2].mode_of_pay],
                  //   ["4", this.state.expense_posts[0][3].category, this.state.expense_posts[0][3].expense, this.state.expense_posts[0][3].mode_of_pay],
                  // ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Expense Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Date:02/03/2019
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["CategoryNo", "Name", "Expense", "Payment Method"]}
                  tableData={[
                    ["1", "Food", "RS6,738", "Cash"],
                    ["2", "Sports", "Rs3,789", "Credit Card"],
                    ["3", "Clothing", "Rs6,142", "Credit Card"],
                    ["4","Extras", "Rs8,735", "Cash"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Expense Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Date:01/03/2019
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Food", "RS6,738", "Cash"],
                    ["2", "Sports", "Rs3,789", "Credit Card"],
                    ["3", "Clothing", "Rs6,142", "Credit Card"],
                    ["4","Extras", "Rs8,735", "Cash"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Expense Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  Date:28/02/2019
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["CategoryNo", "Name", "Expense", "Payment Method"]}
                  tableData={[
                    ["1", "Food", "RS6,738", "Cash"],
                    ["2", "Sports", "Rs3,789", "Credit Card"],
                    ["3", "Clothing", "Rs6,142", "Credit Card"],
                    ["4","Extras", "Rs8,735", "Cash"],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <DetailedCard></DetailedCard>
          <Personalize></Personalize>
          <AddExpense></AddExpense>
          
          
          
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
