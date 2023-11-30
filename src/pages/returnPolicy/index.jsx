import { useEffect, useState } from "react";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import $ from "jquery";
import returnPolicy from "./js/getReturnPolicy";
import BreadCrumps from "../common/BreadCrumps";

function Index() {
  const [content, setContent] = useState("<></>");
  const [title, setTitle] = useState("");

  useEffect(() => {
    returnPolicy().then((response) => {
      console.log("faq", response);

      if (response?.data) {
        console.log("response?.data?.data", response?.data?.data);
        setContent(response?.data?.data?.content);
        setTitle(response?.data?.data?.title);
      }
    });
  }, []);
  useEffect(() => {
    accordWithPage();
  }, [content]);

  var accordWithPage = function () {
    var faqDiv = $("#faq-links div");
    $(function () {
      faqDiv.click(function () {
        var hideSec = "faq-hide";
        var $this = $(this),
          $id = $this.attr("id"),
          $className =
            "." +
            $(".about-" + $id)
              .attr("className")
              .replace(hideSec, "");
        $("#faq-wrapper").addClass(hideSec);
        $(".about-" + $id).removeClass(hideSec);
        $("div[className*=about]").not($className).addClass(hideSec);
      });
    });
    $(function () {
      var select = "faq-selected";
      faqDiv.click(function () {
        if ($(this).hasClass(select)) {
          $(this).removeClass(select);
        } else {
          $("#faq-links .faq-selected").removeClass(select);
          $(this).addClass(select);
        }
      }); //faq link selected
    });
    //Accordion
    $(function () {
      var expand = "expanded";
      var content = $(".faq-content");
      //FAQ Accordion
      $(".faq-accordion > li > a").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass(expand)) {
          $(this).removeClass(expand);
          //          $('.faq-accordion > li > a > div').not(this).css('opacity', '1');//returns li back to normal state
          $(this).parent().children("ul").stop(true, true).slideUp();
        } else {
          //            $('.faq-accordion > li > a > div').not(this).css('opacity', '0.5');//dims inactive li
          $(".faq-accordion > li > a.expanded").removeClass(expand);
          $(this).addClass(expand);
          content.filter(":visible").slideUp();
          $(this).parent().children("ul").stop(true, true).slideDown();
        }
      }); //accordion function
      content.hide();
    });
  };
  // accordWithPage();

  return (
    <>
      <div classNameName="page-new">
        <BreadCrumps />
        <div classNameName="container-new">
          <div className="title-page">
            <h1>{title}</h1>
          </div>
          <div id="faq-wrapper" className="about-faq">
            <div className="slide-left">
              <div
                className="faq"
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
