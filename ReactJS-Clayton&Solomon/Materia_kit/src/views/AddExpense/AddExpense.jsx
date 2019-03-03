import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
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

class AddExpense extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {   
  //        expense : ''
  //   };
    // this.handleOnChangeE = this.handleOnChangeE.bind(this);
    // this.handleOnSubmit = this.handleOnSubmit.bind(this);
  // } 
  state = {

    expense1 : "",
    expense2 : "",
    expense3 : "",
    expense4 : "",
    expense5 : "",
    expense6 : "",
    mode1 : "",
    mode2 : "",
    mode3 : "",
    mode4 : "",
    mode5 : "",
    mode6 : "",
  }
  // componentDidMount(){

    
  //   axios.get('http://192.168.43.46:8080/rest/get-day-expense').then(dataList => this.setState({dataList : dataList.data},()=> console.log(dataList)) );
  // }
  handleOnChangeE1 = (e)=>{
    
    this.setState({expense1 : e.target.value});
    

}
handleOnChangeE2 = (e)=>{
    
  this.setState({expense2 : e.target.value});
  

}
handleOnChangeE3 = (e)=>{
    
  this.setState({expense3 : e.target.value});
  

}
handleOnChangeE4 = (e)=>{
    
  this.setState({expense4 : e.target.value});
  

}
handleOnChangeE5 = (e)=>{
    
  this.setState({expense5 : e.target.value});
  

}
handleOnChangeE6 = (e)=>{
    
  this.setState({expense6 : e.target.value});
  

}
handleOnChangeM1 = (e)=>{
    
  this.setState({mode1 : e.target.value});
  

}
handleOnChangeM2 = (e)=>{
    
  this.setState({mode2 : e.target.value});
  

}
handleOnChangeM3 = (e)=>{
    
  this.setState({mode3 : e.target.value});
  

}
handleOnChangeM4 = (e)=>{
    
  this.setState({mode4 : e.target.value});
  

}
handleOnChangeM5 = (e)=>{
    
  this.setState({mode5 : e.target.value});
  

}
handleOnChangeM6 = (e)=>{
    
  this.setState({mode6 : e.target.value});
  

}
  handleOnSubmit= (e)=>{
    e.preventDefault();
    var send = {
      expense1 : this.state.expense1,
      expense2 : this.state.expense2,
      expense3 : this.state.expense3,
      expense4 : this.state.expense4,
      expense5 : this.state.expense5,
      expense6 : this.state.expense6,
      mode1 : this.state.mode1,
      mode2 : this.state.mode2,
      mode3 : this.state.mode3,
      mode4 : this.state.mode4,
      mode5 : this.state.mode5,
      mode6 : this.state.mode6


    };
    console.log('hello')
    console.log(send)

    axios.post('http://192.168.43.46:8080/rest/post-day-expense',{send}).then(console.log('Message sent '));
 }

  render(){

    const { classes } = this.props;
    return (
      <div>
        <form onSubmit = {this.handleOnSubmit} >
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Expense Details</h4>
                <p className={classes.cardCategoryWhite}>Complete your expense details</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {/* <GridItem xs={12} sm={12} md={10}>
                    <CustomInput
                      labelText="Company (disabled)"
                      id="company-disabled"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: true
                      }}
                    />
                  </GridItem> */}
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  id="food" placeholder="Food" disabled/>
                </div>     
                  </GridItem>


                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              {/*  */}
                  <input type="text" class="form-control" onChange= {this.handleOnChangeE1} id="expense1" placeholder="Expense" />
                </div>
                  </GridItem>


                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              {/*  */}
                  <input type="text" class="form-control" onChange= {this.handleOnChangeM1} id="mode1" placeholder="Mode Of Payment"/>
                </div>
                  </GridItem>
                </GridContainer>




                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                <div class="form-group">
              {/*  */}
                  <input type="text" class="form-control"  id="groceries" placeholder="Groceries" disabled/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              {/*  */}
                  <input type="text" class="form-control" onChange= {this.handleOnChangeE2} id="expense2" placeholder="Expense"/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  onChange= {this.handleOnChangeM2} id="mode2" placeholder="Mode Of Payment"/>
                </div>
                  </GridItem>
                </GridContainer>



                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                <div class="form-group">
              
                  <input type="text" class="form-control" id="transport" placeholder="Transport" disabled/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control" onChange= {this.handleOnChangeE3} id="expense3" placeholder="Expense"/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  onChange= {this.handleOnChangeM3} id="mode3" placeholder="Mode Of Payment"/>
                </div>
                  </GridItem>
                </GridContainer>


                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                <div class="form-group">
              
                  <input type="text" class="form-control" id="personal" placeholder="Personal Care" disabled/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  onChange= {this.handleOnChangeE4} id="expense4" placeholder="Expense"/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  onChange= {this.handleOnChangeM4} id="mode4" placeholder="Mode Of Payment"/>
                </div>
                  </GridItem>
                </GridContainer>


                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                <div class="form-group">
              
                  <input type="text" class="form-control" id="clothing" placeholder="Clothing" disabled/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control"  onChange= {this.handleOnChangeE5} id="expense5" placeholder="Expense"/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control" onChange= {this.handleOnChangeM5} id="mode5" placeholder="Mode Of Payment"/>
                </div>
                  </GridItem>
                  
                </GridContainer>


                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                <div class="form-group">
              
                  <input type="text" class="form-control"id="extras" placeholder="Extras" disabled/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control" onChange= {this.handleOnChangeE6} id="expense6" placeholder="Expense"/>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <div class="form-group">
              
                  <input type="text" class="form-control" onChange= {this.handleOnChangeM6} id="mode6" placeholder="Mode Of Payment"/>
                </div>
                </GridItem>
                </GridContainer>

                {/* <label>Date:   </label>
                <input type = "date" id= "date_of_expense" /> */}
              </CardBody>
              <CardFooter>
                <Button color="primary" type = "submit">Add Expense</Button>
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
        </form>
      </div>
    );

  }

}

export default withStyles(styles)(AddExpense);
