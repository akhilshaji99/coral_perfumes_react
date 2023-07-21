import BreadCrumps from "./blocks/BreadCrumps";
import FilterSidebar from "./blocks/FilterSidebar";
import ShopMain from "./blocks/ShopMain";

function Index() {
  return (
    <>
      <main>
        <div className="container-fluid">
          <BreadCrumps />
          <div className="row gx-10">
            <FilterSidebar />
            <ShopMain/>
          </div>
        </div>
      </main>
    </>
  );
}
export default Index;
