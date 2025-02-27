import apple from '../../assets/images/apple.jpg'; 
import grapes from '../../assets/images/grapes.jpg'; 
import kiwi from '../../assets/images/kiwi.jpg'; 
import '../Card/Card.css'



const CardData = [
    {
        id: "1", 
        image: apple,
        title: "Apple Gala", 
        price: 10, 
    }, 
    {
        image: grapes,
        id: "2", 
        title: "Niagara Grapes", 
        price: 20, 
    }, 
    {
        image: kiwi,
        id: "3", 
        title: "Hayward Kiwi", 
        price: 30, 
        
    }

]; 

export default CardData; // !!! it was not seen because it has NOT been exported