import { useEffect, useState } from "react";
import ShowAdvice from "../ShowAdvice/ShowAdvice";
import CategoriesLists from "../CategoriesLists";
import "./Categories.module.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  //const [isDataLoading, setIsDataLoading] = useState(false);
  const [clickedCategories, setClickedCategories] = useState([]);

  useEffect(() => {
    //**не забыть использовать setIsDataLoading в будущем;
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.length) {
          throw Error(error);
        }
        setCategories(data);
        setError(null);
      })
      .catch(setError);
    //**попробовать реализовать promiseAll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <h3>Categories</h3>
      <CategoriesLists categories={categories} clickedCategories={clickedCategories} setClickedCategories={setClickedCategories} />
      {/*<ul
        onClick={(event) => {
          if (event.target.tagName === "UL") return;
          setClickedCategories([...clickedCategories, event.target.textContent]);
        }}
      >
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li>random</li>
      </ul>*/}
      <ShowAdvice clickedCategories={clickedCategories} />
    </div>
  );
}

export default Categories;
