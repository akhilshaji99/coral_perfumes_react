import { Link } from "react-router-dom";

function WalletSliderDatas({walletData,index}) {
  return (
    <>
      {walletData?.name && walletData?.name.split(" ").length === 3 ? (
        <Link to={walletData?.link}>
          <div className="wallet-card slick-slider-alignment"  key={index}>
            <div className="">
              <h3>{walletData?.name.split(" ")[0]}</h3>
              <h2>{walletData?.name.split(" ")[1]}</h2>
              <h3>{walletData?.name.split(" ")[2]}</h3>
            </div>
          </div>
        </Link>
      ) : null}
    </>
  );
}
export default WalletSliderDatas;
