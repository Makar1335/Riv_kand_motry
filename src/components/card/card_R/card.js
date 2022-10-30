import Rick from '../../../img/Rick.png';
import './card.css';

function Card_R() {
    return (
        <div className="char_card">
            <div className='imgR_M'>
                <img src={Rick}></img>
            </div>
            <div className="c_card">
            <p className="card_p">Rick Smith</p>
            </div>
        </div>
    );
}

export default Card_R;
