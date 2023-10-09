import React, { useState } from 'react';
import './App.css';


function App() {

    // const [firstName, setFirstName] = useState("");
    // const [LastName, setLastName] = useState("");

    // console.log(firstName);
    // console.log(LastName);

    // function changeFirstHandler(event){
    //   // console.log(event.target.value)
    //   setFirstName(event.target.value);
    // }

    // function changeLastHandler(event){
    //   // console.log(event.target.value)
    //   setLastName(event.target.value);
    // }

    const [formData, setFormData] = useState({firstName:"",lastName:"",email:"",comments:""})
    console.log(formData)

    function changeHandler(event){
      setFormData(prevFormData => {
        return{...prevFormData,
          [event.target.name]:event.target.value
        }
      })
    }

    return (
      <div className="App">
        <form>
          <input
            type='text'
            placeholder='fName'
            onChange={changeHandler}
            name='firstName'
            value={formData.firstName}

          />
          <br/>
          <input
            type='text'
            placeholder='lName'
            onChange={changeHandler}
            name='lastName'
            value={formData.lastName}

          />
          <br/>
          <input
            type='email'
            placeholder='email'
            onChange={changeHandler}
            name='email'
            value={formData.email}
          />

          {/* textarea */}
          <textarea>
            placeholder='enter comments'
            onChange={changeHandler}
            name='comments'
            value={formData.comments}
          </textarea>

          
        </form>
      </div>
    );
  
}

export default App;
