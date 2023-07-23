import BreadCrumps from "./blocks/BreadCrumps";
import FilterSidebar from "./blocks/FilterSidebar";
import ProductMain from "./blocks/ProductMain";

function Index() {
  return (
    <>
      <main>
        <div className="container-fluid">
          <BreadCrumps />
          <div className="row gx-10">
            <FilterSidebar />
            <ProductMain/>
          </div>
        </div>
      </main>
    </>
  );
}
export default Index;
