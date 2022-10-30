import './characters.css';
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import Card_M from '../../components/card/card_M/card';
import Card_R from '../../components/card/card_R/card';

function Char() {
    return(
        <div>
            <Header></Header>
            <Search></Search>
            <div className='Card'>
                <Card_R/>
                <Card_R/>
                <Card_R/>
                <Card_R/>
                <Card_M/>
                <Card_M/>
                <Card_M/>
                <Card_M/>
                <Card_R/>
                <Card_R/>
                <Card_R/>
                <Card_R/>
            </div>
        </div>
    );
}

export default Char;