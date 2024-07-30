import Sidebar from "../SideBar/SideBar";
import { defaultClothingItems } from "../../utils/constants";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({handleCardClick, handleAddClick, clothingArray}) =>{

     return (
        <div className="clothes-section">
            <div className="clothes-section__buttons">
                <p>Your Itmes</p>
                <button onClick={handleAddClick}
        type="button" className="clothes-section__add-item-btn" >+ Add New</button>
            </div>
            <ul className="clothes-section__items">
          {clothingArray
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
        </div>


     );


}



export default ClothesSection;