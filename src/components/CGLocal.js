const CGlocal = ({ isLoggedIn }) => {

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


    let cardsArray = localStorage.getItem('mycards')
    ? JSON.parse(localStorage.getItem('mycards'))
    : []

    let storedcardsArray = localStorage.getItem('storedcards')
        ? JSON.parse(localStorage.getItem('storedcards'))
        : []

    const saveToDeck = (id,name,type,rarity,img) => {
        console.log();
        const savedcard = {id,name,type,rarity,img}
        cardsArray.push(savedcard)
        localStorage.setItem('mycards', JSON.stringify(cardsArray))
    }

    
    return(
        isLoggedIn ? (
            <section className="cardss" >
            {storedcardsArray.map(card => (
                <div className= "card" key={card.id}>
                    Név: {card.name} <br />
                    Típus: {card.type} <br />
                    Gyakoriság: {card.rarity} <br />
                <img src={card.img} alt='' ></img>
                <input className="button" type="button" value ="Megvan" onClick={() => {saveToDeck(card.id,card.name,card.type,card.rarity,card.img) }}></input>
                </div>
            ))}
        </section>
        ) : (
            <h1>Kérlek lépj be!</h1>
        )
    )



}

export default CGlocal;