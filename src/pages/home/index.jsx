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

function Index() {
  return (
    <>
      <main>
        <MainBanner />
        <section className="bg-middle">
          <WalletBanner />
          <FlashSale />
          <Deals />
          <TopCategories />
          <AdsBanner />
          <ShopPreferences />
          <AdsBlock />
          <ShopMore />
          <Brands />
        </section>
      </main>
    </>
  );
}
export default Index;
