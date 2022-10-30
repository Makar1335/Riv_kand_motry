import Morty from '../../../img/Morty.png';
import './card.css';

function Card_M() {
    return (
        <div className="char_card">
            <div className='imgR_M'>
                <img src={Morty}></img>
            </div>
            <div className="c_card">
                <p className="card_p">Morty Smith</p>
            </div>
        </div>
    );
}

export default Card_M;