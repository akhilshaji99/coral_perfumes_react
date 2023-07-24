import { useState } from "react";
import BreadCrumps from "./blocks/BreadCrumps";
import FilterSidebar from "./blocks/FilterSidebar";
import ProductMain from "./blocks/ProductMain";

function Index() {
  const [filterArray, setFilterArray] = useState([]);
  //Creating filter array
  const checkCategoryFilter = (checkedValue, attribute) => {
    if (!Object.keys(filterArray).includes(attribute)) {
      filterArray[attribute] = [];
    }
    if (filterArray[attribute].includes(checkedValue)) {
      const indexToRemove = filterArray[attribute].indexOf(checkedValue);
      filterArray[attribute].splice(indexToRemove, 1);
      if (filterArray[attribute].length <= 0) {
        delete filterArray[attribute];
      }
    } else {
      filterArray[attribute].push(checkedValue);
    }
    setFilterArray(filterArray);
  };
  //#End of filter array
  return (
    <>
      <main>
        <div className="container-fluid">
          <BreadCrumps />
          <div className="row gx-10">
            <FilterSidebar checkCategoryFilter={checkCategoryFilter} />
            <ProductMain filterArray={filterArray} />
          </div>
        </div>
      </main>
    </>
  );
}
export default Index;
