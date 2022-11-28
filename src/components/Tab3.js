import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Tab3.css'
import img from './logonobg.png'

function Tab3() {
    const[tab3dis,setTab3dis]=useState([])
    const Tab3API=()=>{
        const response = axios
        // .get("https://sheetdb.io/api/v1/3dlgpf3zhlol7?sheet=Teamwise_Leaderboard")
        .get(
          "https://sheets.googleapis.com/v4/spreadsheets/13oRnrhJDqu1PfymUW13Ibq_b-AVHP2gr3l5RwSPy7VM/values/Team_2/?key=AIzaSyBojSmY8Zvgy8Qw927mK14NHkDy-XJr9iw"
        )
        .then((response) => {
          console.log(response.data);
          setTab3dis(response.data.values);
        });
    }
    useEffect(
        ()=>{
            Tab3API()
        },[]
    )
  return (
    <div className='tab3main mx-0'>
      {/* this is tab 3 */}
      <div className="top3">
      <div className="imagelogo">
      <img src={img} alt="Responsive-image" class="img-thumbnail" id='tab3img'/>
      </div>
      <div className="leader">
      Re-Quest     Leaderboard
      </div>
      <div className="headingname">
        Ravenclaw
      </div>
      </div>
      <div className="container">
        <table className="table  "  >
          {/* <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">TeamName</th>
              <th scope="col">Points</th>
            </tr>
          </thead> */}
          <tbody className='tab3'>
            {
              //from here its left ......
              tab3dis.map((row) => (
                <tr>
                  <th scope="row">{row[0]}</th>
                  <th>{row[1]}</th>
                  <th>{row[2]}</th>
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

export default Tab3
