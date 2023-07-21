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
import deviceCheck from "../../utils/deviceCheck";
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
    console.log(deviceCheck());
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
        {homeComponents?.map((component) => {
          return (
            <>
              {/* <section className="home-banner"> */}
              {component.includes("main_banner") && homeContent[component] ? (
                <MainBanner />
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
                  <ProductCarousel />
              ) : null}

              {component.includes("small_square_carousel") &&
              homeContent[component] ? (
                <WalletBanner />
              ) : null}

              {component.includes("banner_230") && homeContent[component] ? (
                <Deals />
              ) : null}

              {component.includes("12_block_listing") &&
              homeContent[component] ? (
                <TopCategories />
              ) : null}

              {component.includes("banner_538") && homeContent[component] ? (
                <AdsBanner />
              ) : null}

              {component.includes("5_round_listing") &&
              homeContent[component] ? (
                <ShopPreferences />
              ) : null}

              {component.includes("6_square_listing") &&
              homeContent[component] ? (
                <Brands />
              ) : null}

              {component.includes("4_round_listing") &&
              homeContent[component] ? (
                <ShopMore />
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
