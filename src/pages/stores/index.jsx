import { useEffect, useState } from "react";
import deviceImageRender from "../../utils/deviceImageRender";
import getStores from "./js/getStores";
import getEmirates from "../checkout/js/getEmiratesList";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
// Import your images
import img01 from "../../assets/custom/images/visit-img1.webp";

function Index() {
  const [stores, setStores] = useState([]);
  const [emirates, setEmirates] = useState([]);

  useEffect(() => {
    getStores().then((response) => {
      if (response?.data) {
        setStores(response?.data?.data);
      }
    });
    getEmirates().then((response) => {
      if (response?.data) {
        setEmirates(response?.data);
      }
    });
  }, []);

  useEffect(() => {
    renderDropDownBox();
  }, []);

  const renderDropDownBox = () => {
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
                    and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
                  and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  };
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
              except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
            then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  return (
    <div className="page-new">
      <div className="container-new">
        <div className="choose-row">
          <div className="visit-tittle">
            <h1>Visit us </h1>
          </div>
          <div className="choose-emirates">
            <div className=" custom-select">
              <form action="#">
                <select
                  id="Emirates"
                  style={{ cursor: "pointer !important", borderRadius: 0 }}
                >
                  <option disabled="" selected="">
                    Choose Emirates{" "}
                  </option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Sharjah">Sharjah</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="visit-section">
        <div className="container-new">
          {/*-row 1*/}
          {stores?.map((store, index) => {
            return (
              <div className={`${index % 2 === 0 ? "visit-row " : ""}`}>
                <>
                  {index % 2}
                  <div
                    className={`viisit-img ${index % 2 !== 0 ? "t-gap" : ""}`}
                    key={index}
                  >
                    <img src={img01} alt="" />
                  </div>
                  <div
                    className={`visit-text ${index % 2 !== 0 ? "t-gap" : ""}`}
                  >
                    <div>
                      {" "}
                      <h2>{store?.store_name} </h2>
                      <p>{store?.store_address}</p>
                      <p>{store?.store_location}</p>
                      <a href="#">VISIT US</a>
                    </div>
                  </div>
                </>
              </div>
            );
          })}

          {/*-row 2*/}
        </div>
      </section>
    </div>
  );
}
export default Index;
