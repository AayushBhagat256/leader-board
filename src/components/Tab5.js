import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Tab5.css'
import img from './logonobg.png'

function Tab5() {
    const[tab5dis,setTab5dis]=useState([])
    const Tab5API=()=>{
        const response = axios
        // .get("https://sheetdb.io/api/v1/3dlgpf3zhlol7?sheet=Teamwise_Leaderboard")
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/13oRnrhJDqu1PfymUW13Ibq_b-AVHP2gr3l5RwSPy7VM/values/Team_4!A1:C9/?key=AIzaSyBojSmY8Zvgy8Qw927mK14NHkDy-XJr9iw"
        )
        .then((response) => {
          console.log(response.data);
          setTab5dis(response.data.values);
        });
    }
    useEffect(
        ()=>{
            Tab5API()
        },[]
    )
  return (
    <div className='tab5main mx-0 '>
      {/* this is tab 5 */}
      <div className="top5">
      <div className="imagelogo">
      <img src={img} alt="Responsive-image" class="img-thumbnail" id='tab5img' />
      </div>
      <div className="leader">
        Re-Quest     Leaderboard
      </div>
      <div className="headingname">
        Hufflepuff
      </div>
      </div>
      <div className="container">
        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">TeamName</th>
              <th scope="col">Points</th>
            </tr>
          </thead> */}
          <tbody className='tab5'>
            {
              //from here its left ......
              tab5dis.map((row) => (
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
  )
}

export default Tab5
