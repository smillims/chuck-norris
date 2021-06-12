function CategoriesLists({ categories, clickedCategories, setClickedCategories }) {
  return (
    <ul
      onClick={(event) => {
        if (event.target.tagName === "UL") return;
        setClickedCategories([...clickedCategories, event.target.textContent]);
      }}
    >
      {categories.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <li>random</li>
    </ul>
  );
}

export default CategoriesLists;
