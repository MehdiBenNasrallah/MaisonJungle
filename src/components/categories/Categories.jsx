import "./Categories.css";

export default function Categories({ categories, setActiveCategory }) {

  return (
    <div className="lmj-categories">
      <select 
        className="lmj-categories-select"
        onChange={(e) => setActiveCategory((oldValue) => e.target.value)}
      >

        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
