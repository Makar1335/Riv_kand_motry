import Logo from '../../img/Logo.png';
import Logo2 from '../../img/Logo2.png';

// import './header.css';
import './header.scss';

function Header() {
    return (
        <div className='header'>
            <div className='nav'>
                <a href='#' className='a_lin'>Riv kand motry portal</a>
                <div className='nav3'>
                    <a href='#' >Characters</a>
                    <a href='#'>Location</a>
                    <a href='#'>Episode</a>
                </div>
            </div>
            <div className='imgLogo'>
                <div className='Logo_P'>
                    <img src={Logo} alt="#"></img>
                    <p className='text'> Rick and Motry <br /> Portal! </p>
                </div>
                <img src={Logo2} alt="#" className='dark'></img>
            </div>
        </div>
    );
}

export default Header;