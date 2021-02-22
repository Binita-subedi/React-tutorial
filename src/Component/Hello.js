import React, { Component } from 'react';

const Hello = () => {
//   return(
//     <div>
//     <h1> How are you </h1>
//     </div>
//   )
// }
return React.createElement ('div', {id: 'hello' , class: 'dummyClass'}, React.createElement('h1', {id: 'Test', class: 'hi'}, 'Computer Science'))
}

export default Hello;