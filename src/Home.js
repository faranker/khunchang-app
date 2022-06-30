import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function Home(props) {
  
  return (
    <div className="App container">
        <Startgame />
    </div>
  );
}

function Startgame(props) {
  const [ start, setStart ] = useState(false)
  
  const clicked = () => {
    setStart(true)
  }

  return (
    <div>
      
      {start ? <Playing /> : 
      <div>
        <h1>Press start</h1>
        <button onClick={clicked}>Start</button>
      </div> }
      
    </div>
  )
}

function Playing(props) {
  const [ correc, setCorrec ] = useState(false)
  const [costumes, setCostumes] = useState([])
  const [charactor, setCharactor] = useState('')

  const listCharactor = [
    {
      id: 1,
      name: 'name1'
    },{
      id: 2,
      name: 'name2'
    },{
      id: 3,
      name: 'name3'
    },{
      id: 4,
      name: 'name4'
    },{
      id: 5,
      name: 'name5'
    }
  ]

  const listCostumes = [{
    id: 1,
    pair: 'name1',
    img: 'img1'
  },{
    id: 2,
    pair: 'name2',
    img: 'img2'
  },{
    id: 3,
    pair: 'name3',
    img: 'img3'
  },{
    id: 4,
    pair: 'name4',
    img: 'img4'
  },{
    id: 5,
    pair: 'name5',
    img: 'img5'
  }]

  const shuffleCharactor = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() + Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setCharactor(array[0].name)
  }

  const shuffleCostume = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setCostumes(array)
  }

  useEffect(() => {
    shuffleCostume(listCostumes)
  }, [])

  useEffect(() => {
    shuffleCharactor(listCharactor)
  }, [])

  

  const chooseCostume = (data) => {
    if (data.pair === charactor) {
      console.log('correc !');
      setCorrec(true)
    } else {
      console.log('wrong !');
    }
  }

  const playAgain = () => {
    setCorrec(false)
    shuffleCharactor(listCharactor)
    shuffleCostume(listCostumes)
  }

  return (
    <div>
      { correc ? 
        <>
          <h1>Congrade !</h1>
          <button onClick={playAgain}>Play again</button>
          <button>show detail</button>
        </> :
        <>
          <h1>Choose costumes.</h1>
            <div style={{display: 'flex', width: '100%'}}>
              <div id="charactor">
                <h1>{charactor}</h1>
              </div>
              <div id="costume">
                {costumes.map((item) =>
                  <h1 style={{cursor: 'pointer'}} onClick={() => chooseCostume(item)}>{item.img}</h1>
                )}
              </div>
            </div>
          </>
        }
      
    </div>
  )
}

export default Home;
