import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchResult({ results }) {
  const navigate = useNavigate();
  const closeModal = ()=>{
    // setResults([])
  }
  return (
    <>
      <div class="row" style={{"position":"fixed" ,"z-index":"99","width":"1000px"}}>
        <div class="col">
          {results.data?.length > 0 && (
            <div className="list-group" style={{ display: "block" }}>
              {results?.data?.map((result, index) => (
                <a
                  key={1}
                  className="list-group-item list-group-item-action"
                    onClick={() => {
                      closeModal();
                      navigate("/" + result.link);
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
        {results.products?.length > 0 && (
           <div className="list-group" style={{ display: "block" }}>
           {results?.products?.map((result, index) => (
             <a
               key={1}
               className="list-group-item list-group-item-action"
               //   onClick={() => {
               //     setQuery(result);
               //     setResults([]);
               //   }}
             >
               {result.title}
             </a>
           ))}
         </div>
          
            )}
        </div>
      </div>
    </>
  );
}
export default SearchResult;
