import { useEffect, useState } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import "./style.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [dataLoading, setIsDataLoading] = useState(false);
  const [clickedCategories, setClickedCategories] = useState([]);

  useEffect(() => {
    setIsDataLoading(true);
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((response) => response.json())
      .then((data) => {
        const { status, message, error } = data;

        if (status !== '200' && message) throw Error (error);

        setError(null);
        setCategories(data);
      })
      .catch(setError)
      .finally(() => setIsDataLoading(false));
  }, []);

  return (
    <>
      <Header />
      <Categories categories={categories} clickedCategories={clickedCategories} setClickedCategories={setClickedCategories} dataLoading={dataLoading} error={error} />
    </>
  );
}

export default App;
