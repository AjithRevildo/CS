import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {FaUserAlt} from 'react-icons/fa'
import {BsWindows} from 'react-icons/bs'
import {HiChip} from 'react-icons/hi'
import {FaMicrochip} from 'react-icons/fa'
import {BiMicrochip} from 'react-icons/bi'
import {GrDriveCage} from 'react-icons/gr'
import {ImDrive} from 'react-icons/im'
import axios from 'axios'
var result
var owner
var windows
var chip
var tram
var fram
var drivename
var resultsize
export default function Forms() {
    const [clicked,setclick]=useState(false)
    const handleClick = async()=>{
        setclick(!clicked)
         await axios.get("http://localhost:5000/info").then((res)=>{
            result = res
            owner =result.data.owner
            windows = `Windows ${result.data.version}`
            chip = res.data.chip
            tram = `Total RAM : ${res.data["Total RAM"]} GB `
            fram = `Free RAM : ${res.data["Free RAM"]} GB`
            drivename = res.data.NAME
            resultsize =  res.data.result
            console.log(result)
         })
        
    }
    console.log(owner)
  return (
    <div>
        <Button variant="success" onClick={handleClick}>Get Info!</Button>
        {clicked?
        <>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaUserAlt/></InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
        value = "Revildo"
          aria-describedby="basic-addon1"
          readOnly
        />
      </InputGroup>  
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><BsWindows/></InputGroup.Text>
        <Form.Control
          placeholder="windows version"
          value = {windows === undefined?"No value":windows}
          aria-describedby="basic-addon1"
           readOnly
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><HiChip/></InputGroup.Text>
        <Form.Control
          placeholder="chips version"
          value = {chip === undefined?"No value":chip}
          aria-describedby="basic-addon1"
          readOnly
       />
      </InputGroup>
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaMicrochip/></InputGroup.Text>
        <Form.Control
          placeholder="Ram used"
          value = {tram === undefined?"no value":tram}
          aria-describedby="basic-addon1"
          readOnly
        />
      </InputGroup>
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><BiMicrochip/></InputGroup.Text>
        <Form.Control
          placeholder="Balance Ram"
          value = {fram === undefined?"no Value":fram}
          aria-describedby="basic-addon1"
          readOnly
        />
      </InputGroup>
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><GrDriveCage/></InputGroup.Text>
        <Form.Control
          placeholder="Balance Ram"
          value = { drivename === undefined && resultsize === undefined ? "no value" : `${drivename[0]}} : ${((Number(resultsize[0])/(1024*1024))/1024).toFixed(2)} GB  ` }
          aria-describedby="basic-addon1"
          readOnly
        />
      </InputGroup>
       <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><GrDriveCage/></InputGroup.Text>
        <Form.Control
          placeholder="Balance Ram"
          value = { drivename === undefined && resultsize === undefined ? "no value" : `${drivename[1]}  : ${ ((Number(resultsize[1])/(1024*1024))/1024).toFixed(2)} GB` }
          aria-describedby="basic-addon1"
          readOnly
        />
      </InputGroup>
      </>:""}
    </div>
  )
}
