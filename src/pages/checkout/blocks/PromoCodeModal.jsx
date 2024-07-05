// import $ from "jquery";
// import React, { useEffect, useState } from "react";
// import getPromoCodes from "../js/getPromoCodes";
// import UsePromoCode from "../js/usePromoCode";
// import { Alert } from "bootstrap";
// function PromoCodeModal({
//   showPrmoCodeFlag,
//   setShowPrmoCodeFlag,
//   setPromoCode,
//   fetchCheckoutApi = null
// }) {
//   const [promoCodes, setPromoCodes] = useState([]);

//   useEffect(() => {
//     if (showPrmoCodeFlag) {
//       getPromoCodes().then((response) => {
//         if (response?.data) {
//           setPromoCodes(response?.data);
//         }
//       });
//     }
//   }, [showPrmoCodeFlag]);

//   const applyPromoCode = (promo_id, code) => {
//     setPromoCode(code);
//     UsePromoCode(promo_id,null).then((response) => {
//       setShowPrmoCodeFlag(false);
//       if(fetchCheckoutApi != null){
//       fetchCheckoutApi()
//       }
//       $("#promocodeModal").toggle();
//       $("#promocodeModal").toggleClass("modal modal fade");
//       $("#promocodeModal").hide();
//     });
//   };

//   const handleModalClose = () => {
//     setShowPrmoCodeFlag(false);
//     $("#promocodeModal").toggle();
//     $("#promocodeModal").toggleClass("modal modal fade");
//     $("#promocodeModal").hide();
//   };

//   return (
//     <>
//       <div
//         className="modal fade promo-modal"
//         id="promocodeModal"
//         tabIndex={-1}
//         aria-labelledby="promocodeModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered ">
//           <div className="modal-content">
//             <h1 className="text-center " id="promocodeModalLabel">
//               PROMO CODES
//             </h1>
//             <button
//               type="button"
//               className="btn-close"
//               // data-bs-dismiss="modal"
//               // aria-label="Close"
//               onClick={handleModalClose}
//             />
//             <div className="modal-body">
//               {promoCodes?.map((code, index) => {
//                 return (
//                   <div className="row" key={index}>
//                     {/* col */}
//                     {/* form */}
//                     <div className="card promo-card">
//                       <div className="row align-items-center">
//                         <div className="col-md-12">
//                           <div className="card-body">
//                             <div className="row align-items-center mb-4">
//                               <div className="col-md-8 col-8">
//                                 <h2>CODE: {code.code}</h2>
//                               </div>
//                               <div className="col-md-4 col-4 px-0 text-end">
//                                 <button
//                                   className="btn btn-dark  validate w-100"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     applyPromoCode(code.id, code.code);
//                                   }}
//                                 >
//                                   Apply
//                                 </button>{" "}
//                               </div>
//                             </div>
//                             <div className="row">
//                               <p>{code.display_message}</p>
//                             </div>
//                             <div className="row">
//                               <a href="" style={{ color: "black" }}>
//                                 Terms & Conditions
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default PromoCodeModal;

import React, { useEffect, useState } from "react";
import $ from "jquery";
import getPromoCodes from "../js/getPromoCodes";
import UsePromoCode from "../js/usePromoCode";
import BogoPromoModal from "./BogoPromoModel";
import { Alert } from "bootstrap";

function PromoCodeModal({
  showPrmoCodeFlag,
  setShowPrmoCodeFlag,
  setPromoCode,
  fetchCheckoutApi = null,
  cartFetchFunctionCall
}) {
  const [promoCodes, setPromoCodes] = useState([]);
  const [showBogoModal, setShowBogoModal] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (showPrmoCodeFlag) {
      fetchPromoCodes();
    }
  }, [showPrmoCodeFlag]);

  const fetchPromoCodes = async () => {
    try {
      getPromoCodes().then((response) => {
        if (response?.data) {
          console.log('promocodes:', response);
          setPromoCodes(response?.data);
        }
      });
    } catch (error) {
      console.error("Failed to fetch promo codes:", error);
    }
  };

  const applyPromoCode = (promo_id, code, discount_value_type) => {
    setPromoCode(code);
    UsePromoCode(promo_id,null).then((response) => {
      if (discount_value_type == 6 && response.data.status) {
        const giveaway_product = promoCodes.find(promo => promo.id === promo_id && promo.giveaway_products);
        if (giveaway_product) {
          console.log('pro:', giveaway_product);
          setProducts(giveaway_product.giveaway_products);
        }
        setShowBogoModal(true);
      }
      setShowPrmoCodeFlag(false);
      if(fetchCheckoutApi != null){
      fetchCheckoutApi()
      }
      $("#promocodeModal").toggle();
      $("#promocodeModal").toggleClass("modal modal fade");
      $("#promocodeModal").hide();
    });
  };

  const handleModalClose = () => {
    setShowPrmoCodeFlag(false);
    $("#promocodeModal").toggle();
    $("#promocodeModal").toggleClass("modal modal fade");
    $("#promocodeModal").hide();
  };


  const handleCloseBogoModal = () => {
    setShowBogoModal(false);
  };


  return (
    <>
      <div
        className="modal fade promo-modal"
        id="promocodeModal"
        tabIndex={-1}
        aria-labelledby="promocodeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="promocodeModalLabel">PROMO CODES</h5>
              <button type="button" className="btn-close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              {promoCodes?.map((code, index) => (
                <div className="row" key={index}>
                  <div className="card promo-card">
                    <div className="row align-items-center">
                      <div className="col-md-12">
                        <div className="card-body">
                          <div className="row align-items-center mb-4">
                            <div className="col-md-8 col-8">
                              <h2>CODE: {code.code}</h2>
                            </div>
                            <div className="col-md-4 col-4 px-0 text-end">
                              <button
                                className="btn btn-dark validate w-100"
                                onClick={(e) => {
                                  e.preventDefault();
                                  applyPromoCode(code.id, code.code, code.discount_value_type);
                                }}
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            <p>{code.display_message}</p>
                          </div>
                          <div className="row">
                            <a href="" style={{ color: "black" }}>Terms & Conditions</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BogoPromoModal
        showBogoModal={showBogoModal}
        handleCloseBogoModal={handleCloseBogoModal}
        products={products}
        setShowPrmoCodeFlag={setShowPrmoCodeFlag}
        cartFetchFunctionCall={cartFetchFunctionCall}
        
        
      />
    </>
  );
}

export default PromoCodeModal;
