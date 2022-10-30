// import './search.css';
import './search.scss';

function Search() {
    return(
        <div className="s_div">
            <form className="s_form">
                <p className="s_ptext">Find a character by name:</p>
                <input className="s_input" type="text" placeholder="Enter name"></input>
                <input className="s_button" type="submit" value="FIND"></input>
            </form>
        </div>
    );
}

export default Search;