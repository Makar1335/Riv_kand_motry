class RAMPService {

    _api = 'https://rickandmortyapi.com/api/character';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._api}`)
    }

    getCharacter = (id) => {
        return this.getResource(`${this._api}/${id}`)
    }    
}

export default RAMPService;