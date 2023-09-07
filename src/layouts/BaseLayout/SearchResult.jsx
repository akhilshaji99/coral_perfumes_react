import { useNavigate } from "react-router-dom";
import deviceImageRender from "../../utils/deviceImageRender";
function SearchResult({ setResult,result,setQuery}) {
  const navigate = useNavigate();
  const closeModal = ()=>{
    // setResults([])
    setResult([])
  }
  return (
    <>
      <div class="row"  style={{ "backgroundColor": "#FFFFFF" ,"position":"fixed" ,"z-index":"99","width":"700px","z-index": 1 }}>
        <div class="col">
          {result.data?.length > 0 && (
            <div className="" style={{ display: "block" }}>
              {result?.data?.map((result, index) => (
                <a
                  key={1}
                  className="list-group-item list-group-item-action"
                    onClick={() => {
                      closeModal();
                      navigate("/" + result.link);
                      setQuery(result.title)
                      // setQuery(result);
                    }}
                >
                  {result.title} {result.count}
                </a>
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
             >
               <div className="col-5 col-md-5 col-lg-5">
                 <div className="d-flex mini-cart-img">
                   <img
                     src={deviceImageRender(
                      product?.product_listing_image
                     )}
                     alt="Ecommerce"
                     className="icon-shape icon-xxl"
                   />
                 </div>
               </div>
               <div className="col-7 col-md-7 col-lg-7">
                 <h6 className="product-name-cart mb-3">
                   {product?.name}
                 </h6>
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
