import { useState } from 'react'

import './Afuploaded.css'
import Select from "react-select";
// const animated = makeAnimated();



function Afuploaded() {
  const [count, setCount] = useState(0)
  const Tags = [
    {label: "Tag1", value: 33},
    {label: "Tag2", value: 335},
    {label: "Tag3", value: 336},
    {label: "Tag4", value: 337},
    {label: "Tag5", value: 339},
  ]


  return (
    <>

    <div className="ll">
        <h1 className='oo'>BASE</h1>
        <h3>Dashboard</h3>
        <h3>Upload</h3>
        <h3>Invoice</h3>
        <h3>Schedule</h3>
        <h3>Calender</h3>
        <h3>Notification</h3>
        <h3>Settings</h3>
    </div>
    <div className="container">
        
       
    <h1>Uploades</h1>
    
  <div class="topnav">
  <a  href="#home">Si No</a>
  <a href="#news">Links</a>
  <a href="#contact">Prefix</a>
  <a href="#about">Add tags</a>
  <a className="hh" href="#about">Selected Tags</a>
</div>
  <div className="ttt">
  <div className="si">
      <h3>01</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsimple</h4>
    </div>
    
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>


  </div>
  <div className="ttt">
  <div className="si">
      <h3>02</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsimple</h4>
    </div>
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>


  </div>
  <div className="ttt">
  <div className="si">
      <h3>03</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsimple</h4>
    </div>
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>


  </div>
 
  <div className="ttt">
  <div className="si">
      <h3>04</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsimple</h4>
    </div>
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>


  </div>
 
  <div className="ttt">
  <div className="si">
      <h3>05</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsimple</h4>
    </div>
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>
   


  </div>
 
  <div className="ttt">
  <div className="si">
      <h3>06</h3>
    </div>
    <div className="lin">
      <a href="https://www.google.com/">https://www.google.com/</a>

    </div>
    <div className="pre">
      <h4>prefixsample</h4>
    </div>
    <div className="container1">
      
      <Select options={Tags} isMulti />
    </div>


  </div>
 
  </div>
 

 

 
      
    </>
  )
}

export default Afuploaded