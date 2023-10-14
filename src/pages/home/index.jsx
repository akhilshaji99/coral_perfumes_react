import request from "../../utils/request";
import { useEffect, useState, Suspense, lazy } from "react";
import Placeholder from "../common/PlaceHolder";
import getUserToken from "../../utils/userToken";
import { changeFooterDatas } from "../../redux/footer/footerSlice";
import { changeApiCallStatus } from "../../redux/footer/footerSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";

const MainBanner = lazy(() => import("./blocks/MainBanner"));
const Deals = lazy(() => import("./blocks/Deals"));
const TopCategories = lazy(() => import("./blocks/TopCategories"));
const ShopMore = lazy(() => import("./blocks/ShopMore"));
const AdsBlock = lazy(() => import("./blocks/AdsBlock"));
const ShopPreferences = lazy(() => import("./blocks/ShopPreferences"));
const FlashSale = lazy(() => import("./blocks/FlashSale"));
const WalletBanner = lazy(() => import("./blocks/WalletBanner"));
const Brands = lazy(() => import("./blocks/Brands"));
const AdsBanner = lazy(() => import("./blocks/AdsBanner"));
const CategoryTop = lazy(() => import("./blocks/CategoryTop"));
const BannerFlashSale = lazy(() => import("./blocks/BannerFlashSale"));
const ProductCarousel = lazy(() => import("./blocks/ProductCarousel"));

function Index() {
  const dispatch = useDispatch();

  const [homeContent, setHomeContent] = useState([]);
  const [homeComponents, setHomeComponents] = useState([]);
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      dispatch(changeApiCallStatus(false)); // Change api call status
      const response = await request.post("get_home_content/", bodyFormData);
      if (response.data) {
        const mainKeys = Object.entries(response.data).map(([key]) => key);
        dispatch(changeFooterDatas(response?.data?.footer_content)); //Add footer datas to redux
        dispatch(changeApiCallStatus(true)); // Change api call status

        setHomeComponents(mainKeys);
        setHomeContent(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <main style={{ minHeight: "500px" }}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
          <img src="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        </Carousel>
        {homeComponents?.map((component, index) => {
          return (
            <>
              {/* <section className="home-banner"> */}
              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP2" ? (
                <>
                  <Suspense fallback={<Placeholder />}>
                    <MainBanner
                      componentDatas={homeContent[component][0]}
                      exclusive_deals={homeContent["exclusive_deals"]}
                    />
                  </Suspense>
                </>
              ) : null}
            </>
          );
        })}
        <div className="home-wrapper">
          {homeComponents?.map((component, index) => {
            return (
              <>
                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP3" ? (
                  <Suspense fallback={<Placeholder />}>
                    {/* <div className="category-top-div"> */}
                    <CategoryTop componentDatas={homeContent[component][0]} />
                    {/* </div> */}
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP5" ? (
                  <Suspense fallback={<Placeholder />}>
                    {/* <div className="category-top-div2"> */}
                    <BannerFlashSale
                      componentDatas={homeContent[component][0]}
                    />
                    {/* </div> */}
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP6" ? (
                  <Suspense fallback={<Placeholder />}>
                    {/* <div className="category-top-div3"> */}
                    <FlashSale componentDatas={homeContent[component][0]} />
                    {/* </div> */}
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP9" ? (
                  <Suspense fallback={<Placeholder />}>
                    <ProductCarousel
                      componentDatas={homeContent[component][0]}
                    />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP7" ? (
                  <Suspense fallback={<Placeholder />}>
                    {/* <div className="category-top-div4"> */}
                    <WalletBanner componentDatas={homeContent[component][0]} />
                    {/* </div> */}
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP8" ? (
                  <Suspense fallback={<Placeholder />}>
                    <Deals componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP11" ? (
                  <Suspense fallback={<Placeholder />}>
                    <TopCategories componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP12" ? (
                  <Suspense fallback={<Placeholder />}>
                    <AdsBanner componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP13" ? (
                  <Suspense fallback={<Placeholder />}>
                    <ShopPreferences
                      componentDatas={homeContent[component][0]}
                    />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP14" ? (
                  <Suspense fallback={<Placeholder />}>
                    <Brands componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP15" ? (
                  <Suspense fallback={<Placeholder />}>
                    <ShopMore componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}

                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP10" ? (
                  <Suspense fallback={<Placeholder />}>
                    <AdsBlock componentDatas={homeContent[component][0]} />
                  </Suspense>
                ) : null}
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}
export default Index;
