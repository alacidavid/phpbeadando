import { useState } from 'react';  
import Navigation from './Navigation';
const Login = ({isLoggedIn,cards}) => {
    
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  
  if (!sessionStorage.getItem('auth-token')) {
    console.log('no auth token set');
        isLoggedIn = false;
  } else {
    const authToken = '123456abcdef';
    if (sessionStorage.getItem('auth-token') === authToken) {
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
} 
  
  const handleUserNameChange = (e) => {
      setUserNameInput(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
  }
  
  const handleLoginSubmit = (e) => {
      //e.preventDefault();
      let hardcodedCred = {
          username: 'admin',
          password: 'admin'
      }
      
      if ((userNameInput === hardcodedCred.username) && (passwordInput === hardcodedCred.password)) {
          const token = '123456abcdef';
          sessionStorage.setItem('auth-token', token);
        
          let cardsArray = localStorage.getItem('mycards')
      ? JSON.parse(localStorage.getItem('mycards'))
      : []
        //ide kellett tennem a localstorage tárolást máshogy nem működött... 
    localStorage.setItem('mycards', JSON.stringify(cardsArray))
    let storedcards = [
      {
        id: '',
        name: '',
        type: '',
        rarity: '',
        img: '',
      }
    ]
    cards.map((card, index) => (
      storedcards[index] = {
        id: card.id,
        name: card.name,
        type: card.types,
        rarity: card.rarity,
        img: card.images.small,
      }
    ))
    localStorage.setItem("storedcards", JSON.stringify(storedcards));
    let storedcardsArray = localStorage.getItem('storedcards')
      ? JSON.parse(localStorage.getItem('storedcards'))
      : []

    console.log(storedcardsArray)


      } else {
          alert('emlékeztető: admin admin');
      }
  }
  
  return (
    !isLoggedIn ? (
      <div className="loginpanel">
          <h2>Login In</h2>
          <form autoComplete="off" onSubmit={handleLoginSubmit}>
              <div >
                  <input
                  type="text"
                  placeholder="Username"
                  value={userNameInput}
                  onChange={handleUserNameChange}
                  />
              </div>
              <div>
                  <input
                  type="password"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                  />
              </div>
              <button type="submit" onCLick={handleLoginSubmit} className="loginBtn">
                  Belépés
              </button>
        </form>
      </div>
      ): (
        <Navigation cards = {cards}/>
      )
  )
  }
export default Login;