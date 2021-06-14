import CategoriesLists from "../CategoriesLists";
import ShowAdvice from "../ShowAdvice/ShowAdvice";
import styles from "./Categories.module.css";

function Categories({ categories, clickedCategories, setClickedCategories, dataLoading, error }) {

  if (error) {
    return <p className={styles.status}>{typeof error === 'object' ? error.toString() : error}</p>
  }

  if (dataLoading) {
    return <p className={styles.status}>Loading...</p>;
  }


  return (
    <div className="container">
      <div className={styles.categories}>
        <h2>Categories</h2>
        <CategoriesLists categories={categories} clickedCategories={clickedCategories} setClickedCategories={setClickedCategories} />
        <ShowAdvice clickedCategories={clickedCategories} />
      </div>
    </div>
  );
}

export default Categories;
