import { useEffect, useState } from "react";
import getAdvice from "../../data/getAdvice";

function ShowAdvice({ clickedCategories }) {
  const [advice, setAdvice] = useState("");

  let lastElement = clickedCategories[clickedCategories.length - 1];

  useEffect(() => {
    if (clickedCategories.length !== 0) {
      fetch(getAdvice(lastElement))
        .then((response) => response.json())
        .then((data) => setAdvice(data.value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedCategories]);

  console.log(clickedCategories)

  if (!advice) {
    return <p>Please choose something</p>;
  }

  return (
    <>
      <p>{advice}</p>
    </>
  );
}

export default ShowAdvice;
