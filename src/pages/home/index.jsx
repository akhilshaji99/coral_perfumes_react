import request from "../../utils/request";
import { useEffect, useState } from "react";
import MainBanner from "./blocks/MainBanner";
import Deals from "./blocks/Deals";
import TopCategories from "./blocks/TopCategories";
import ShopMore from "./blocks/ShopMore";
import AdsBlock from "./blocks/AdsBlock";
import ShopPreferences from "./blocks/ShopPreferences";
import FlashSale from "./blocks/FlashSale";
import WalletBanner from "./blocks/WalletBanner";
import Brands from "./blocks/Brands";
import AdsBanner from "./blocks/AdsBanner";
import CategoryTop from "./blocks/CategoryTop";
import BannerFlashSale from "./blocks/BannerFlashSale";
import ProductCarousel from "./blocks/ProductCarousel";

function Index() {
  const [homeContent, setHomeContent] = useState([]);
  const [homeComponents, setHomeComponents] = useState([]);
  useEffect(() => {
    getHomeContent();
  }, []);
  const getHomeContent = async () => {
    try {
      const response = await request.get("get_home_content/");
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
      <main>
        {homeComponents?.map((component, index) => {
          return (
            <>
              {/* <section className="home-banner"> */}
              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP2" ? (
                <>
                  <MainBanner />
                </>
              ) : null}
              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP3" ? (
                <CategoryTop componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP5" ? (
                <BannerFlashSale componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP6" ? (
                <FlashSale componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP9" ? (
                <ProductCarousel componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP7" ? (
                <WalletBanner componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP8" ? (
                <Deals componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP11" ? (
                <TopCategories componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP12" ? (
                <AdsBanner componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP13" ? (
                <ShopPreferences componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP14" ? (
                <Brands componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP15" ? (
                <ShopMore componentDatas={homeContent[component][0]} />
              ) : null}

              {homeContent[component] &&
              homeContent[component]?.[0]?.component_identifier === "COMP10" ? (
                <AdsBlock componentDatas={homeContent[component][0]} />
              ) : null}
            </>
          );
        })}
      </main>
    </>
  );
}
export default Index;
