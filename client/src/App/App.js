import React, { useState, useEffect } from 'react';
import './App.css';
import DivContainer from '../divContainer/divContainer';

function App() {

  const [pageVars, setPageVars] = useState({})
  const [error, setError] = useState(null)
  const [divOrder, setDivOrder] = useState(['Main', 'AboutMe', 'Projects', 'Skills', 'History', 'Contact', 'Blog'])
  const [divs, setDivs] = useState([])
  const [divID, setDivID] = useState(['notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected'])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_EXPRESS_URL}/get-data`)
      .then(res => {
        if (res.status !== 200) {
          return setError('there was an error loading this page')
        } else {
          return res.json()
        }
      })
      .then(data => {
        if (data) {
          setPageVars(data)
        }
      })
  }, [])

  useEffect(() => {
    setDivs(
      divOrder.map((element, index) => {
        return (
          <div className={`gridElements gridItem${(index).toString()}`} id={divID[index]} onClick={divIsClicked.bind(this, index)}>
            <DivContainer catagory={element} status={divID[index]} />
          </div>
        )
      })
    )
  }, [pageVars, divID])

  const divSelected = event => {
    let index = event.target.name
    let selection = ['notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected']
    if (divID[index] == 'selected') {
      setDivID(selection)
    } else {
      selection[index] = 'selected'
      setDivID(selection)
      window.scrollTo({top: 0, behavior: "smooth"})
    }
  }

  const divIsClicked = index => {
    let current = divID
    const selectedIndex = current.findIndex(element => {
      return element == 'selected'
    })
    if(selectedIndex != -1 && index != selectedIndex){
      current[selectedIndex] = 'notSelected'
    }
    if (current[index] !== 'selected' && index > 0) {
      if (current[index] == 'clicked') {
        current[index] = 'unclicked'
        setDivID([current[0], current[1], current[2], current[3], current[4], current[5], current[6]])
        setTimeout(() => {
          current[index] = 'notSelected'
          setDivID([current[0], current[1], current[2], current[3], current[4], current[5], current[6]])
        }, 200)

      } else {
        current[index] = 'clicked'
        setDivID([current[0], current[1], current[2], current[3], current[4], current[5], current[6]])
      }
    }

  }



  if (error) {
    return <div><h4>{error}</h4></div>
  }
  return (
    <div className="App">
      <div className="head">
        <h1>austin moorman</h1>
        <div className="nav">
          <a onClick={divSelected} name={1} className="navA">about me</a>
          <a onClick={divSelected} name={2} className="navA">projects</a>
          <a onClick={divSelected} name={3} className="navA">skills</a>
          <a onClick={divSelected} name={4} className="navA">history</a>
          <a onClick={divSelected} name={5} className="navA">contact</a>
          <a onClick={divSelected} name={6} className="navA">blog</a>
        </div>
      </div>
      <div className="gridContainer">
        {divs}
      </div>



    </div>
  );
}

export default App;
