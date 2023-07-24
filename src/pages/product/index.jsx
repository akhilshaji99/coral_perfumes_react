import { useState } from "react";
import BreadCrumps from "./blocks/BreadCrumps";
import FilterSidebar from "./blocks/FilterSidebar";
import ProductMain from "./blocks/ProductMain";

function Index() {
  const [filterArray, setFilterArray] = useState([]);
  //Creating filter array
  const checkCategoryFilter = (checkedValue, attribute) => {
    // Create a copy of the current filterArray state
    const updatedFilterArray = { ...filterArray };
    if (!updatedFilterArray[attribute]) {
      updatedFilterArray[attribute] = [];
    }
    if (updatedFilterArray[attribute].includes(checkedValue)) {
      const indexToRemove = updatedFilterArray[attribute].indexOf(checkedValue);
      updatedFilterArray[attribute].splice(indexToRemove, 1);
      if (updatedFilterArray[attribute].length <= 0) {
        delete updatedFilterArray[attribute];
      }
    } else {
      updatedFilterArray[attribute].push(checkedValue);
    }
    // Update the state with the new filterArray
    setFilterArray(updatedFilterArray);
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
