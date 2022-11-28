import React, { useEffect, useState } from "react";
import axios from "axios";
import './Tab1.css'
import img from './requestlogo.jpg'

function Tab1() {
  const [display, setDisplay] = useState([]);
  // const [loading, setLoading] = useState(false);
  const accessAPI = () => {
    const response = axios
      // .get("https://sheetdb.io/api/v1/3dlgpf3zhlol7?sheet=Teamwise_Leaderboard")
      .get(
        "https://sheets.googleapis.com/v4/spreadsheets/13oRnrhJDqu1PfymUW13Ibq_b-AVHP2gr3l5RwSPy7VM/values/Teamwise_Leaderboard/?key=AIzaSyBojSmY8Zvgy8Qw927mK14NHkDy-XJr9iw"
      )
      .then((response) => {
       // setLoading(true);
        console.log(response.data);
        setDisplay(response.data.values);
      });
    //setLoading(false);
  };

  console.log("1", display);
  useEffect(() => {
    accessAPI();
  },[]);

  // if (loading) {
  //   return <div>Loading</div>;
  // }

  return (
    <div className="tab1main mx-0">
      <div className="top1">
      <div className="imagelogo">
        <img src={img} alt="Responsive-image" class="img-thumbnail" />
      </div>
      <div className="leader">
        Re-Quest     Leaderboard
      </div>
      <div className="headingname">
        House Leader-Board
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
          <tbody className="tab1">
            {
              //from here its left ......
              display?.map((row) => (
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
  );
}

export default Tab1;
