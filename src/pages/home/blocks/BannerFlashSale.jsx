function BannerFlashSale() {
  return (
    <>
      <section className="banner-flashsale">
        <div className="container my-5">
          <div className="row align-items-center d-end">
            <div className="col-md-8">
              <div className="row align-items-center ">
                <div className="col-md-4 text-center">
                  <h2>flash</h2>
                  <p>
                    <svg
                      width="38"
                      height="2"
                      viewBox="0 0 38 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 1H37.5" stroke="white" />
                    </svg>
                    sale
                    <svg
                      width="38"
                      height="2"
                      viewBox="0 0 38 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.5 1H37.5" stroke="white" />
                    </svg>
                  </p>
                  <button className="btn  btn-outline-light">Shop Now</button>
                </div>
                <div className="col-md-2">
                  <div className="timer-card">
                    <h1>08</h1>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="timer-card">
                    <h1>08</h1>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="timer-card">
                    <h1>08</h1>
                  </div>
                </div>
                <h5 className="text-center">*valid on selected Items</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BannerFlashSale;
