import request from "../../utils/request";
import { useEffect, useState, Suspense, lazy } from "react";
import Placeholder from "../common/PlaceHolder";
import getUserToken from "../../utils/userToken";
import { changeFooterDatas } from "../../redux/footer/footerSlice";
import { changeApiCallStatus } from "../../redux/footer/footerSlice";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { Seo } from "../../components/Seo";

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
  const [apiLoader, setApiLoader] = useState(true);
  const [metaTags, setMetaTags] = useState({
    title: '',
    meta_description: '',
    meta_keywords: '',
    og_type: '',
    og_title: '',
    og_description: '',
    og_url: '',
    og_image: '',
    og_image_height: '',
    og_image_width: '',
    og_site_name: ''
  });
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    try {
      setApiLoader(true);
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      dispatch(changeApiCallStatus(false)); // Change api call status
      const response = await request.post("get_home_content/", bodyFormData);
      if (response.data?.data) {
        const mainKeys = Object.entries(response.data?.data).map(
          ([key]) => key
        );
        dispatch(changeFooterDatas(response?.data?.data?.footer_content)); //Add footer datas to redux
        dispatch(changeApiCallStatus(true)); // Change api call status

        setHomeComponents(mainKeys);
        setHomeContent(response.data?.data);
        console.log('home:', response);
        
        const {
          title,
          meta_description,
          meta_keywords,
          og_type,
          og_title,
          og_description,
          og_url,
          og_image,
          og_image_height,
          og_image_width,
          og_site_name
        } = response.data?.meta_data;

        setMetaTags({
          title,
          meta_description,
          meta_keywords,
          og_type,
          og_title,
          og_description,
          og_url,
          og_image,
          og_image_height,
          og_image_width,
          og_site_name
        });


        setApiLoader(false);
      }
    } catch (error) {
      setApiLoader(false);
      console.log("error", error);
    }
  };
  return (
    <>
      <Seo {...metaTags} />
      {!apiLoader ? (
        <main style={{ minHeight: "500px" }}>
          {homeComponents?.map((component, index) => {
            return (
              <>
                {/* <section className="home-banner"> */}
                {homeContent[component] &&
                homeContent[component]?.[0]?.component_identifier ===
                  "COMP2" ? (
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
                    "COMP6" &&
                  homeContent[component][0]?.datas?.[0]?.products.length > 0 ? (
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
                      <WalletBanner
                        componentDatas={homeContent[component][0]}
                      />
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
                      <TopCategories
                        componentDatas={homeContent[component][0]}
                      />
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
      ) : null}
    </>
  );
}
export default Index;
