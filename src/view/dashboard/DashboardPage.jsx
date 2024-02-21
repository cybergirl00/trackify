import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/main.css";
import chroma from 'chroma-js';
import { collection, getDocs,addDoc} from 'firebase/firestore'
import {db} from '../../firebase'
import emailjs from '@emailjs/browser';


const tableData = [
  {
    serial: 1,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 2,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 3,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 4,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 5,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 6,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 7,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
  {
    serial: 9,
    name: "Mubarak",
    relationship: "Mother",
    number: "09145632107",
    location: "Abuja",
  },
];

const historyData = [
  {
    id: 1,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "White",
  },

  {
    id: 2,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "Lightblue",
  },
  {
    id: 3,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "White",
  },
  {
    id: 4,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "Lightblue",
  },
  {
    id: 5,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "White",
  },
  {
    id: 6,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "Lightblue",
  },
  {
    id: 7,
    departure: "No. 45 Congo Rd, Ang Rimi Yola",
    arrival: "No. 45 Congo Rd, Ang Rimi Yola",
    type: "White",
  },
];

const colorMapping = {
  White: "#fff",
  Lightblue: " #7096D1",
};
const DashboardPage = () => {
  const [dynamicColors] = useState(false);
  const [arrival, setArrival] = useState('')
  const [depart, setDepart] = useState('')
  const [history, setHistory] = useState([])
  const [datas, setDatas] = useState([])
  // to fetch users from the database
  const [users, setusers] = useState([])

  // Retrive the stored data in the local storage
  const userId = localStorage.getItem("userId")

  const form = useRef();
  // fuction to add new location
  const addLocation = async (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    await addDoc(collection(db, 'history'), {
      userId: userId,
      arrival,
      depart

    }).then(alert('location added.'))
  }
  // useeffect to fetch data based on the user logged in
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, 'shared'))
      const setData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDatas(setData)
    }
    getData();
  }, [])

  // useEffect to get the history 
  useEffect(() => {
    const getHistory = async () => {
      const data = await getDocs(collection(db, 'history'))
      const sethis = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHistory(sethis)
    }
    getHistory();
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(collection(db, 'users'))
      const setuser = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setusers(setuser)
    }
    getUsers();
  }, [])

  

  const generateDynamicColors = () => {
    return historyData.map((obj) =>
      chroma.scale(["#fff", " #7096D1"]).get(obj.id / historyData.length)
    );
  };
  const colors = dynamicColors
    ? generateDynamicColors()
    : historyData.map((obj) => colorMapping[obj.type]);
  return (
    <div className="dash-main">
      <div className="dash-header">
        {users.map((user) => (
          <>
          {user.userId === userId && 
            <h2>Hello, {user.name} 😊</h2>
          }
          </>
        ))}
      </div>

      <div className="dash-content">
        <div className="row">
          <div className="col-sm-12 col-md-7 dash-left">
            <table class="table table-striped" border={1}>
              <thead>
                <tr>
                  {/* <th scope="col">S/n</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((item) => (
                  <tr>
                    {userId === item.userId && (
                      <>
                      <td>{item.name}</td>
                      <td>{item.relation}</td>
                      <td>{item.email}</td>
                      <td>{item.state}</td>
                      </>

                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="dash-history">
              <div className="dash-history-box">
                <div className="dash-history-heading">
                  <h5>History</h5>
                </div>
                {history.map((item) => (
                <div className="dash-history-content">
                  {userId === item.userId && (
 <div
 className="dash-history-content-box"
 key={item.id}
 style={{ background: colors[item] }}
>
 <div className="dash-history-content-number">
   {item.length}
 </div>
 <div className="dash-history-content-detail">
   <div className="dash-history-content-detail-one">
     <h6>Departure:</h6>
     <p>{item.depart}</p>
   </div>
   <div className="dash-history-content-detail-two">
     <h6>Arrivial:</h6>
     <p>{item.arrival}</p>
   </div>
 </div>
</div>
                  )}
                </div>
                  ))}
              </div>
            </div>
            <div className="dash-dropdown">
              <form ref={form} onSubmit={addLocation}>
                <div className="dash-dropdown-departure">
                  <label>Departure:</label>
                  <input type="text" placeholder="Enter departure address" onChange={(e) => setDepart(e.target.value)} 
                // name="user_name"
                  />
                </div>

                <div className="dash-dropdown-arrival">
                  <label>Arrivial:</label>
                  <input type="text" placeholder="Enter arrival address" onChange={(e) => setArrival(e.target.value)}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="dash-location-check">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <div className="dash-btn">
                <button type="button" className="btn btn-share" onClick={addLocation}>
                  Share Location
                </button>
                <button type="button" className="btn btn-location">
                  Check Location
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-5">
                    <div className="dash-progress-box">
                      <div className="progress-bar-dash">
                        85%
                      </div>
                      <div className="dash-progress-text">
                          <h5>345 000km done </h5>
                          <p>out of 400 000km</p>
                      </div>
                    </div>
                    
            </div>
          </div>
        </div>

        <footer className="login-footer">
            <div className="footer-text">
              <p>&#169; TrackifyWeb, 2024. All right reserved.</p>
            </div>
              
          </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
