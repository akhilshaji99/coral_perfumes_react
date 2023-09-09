import request from "../../utils/request";
import { useEffect, useState, Suspense, lazy } from "react";
import Placeholder from "../common/PlaceHolder";
import getUserToken from "../../utils/userToken";

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
  const [homeContent, setHomeContent] = useState([]);
  const [homeComponents, setHomeComponents] = useState([]);
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("token", getUserToken());
      const response = await request.post("get_home_content/", bodyFormData);
      if (response.data) {
        const mainKeys = Object.entries(response.data).map(([key]) => key);
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
        {homeComponents?.map((component, index) => {
          return (
            <>
              {/* <section className="home-banner"> */}
              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP2" ? (
                <>
                  <Suspense fallback={<Placeholder />}>
                    <MainBanner componentDatas={homeContent[component][0]} />
                  </Suspense>
                </>
              ) : null}
            </>
          );
        })}
        <div>
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
