import { useNavigate } from "react-router-dom";
import deviceImageRender from "../../utils/deviceImageRender";
function SearchResult({ setResult, result, setQuery }) {
  const navigate = useNavigate();
  const closeModal = () => {
    // setResults([])
    setResult([]);
  };
  return (
    <>
      <div
        class="row"
        style={{
          backgroundColor: "#FFFFFF",
          position: "fixed",
          "z-index": "99",
          width: "700px",
          "z-index": 1,
        }}
      >
        <div class="row">
          {result?.top_blocks?.map((block, index) => (
            <div
              className="col-auto border m-2 rounded"
              onClick={() => {
                closeModal();
                navigate("/" + block.link);
                setQuery(block.title);
                // setQuery(result);
              }}
            >
              {block.title}
            </div>
          ))}
        </div>
        <div class="col-lg-6 col-12 mb-4 mb-lg-0">
          {result.data?.length > 0 && (
            <div className="col-8" style={{ display: "block" }}>
              <h5 className="pt-4 font-weight-bold">SUGGESTIONS</h5>
              {result?.data?.map((result, index) => (
                <div class="row">
                  <div class="col-8">
                    <a
                      key={index}
                      className="col-12 link-dark"
                      onClick={() => {
                        closeModal();
                        navigate("/" + result.link);
                        setQuery(result.title);
                        // setQuery(result);
                      }}
                    >
                      {result.title}
                    </a>
                  </div>
                  <div class="col text-right">
                    <h6 className="text-right">{result.count}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div class="col">
          {result.products?.length > 0 && (
            <div className="" style={{ display: "block" }}>
              <h5 className="pt-4 font-weight-bold">PRODUCTS</h5>
              {result?.products?.map((product, index) => (
                <div
                  className="row align-items-center py-2 "
                  key={index}
                  onClick={() => {
                    closeModal();
                    navigate(`/product-details/?slug=${product?.slug}`);
                    setQuery(product.name);
                    // setQuery(result);
                  }}
                >
                  <div className="col-5 col-md-5 col-lg-5">
                    <div className="d-flex mini-cart-img">
                      <img
                        src={deviceImageRender(product?.product_listing_image)}
                        alt="Ecommerce"
                        className="icon-shape icon-xxl"
                      />
                    </div>
                  </div>
                  <div className="col-7 col-md-7 col-lg-7">
                    <h6 className="product-name-cart mb-3">{product?.name}</h6>
                    <div className="row mb-3">
                      <div className="col-md-5 price-minicart">
                        aed {product?.price_amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default SearchResult;
