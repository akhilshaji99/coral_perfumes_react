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
        {homeComponents?.map((component,index) => {
          return (
            <>
              {/* <section className="home-banner"> */}
              {component.includes("main_banner") && homeContent[component] ? (
                <MainBanner  />
              ) : null}

              {component.includes("multiple_round_listing") &&
              homeContent[component] ? (
                <CategoryTop componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("timer_banner") && homeContent[component] ? (
                <BannerFlashSale componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("product_carousel_timer") &&
              homeContent[component] ? (
                <FlashSale componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("product_carousel") &&
              homeContent[component] ? (
                  <ProductCarousel componentDatas={homeContent[component][0]}/>
              ) : null}

              {component.includes("small_square_carousel") &&
              homeContent[component] ? (
                <WalletBanner componentDatas={homeContent[component][0]}/>
              ) : null}

              {component.includes("banner_230") && homeContent[component] ? (
                <Deals componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("12_block_listing") &&
              homeContent[component] ? (
                <TopCategories componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("banner_538") && homeContent[component] ? (
                <AdsBanner componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("5_round_listing") &&
              homeContent[component] ? (
                <ShopPreferences componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("6_square_listing") &&
              homeContent[component] ? (
                <Brands componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("4_round_listing") &&
              homeContent[component] ? (
                <ShopMore componentDatas={homeContent[component][0]} />
              ) : null}

              {component.includes("4_block_banner") &&
              homeContent[component] ? (
                <AdsBlock />
              ) : null}
              {/* </section> */}
            </>
          );
        })}
      </main>
    </>
  );
}
export default Index;
