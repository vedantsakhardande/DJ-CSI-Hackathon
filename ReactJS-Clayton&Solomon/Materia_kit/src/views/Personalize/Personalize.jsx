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

class Personalize extends React.Component {
  constructor(props){
    super(props);
    this.state = {   
      income : "",
      jewellery: false,
      real_estate : false,
      mutual_funds : false,
      fixed : false,
      stock_market : false,
      needed : "",
      wanted : "",
      savings : ""

    };
  } 
//   componentDidMount(){

    
//     axios.get('http://192.168.43.46:8080/rest/get-day-expense').then(dataList => this.setState({dataList : dataList.data},()=> console.log(this.state.dataList[0].date)) );
    
//   }

handleOnSubmit= (e)=>{
  e.preventDefault();
  console.log('1' +this.state.needed)
  console.log('1' +this.state.wanted)
  console.log('1' +this.state.savings)

  var a = Number(this.state.needed);
  var b = Number(this.state.wanted);
  var c = Number(this.state.savings);
  var d = a+b+c;
  console.log(d)
  if(d > 100){
    alert("Make sure that need + want + savings sum up to 100");
  }
  else{
    var send = {
      income : this.state.income,
      jewellery : this.state.jewellery,
      real_estate : this.state.real_estate,
      mutual_funds : this.state.mutual_funds,
      fixed : this.state.fixed,
      stock_market : this.state.stock_market,
      needed : this.state.needed,
      wanted : this.state.wanted,
      savings : this.state.savings,
  
  
    };
    console.log('hello');
    console.log(send);
  
    axios.post('http://192.168.43.46:8080/rest/post-day-expense',{send}).then(console.log('Message sent '));


  }
  
}


handleOnChange1 = (e)=>{
    
  this.setState({income : e.target.value});
  

}
handleOnChange2 = (e)=>{
    
  this.setState({jewellery : e.target.checked});
  

}
handleOnChange3 = (e)=>{
    
  this.setState({real_estate : e.target.checked});
  

}
handleOnChange4 = (e)=>{
    
  this.setState({mutual_funds : e.target.checked});
  

}
handleOnChange5 = (e)=>{
    
  this.setState({fixed : e.target.checked});
  

}
handleOnChange6 = (e)=>{
    
  this.setState({needed : e.target.checked});
  

}
handleOnChange7 = (e)=>{
    
  this.setState({needed : e.target.value});
  

}
handleOnChange8 = (e)=>{
    
  this.setState({wanted : e.target.value});
  

}
handleOnChange9 = (e)=>{
    
  this.setState({savings : e.target.value});
  

}
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={30}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Income Planning And Analysis</h4>

              </CardHeader>
              <CardBody>
                <GridContainer>

                  
                  <GridItem xs={12} sm={12} md={10}>
                  <h4>Income: &nbsp;
                  <input size = "15" type = "text" onChange = {this.handleOnChange1} placeholder="Enter your Family Income(in rs)" /><br></br>
                <input type = "checkbox" onChange = {this.handleOnChange2} />Jewellery<br></br>
                <input type = "checkbox" onChange = {this.handleOnChange3}/>Real Estate<br></br>
                <input type = "checkbox" onChange = {this.handleOnChange4}/>Mutual Funds<br></br>
                <input type = "checkbox" onChange = {this.handleOnChange5}/>Fixed Deposits<br></br>
                <input type = "checkbox" onChange = {this.handleOnChange6}/>Stock Market<br></br>
                Needed: &nbsp;
                <input type = "text" id = "1" onChange = {this.handleOnChange7} /><br></br>
                Wanted: &nbsp;
                <input type = "text" id = "2" onChange = {this.handleOnChange8} /><br></br>
                Savings: &nbsp;
                <input type = "text" id = "3" onChange = {this.handleOnChange9} /><br></br></h4>


                  </GridItem>
                </GridContainer>
              </CardBody>
              <Button color="primary" type = "submit">Generate Personalized Planning</Button>
            </Card>
          </GridItem>
         
        </GridContainer>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Personalize);
