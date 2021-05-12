const Collection = ({isLoggedIn}) => {

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
    
    
    localStorage.setItem('mycards', JSON.stringify(cardsArray))
 
    const removeFromDeck = (id,name,type,rarity,img) => {
        var getLocalStorage = JSON.parse(localStorage.getItem("mycards"));
        for(var i = 0;  i < getLocalStorage.length; i++){
            const newcard = {id,name,type,rarity,img}
            console.log(newcard)
            var newStorage = getLocalStorage.filter(cardsArray => cardsArray.id !== id)
            localStorage.setItem('mycards', JSON.stringify(newStorage));
            console.log(newStorage)
            alert('lap eltávolítva a gyűjteményedből')
        }
        window.location.reload(false)
    }
   
    
    return(
        isLoggedIn ? (
            <section className="cardss" >
            {cardsArray.map(card => (
                <div className= "card" key={card.id}>
                    Név: {card.name} <br />
                    Típus: {card.types} <br />
                    Gyakoriság: {card.rarity} <br />
                <img src={card.img} alt='' ></img>
                <input className="button" type="button" value ="Nincs meg" onClick={() => {removeFromDeck(card.id,card.name,card.type,card.rarity,card.img) }}></input>
                </div>
            ))}
        </section>
        ) : (
            <h1>Kérlek lépj be!</h1>
        )
    )
}

export default Collection;