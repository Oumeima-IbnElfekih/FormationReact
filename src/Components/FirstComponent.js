import React from 'react';

 const name = "Foulen";
 const name1 = <p> Ben foulen </p>;
export default class  FirstComponent extends React.Component {
   
  render()   { return ( <div>
        {name1}
        <p> hello {name} </p>
        </div>) }
}