import Sidebar from "../SideBar/SideBar";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({handleCardClick, clothingArray}) =>{

     return (
        <div className="clothes-section">
            <div className="clothes-section__buttons">
                <p>Your Itmes</p>
                <button className="clothes-section__add-item-btn" >+ Add New</button>
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