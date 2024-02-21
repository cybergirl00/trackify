import React, { useState } from 'react'
import "../Profie.css";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../../../firebase';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  //useStates 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setcity] = useState('')
  const [state, setState] = useState('')
  const [lga, setlga] = useState('')
  const [Country, setCountry] = useState('')
  const [phone, setphone] = useState('')
  const [relation, setrelaion] = useState('')
  const [isEmpty, setisEmpty] = useState(false)

  // to get the userID
  const userId = localStorage.getItem('userId')
  const navigate = useNavigate()

  // function to Emergency  Contact Information
  const addEmergency = async () => {
    if(name === '' || email === '' || address === '' || city === ''
    || state === '' || lga === '' || Country === '' || phone === '' || relation === '' 
    ) {
      setisEmpty(true)
    }
    await addDoc(collection(db, 'shared'), {
      name,
      email,
      address,
      city,
      state,
      lga,
      Country,
      phone,
      relation,
      userId
    }).then(navigate('/'))
  }
  return (

    <div className="app_profile-contact">
        <h5 className="app_profile-contact-title">Update Emergency  Contact Information</h5>
        {isEmpty && <h1 style={{color: 'red', fontSize: 'bold'}} >Please fill all the fields</h1>}
        <form action="">
        <div className="row">
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="FullName"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-sm-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <input type="text" className="form-control" placeholder="City"
                onChange={(e) => setcity(e.target.value)}
               />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="State" 
                onChange={(e) => setState(e.target.value)}/>
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="LGA"   onChange={(e) => setlga(e.target.value)} />
            </div>
            <div className="col-sm-12 col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="col-sm-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Relationship"
                onChange={(e) => setrelaion(e.target.value)}
              />
            </div>
            <div className="col-sm-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                onChange={(e) => setphone(e.target.value)}
              />
            </div>

            <div className="col-sm-12 emergency-btn">
              <button type="button" className="btn "
              onClick={addEmergency}
              >
                Update Information
              </button>
            </div>
          </div>
        </form>

    </div>
  )
}

export default Contact