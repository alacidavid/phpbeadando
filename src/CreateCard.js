import { useState } from "react";

const CreateCard = ({ isLoggedIn }) => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [rarity, setRarity] = useState('');
    const img = '../img/nemelerheto.png'
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

    const CreateCard = (e) => {
        e.preventDefault();
        const newcard = { id, name, type, rarity, img }
        cardsArray.push(newcard)
        localStorage.setItem('mycards', JSON.stringify(cardsArray))
        alert('Új lap sikeresen hozzáadva')
        setId('')
        setName('')
        setType('')
        setRarity('')
    }


    return (
        isLoggedIn ? (
            <section className="createcards" >

                <form onSubmit={CreateCard} className="card" >
                    ID: <input type="text" value={id} onChange={(e) => setId(e.target.value)}></input> <br />
                    Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input> <br />
                    Típus: <input type="text" value={type} onChange={(e) => setType(e.target.value)}></input> <br />
                    Gyakoriság: <input type="text" value={rarity} onChange={(e) => setRarity(e.target.value)}></input>  <br />
                    <input className='button' type="submit" value="Új kártya"  ></input>
                </form>

            </section>
        ) : (
            <h1>Kérlek lépj be!</h1>
        )
    )



}

export default CreateCard;