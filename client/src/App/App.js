import React, { useState, useEffect } from 'react';
import './App.css';
import DivContainer from '../divContainer/divContainer';
import { ReactComponent as Hamburger } from '../icons/hamburger.svg'
import { ScrollTo } from "react-scroll-to";

function App() {

  const [pageVars, setPageVars] = useState(null)
  const [error, setError] = useState(null)
  const [divOrder, setDivOrder] = useState(['main', 'projects','aboutMe','contact', 'skills','maps'])
  const [divs, setDivs] = useState([])
  const [divID, setDivID] = useState(['notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected', 'notSelected'])
  const [menuOpen, setMenuOpen] = useState(false)
  const [orientation, setOrientation] = useState(window.orientation)

  const changeOrientation = () => {
    setOrientation(window.orientation)
  }

  useEffect(() => {
    window.addEventListener('orientationchange', changeOrientation)
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
          <div className={`gridElements gridItem${element}`} id={divID[index]} onClick={divIsClicked.bind(this, index)}>
            <DivContainer catagory={element} status={divID[index]} pageVars={pageVars} />
          </div>
        )
      })
    )
  }, [pageVars, divID])

  const divSelected = event => {
    setMenuOpen(false)
    let index = Number(event.target.name)
    if (index == 3 || index == 5) {
      return;
    }
    let current = divID
    current[index] = 'clicked'
    setDivID([current[0], current[1], current[2], current[3], current[4], current[5], current[6]])

  }

  const divIsClicked = index => {
    setMenuOpen(false)
    if (index == 3 || index == 5) {
      return;
    }
    let current = divID
    const selectedIndex = current.findIndex(element => {
      return element == 'selected'
    })
    if (selectedIndex != -1 && index != selectedIndex) {
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
        const element = document.getElementById(divOrder[index] + 'A')
        console.log(element)
        setTimeout(() => {
          element.scrollIntoView({behavior: 'smooth'})
        },205)
      }
    }

  }
  const menu = () => {
    if (menuOpen) {
      return (
        <div className="navHidden">
          <a onClick={divSelected} name={1} className="navA" href="#projectsA">projects</a>
          <a onClick={divSelected} name={2} className="navA" href="#aboutMeA">about me</a>
          <a onClick={divSelected} name={4} className="navA" href="#skillsA">skills</a>
          <a onClick={divSelected} name={3} className="navA" href="#mapA">map</a>
          <a onClick={divSelected} name={5} className="navA" href="#contactA">contact</a>
        </div>

      )
    } else {
      return <div></div>
    }
  }
  const openMenu = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }
  const nav = (width) => {

    if (orientation !== 0 || window.innerWidth > 450) {
      return (
        <div className="nav">
          <a onClick={divSelected} name={1} className="navA" href="#projectsA">projects</a>
          <a onClick={divSelected} name={2} className="navA" href="#aboutMeA">about me</a>
          <a onClick={divSelected} name={4} className="navA" href="#skillsA">skills</a>
          <a onClick={divSelected} name={3} className="navA" href="#mapA">map</a>
          <a onClick={divSelected} name={5} className="navA" href="#contactA">contact</a>
        </div>
      )

    } else {
      return (
        <div className="hamburgerNav">
          <Hamburger className="hamburger" onClick={openMenu} />
          <div className="hamburgerPlaceholder"></div>
          {menu()}
        </div>

      )

    }
  }



  if (error) {
    return <div><h4>{error}</h4></div>
  } if (pageVars) {
    return (
      <div className="App">
        <div className="head">
          <h1>{pageVars.home.name}</h1>
          {nav(window.innerWidth)}
        </div>
        <div className="gridContainer">
          {divs}
        </div>
      </div>
    );
  } else {
    return (
      <div>loading</div>
    )
  }

}

export default App;
