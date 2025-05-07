import React from 'react'
import './Loading.css'
import Vibes_m from '../../assets/Vibes.svg'


const Loader = () => {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "black"
    }}>
      <img style={{
        height: "150px",
        width: "150px"
      }} src={Vibes_m} alt="" />
    </div>
  )
}

const Typing = () => {
  return <div
    className='message-tail-other'
    style={{
      alignSelf: "flex-start",
      justifySelf: "flex-end",
      textAlign: "start",
      backgroundColor: "#1989f0",
      color: "white",
      borderRadius: "0px 7px 7px 7px",
      padding: "0.2rem 1rem",
      minWidth: "53px",
      minHeight: "30px",
      maxWidth: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <div class="loadership_OTABD">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div >
}



export { Loader, Typing }