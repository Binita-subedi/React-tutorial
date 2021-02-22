import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
  render() {

    return this.state.isLoggedIn && <div>Welcome Binita </div> 
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Buddy</div>)
    //   : (
    //     <div> Welcome Guest </div>
    //   )
    

    // let message 
    // if (this.state.isLoggeedIn) {
    //   message = <div>welcome Binita</div>
    // }
    // else {
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


  //  if (this.state.isLoggedIn) {
  //    return <div> welcome binny</div>
  //  } else {
  //    return <div>Welcome Guest</div>
  //  }
  // }
}
}

export default UserGreeting
