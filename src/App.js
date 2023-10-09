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

    const [formData, setFormData] = useState({firstName:"",lastName:"",email:"",comments:"",isVisible:true,mode:"",favCar:""})
    console.log(formData)

    function changeHandler(event){

      const {name, value, checked, type} = event.target

      setFormData(prevFormData => {
        return{...prevFormData,
          [name]:type ==="checkbox" ? checked : value
        }
      })
    }

    function submitHandler(event){
      event.preventDefault();
      //print
      console.log("Printing entire form data");
      console.log(formData);
    }
    return (
      <div className="App">
        <form onSubmit={submitHandler}>
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

          <br/>
          <textarea
            placeholder='enter comments'
            onChange={changeHandler}
            name='comments'
            value={formData.comments}
          >
          </textarea> 
          <br/>
          <input
            type='checkbox'
            onChange={changeHandler}
            name='isVisible'
            checked={formData.isVisible}
            id='isVisible'
          />
          <label htmlFor='isVisible'>Am I visible</label> 
          <br/>
          
          <fieldset>
            <legend>Mode:</legend>
            
          
            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Online-Mode"
              id="Online-Mode"
              checked={formData.mode==="Online-Mode"}
            />
            <label htmlFor='Online-Mode'>Online Mode</label>

            <input
              type="radio"
              onChange={changeHandler}
              name="mode"
              value="Offline-Mode"
              id="Offline-Mode"
              checked={formData.mode==="Offline-Mode"}
            />
            <label htmlFor='Offline-Mode'>Offline Mode</label>
        
          </fieldset>

          <select
          name='favCar'
          id='favCar'
          value={formData.favCar}
          onChange={changeHandler}
          >
            <option value="SRT">SRT</option>
            <option value="Mustang">Mustang</option>
            <option value="Carrera">Carrera</option>
            <option value="AMG">AMG</option>

          </select>
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  
}

export default App;
