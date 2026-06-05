
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import './App.css'
// import Fingerprint from '@mui/icons-material/Fingerprint';
// import { Alert } from '@mui/material';


// function App() {
//   let handleclick=()=>{
//     console.log("Button was clicked")
//   }
//   return (
//     <>

// <Button variant='contained'
//  onClick={handleclick}
//  endIcon={<DeleteIcon/>}
//  >Click me</Button>
//  <Alert severity='error'>This is an error-- Check it out</Alert><br></br>



// {/* <Button variant='contained'
//  onClick={handleclick} 
//  color="error"
//  size='small'
//  security=''
//  >Click me3</Button> */}


// <Button
// aria-label="fingerprint" color="secondary">
// <Fingerprint />
// </Button>



// <Button loading variant="outlined" loadingPosition="end">
//           Submit
//         </Button>
//     </>
//   )
// }

// export default App

// //////Securty Code genrate
// // import { useState } from "react";
// // export default function SecurityCodeGenerator() {
// //     const [securityCode, setSecurityCode] = useState("");

// //     const generateSecurityCode = () => {
// //         const newCode = Math.floor(100000 + Math.random() * 900000); // Ensures a 6-digit number
// //         setSecurityCode(newCode);
// //     };

// //     return (
// //         <div style={{ textAlign: "center", marginTop: "20px" }}>
// //             <h3>Security Code Generator</h3>
// //             <button onClick={generateSecurityCode} >Generate Code</button>
// //             {securityCode && <p>Your Security Code: <strong>{securityCode}</strong></p>}
// //         </div>
// //     );
// // }




////////////**********Whether */



import WeatherApp from "./WeatherApp";

function App(){

  return(
    <>
    <WeatherApp/>
    
    </>
  )
}
export default App;