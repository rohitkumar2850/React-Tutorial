import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
      
    return this.state.isLoggedIn && <div>Welcome Rohit</div>

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Rohit</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //   let message
    //   if(this.state.isLoggedIn){
    //       message = <div>Welcome Rohit</div>
    //   }else {
    //       message = <div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Rohit</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Rohit</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreetings;
