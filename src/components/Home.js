import './Home.css'

import Card from "./Cards/Card";

export default function Home({cards}){
    return (
        <div className="home">
            <ul className="card-list"> 
                {cards ? cards.map(card => <Card/>) : null}
            </ul>
        </div>
    );
}