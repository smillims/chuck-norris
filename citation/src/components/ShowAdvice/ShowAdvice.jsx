import { useEffect, useState } from "react";
import getAdvice from "../../data/getAdvice";
import styles from './ShowAdvice.module.css';

function ShowAdvice({ clickedCategories }) {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);

  let lastElement = clickedCategories[clickedCategories.length - 1];

  useEffect(() => {
    setDataLoading(true);
    if (clickedCategories.length !== 0) {
      fetch(getAdvice(lastElement))
        .then((response) => response.json())
        .then((data) => {
          const { status, message } = data;

          if (status !== '200' && message) throw Error(message);

          setError(null)
          setAdvice(data.value);
        })
        .catch(setError)
        .finally(() => setDataLoading(false))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCategories]);

  if (!advice) {
    return <p className={styles.advice}>Please choose your advice from Mr. Chuck's!</p>;
  }

  if (error) {
    return <p className={styles.advice}>{typeof error === 'object' ? error.toString() : error}</p>
  }

  if (dataLoading) {
    return <p className={styles.advice}>Loading...</p>
  }

  return (
    <>
      <p className={styles.advice}>{advice}</p>
    </>
  );
}

export default ShowAdvice;
