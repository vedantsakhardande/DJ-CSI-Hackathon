import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/marc.jpg";
import axios from 'axios';


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class DetailedCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {   
      dataList : [],
      date : 'hello'
    };
  } 
  componentDidMount(){

    
    axios.get('http://192.168.43.46:8080/rest/get-day-expense').then(dataList => this.setState({dataList : dataList.data},()=> console.log(this.state.dataList[0].date)) );
    
  }



  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={30}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Date :{this.state.dataList.slice(0,1).map(item => <text key = {item.id}>{item.date}</text>)}</h4>
                <h4 className={classes.cardTitleWhite}>Number of Expenses:</h4>
                <h4 className={classes.cardTitleWhite}>Total (in rs):</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={20}>
                 <h5>{this.state.dataList.map(item => {return (<div><Card  key = {item.id} >{item.category  }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -{item.expense}</Card></div>)})}</h5> 
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(DetailedCard);
