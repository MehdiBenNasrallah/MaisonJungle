import { useState } from "react";
import "./ShoppingList.css";
import { plantList } from "../../data/plantList";
import Categories from "../categories/Categories";
import PlantItem from "../plantItem/PlantItem";
import CareScale from "../careScale/CareScale";

function ShoppingList(props) {
  const [activeCategory, setActiveCategory] = useState("");

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map((plant) =>
          !activeCategory || plant.category == activeCategory ? (
            <li key={plant.id}>
              <PlantItem
                cover={plant.cover}
                name={plant.name}
                price={plant.price}
              >
                <CareScale careType="water" scaleValue={plant.water} />
                <CareScale careType="light" scaleValue={plant.light} />
                <button
                  onClick={() => props.addToCart(plant.name, plant.price)}
                >
                  Ajouter
                </button>
              </PlantItem>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
