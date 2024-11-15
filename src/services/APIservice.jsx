import axios from "axios";

const APIurl = "https://api.magicthegathering.io/v1/cards";

const getAllCards = async () => {
    const response = await axios.get(APIurl);
    const cards = response.data.cards;
    console.log(cards);
    return cards;
}

export {
    getAllCards
}