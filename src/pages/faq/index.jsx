import { useEffect, useState } from "react";
import "../../assets/custom/css/style-new.css";
import "../../assets/custom/css/responsive.css";
import $ from "jquery";
import getFaq from "./js/getFaq";

function Index() {
  const [faq,setFaq] =  useState("<></>")
  useEffect(() => {
    
    accordWithPage();
    getFaq().then((response) => {
      console.log("faq",response)

      if (response?.data) {
        console.log("response?.data?.data",response?.data?.data)
        setFaq(response?.data?.data);
      }
    });
  }, []);
  var accordWithPage = function() {
    var faqDiv = $('#faq-links div');
    $(function() {
        faqDiv.click(function() {
            var hideSec = 'faq-hide';
            var $this = $(this),
                $id = $this.attr('id'),
                $className = '.' + $('.about-' + $id).attr('className').replace(hideSec, '');
            $('#faq-wrapper').addclassName(hideSec);
            $('.about-' + $id).removeclassName(hideSec);
            $('div[className*=about]').not($className).addclassName(hideSec);
        });
    });
    $(function() {
        var select = 'faq-selected';
        faqDiv.click(function() {
            if ($(this).hasclassName(select)) {
                $(this).removeclassName(select);
            } else {
                $('#faq-links .faq-selected').removeclassName(select);
                $(this).addclassName(select);
            }
        }); //faq link selected
    });
    //Accordion
    $(function() {
        var expand = 'expanded';
        var content = $('.faq-content');
        //FAQ Accordion
        $('.faq-accordion > li > a').click(function(e) {
            e.preventDefault();
            if ($(this).hasclassName(expand)) {
                $(this).removeclassName(expand);
                //          $('.faq-accordion > li > a > div').not(this).css('opacity', '1');//returns li back to normal state
                $(this).parent().children('ul').stop(true, true).slideUp();
            } else {
                //            $('.faq-accordion > li > a > div').not(this).css('opacity', '0.5');//dims inactive li
                $('.faq-accordion > li > a.expanded').removeclassName(expand);
                $(this).addclassName(expand);
                content.filter(":visible").slideUp();
                $(this).parent().children('ul').stop(true, true).slideDown();
            }
        }); //accordion function
        content.hide();
    });
}
// accordWithPage();

  return (
    <>
      <div classNameName="page-new">
            <div classNameName="container-new">
                <div className="title-page">
                    <h1>FREQUENTLY ASKED QUESTIONS </h1>
                </div>
                <div id="faq-wrapper" className="about-faq">
                  
                    <div className="slide-left">
                        <div className="faq"   dangerouslySetInnerHTML={{
                        __html: faq,
                      }}>
                      
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  );
}

export default Index;
