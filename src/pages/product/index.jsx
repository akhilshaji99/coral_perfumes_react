import { useState } from "react";
import BreadCrumps from "../common/BreadCrumps";
import FilterSidebar from "./blocks/FilterSidebar";
import ProductMain from "./blocks/ProductMain";

function Index() {
  const [filterArray, setFilterArray] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceRangeFilter, setPriceRangeFilter] = useState({});
  const [breadCrumbDatas, setBreadCrumbDatas] = useState([]);

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

  const passingDataToParent = (minValue, maxValue) => {
    setMinPrice(minValue);
    setMaxPrice(maxValue);
  };

  const passingDateRangeToParent = (priceRange) => {
    setPriceRangeFilter(priceRange);
  };

  const unselectAll = (filter_name) => {
    const updatedFilterArray = { ...filterArray };
    delete updatedFilterArray[filter_name];
    setFilterArray(updatedFilterArray);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const passPageToParent = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="d-none d-sm-block">
            <BreadCrumps breadCrumbDatas={breadCrumbDatas} />
          </div>
          <div className="row gx-10">
            <div className="col-lg-3 col-md-4 product-filter-sidebar">
              <FilterSidebar
                checkCategoryFilter={checkCategoryFilter}
                minPrice={minPrice}
                maxPrice={maxPrice}
                passingDateRangeToParent={passingDateRangeToParent}
                filterArray={filterArray}
                unselectAll={unselectAll}
                currentPage={currentPage}
              />
            </div>
            <div className="col-lg-9 col-md-12 brands-sub">
              <ProductMain
                filterArray={filterArray}
                passingDataToParent={passingDataToParent}
                priceRangeFilter={priceRangeFilter}
                passPageToParent={passPageToParent}
                setBreadCrumbDatas={setBreadCrumbDatas}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Index;
