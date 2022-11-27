import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Tab2.css'
import img from './requestlogo.jpg'

function Tab2() {
    const[tab2dis,setTab2dis]=useState([])
    const Tab2API=()=>{
        const response = axios
        // .get("https://sheetdb.io/api/v1/3dlgpf3zhlol7?sheet=Teamwise_Leaderboard")
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/13oRnrhJDqu1PfymUW13Ibq_b-AVHP2gr3l5RwSPy7VM/values/Team_1/?key=AIzaSyBojSmY8Zvgy8Qw927mK14NHkDy-XJr9iw"
        )
        .then((response) => {
          console.log(response.data);
          setTab2dis(response.data.values);
        });
    }
    useEffect(
        ()=>{
            Tab2API()
        },[]
    )
  return (
    <div className='tab2main mx-0'>
      <div className="top2">
      <div className="imagelogo">
      <img src={img} alt="Responsive-image" class="img-thumbnail" />
      </div>
      <div className="leader">
        Re-Quest     Leaderboard
      </div>
      <div className="headingname">
        RED HOUSE
      </div>
      </div>
      <div>
      <div className="container">
        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">TeamName</th>
              <th scope="col">Points</th>
            </tr>
          </thead> */}
          <tbody className='tab2'>
            {
              //from here its left ......
              tab2dis.map((row) => (
                <tr>
                  <th scope="row">{row[0]}</th>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))
            }
            {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>hello</td>
      
    </tr> */}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Tab2
