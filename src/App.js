import React, {useState, useEffect} from 'react'
import './App.css'

import {IoIosArrowDown} from "react-icons/io";
import {IoIosArrowUp} from "react-icons/io";


const url = 'https://forbes400.herokuapp.com/api/forbes400/getAllBillionaires';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true)
  const [showMore, setShowMore] = useState(false)

  const fetchPeople = async () => {
    const response = await fetch(url)
    const people = await response.json()
    setPeople(people);
    setLoading(false)
    console.log(people)
  }

  useEffect(()=>{
    fetchPeople();
  },[]);

  if(loading){
    return(
      <h2>loading</h2>
    )
  }

  return (

    <>
      <table className='forbes__table'>

                <thead>
                  <tr>
                    <th>RANK</th>
                    <th>NAME</th>
                    <th>NET WORTH</th>
                    <th>COUNTRY / TERRITORY</th>
                    <th>SOURCE</th>
                    <th>INDUSTRY</th>
                  </tr>
                </thead>
                

      {people.map((item)=>{
        const {person, rank, source,personName,finalWorth, industries, squareImage, countryOfCitizenship, bios} = item
        return(
          <>
            
                <tbody>
                  <tr>
                    <td>{rank}.</td>
                    <td>{personName}</td>
                    <td>${finalWorth} B</td>
                    <td>{countryOfCitizenship}</td>
                    <td>{source}</td>
                    <td>{industries}</td>
                    <td><button onClick={()=>setShowMore(!showMore)}>
                          btn
                      </button></td>
                  </tr>
                </tbody>
                {showMore &&
                <section>
                  <img src={squareImage} alt="" />
                  <h3>{bios}</h3>
                </section>
                
                }
            
          </>
        )

      })}
      </table>
    </>
  )
}


export default App
