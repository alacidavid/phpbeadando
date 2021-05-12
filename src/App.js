import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Collection from './components/Collection';
import CGLocal from './components/CGLocal'
import CreateCard from './CreateCard'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cards, setCards] = useState([])


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1 TO 151] supertype:pokémon`)
      console.log(result.data.data)
      setCards(result.data.data)
    }
    fetchItems()
  }, []);

  return (

    <Router>

      <div className="container">

        <Header />
        <Login isLoggedIn={isLoggedIn} cards={cards} />
        <Switch>
          <Route path="/collection">
            <Collection isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/cards">
            <CGLocal isLoggedin={isLoggedIn} />
          </Route>
          <Route path="/create">
            <CreateCard isLoggedin={isLoggedIn} />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
