import Sun from "../../assets/sun.svg";
import Water from "../../assets/water.svg";
import { useRef } from "react";

const quantityLabel = {
  1: "peu",
  2: "modérément",
  3: "beaucoup",
};

export default function CareScale({ scaleValue, careType }) {
  const dialog = useRef();
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );
  return (
    <>
      <dialog className="result-modal" ref={dialog}>
        <p>{`Cette plante requiert ${quantityLabel[scaleValue]} ${
          careType === "light" ? "de lumière" : "d'arrosage"
        }`}</p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
      <div onClick={() => dialog.current.showModal()}>
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span>
          ) : null
        )}
      </div>
    </>
  );
}
