import CareScale from "../careScale/CareScale";
import "./PlantItem.css";
export default function PlantItem(props) {
    return (
        <div className={"lmj-plant-item"}>
            <span className="lmj-plant-item-price">{props.price}</span>
            <img
                className="lmj-plant-item-cover"
                src={props.cover}
                alt={`${props.name} cover`}
              />

            {props.name}
            <div>{props.children}</div>
        </div>

    );
}