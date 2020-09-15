import React from 'react';

function Logo() {
  return (
    <div >
     
      <img src={process.env.PUBLIC_URL + "/klout.png"} width="150px" alt="KloutLogo"/>
      <br />
      
      
    </div>
  );
}

export default Logo;

