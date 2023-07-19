function FilterSidebar() {
  return (
    <>
      <aside className="col-lg-3 col-md-4 mb-6 mb-md-0">
        <div
          className="offcanvas offcanvas-start offcanvas-collapse w-md-50 "
          tabIndex={-1}
          id="offcanvasCategory"
          aria-labelledby="offcanvasCategoryLabel"
        >
          <div className="offcanvas-header d-lg-none">
            <h5 className="offcanvas-title" id="offcanvasCategoryLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body ps-lg-2 pt-lg-0">
            <div className="mb-8">
              {/* title */}
              <h5 className="mb-3">Categories</h5>
              {/* nav */}
              <ul className="nav nav-category" id="categoryCollapseMenu">
                <li className="nav-item border-bottom w-100 ">
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#categoryFlushOne"
                    aria-expanded="false"
                    aria-controls="categoryFlushOne"
                  >
                    Dairy, Bread &amp; Eggs{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* accordion collapse */}
                  <div
                    id="categoryFlushOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      {/* nav */}
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Milk
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Milk Drinks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Curd &amp; Yogurt
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Eggs
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Bread
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Buns &amp; Bakery
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Butter &amp; More
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Cheese
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Paneer &amp; Tofu
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Cream &amp; Whitener
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Condensed Milk
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Vegan Drinks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                {/* nav item */}
                <li className="nav-item border-bottom w-100 ">
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Snacks &amp; Munchies{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Chips &amp; Crisps
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Nachos
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Popcorn
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Bhujia &amp; Mixtures
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Namkeen Snacks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Healthy Snacks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Cakes &amp; Rolls
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Energy Bars
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Papad &amp; Fryums
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Rusks &amp; Wafers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item border-bottom w-100 ">
                  {" "}
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Fruits &amp; Vegetables{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#!"
                          >
                            Fresh Vegetables
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Herbs &amp; Seasonings
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Fresh Fruits
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Organic Fruits &amp; Vegetables
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Cuts &amp; Sprouts
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Exotic Fruits &amp; Veggies
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Flower Bouquets, Bunches
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item border-bottom w-100 ">
                  {" "}
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Cold Drinks &amp; Juices{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Soft Drinks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Fruit Juices
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Coldpress
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Energy Drinks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Water &amp; Ice Cubes
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Soda &amp; Mixers
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Concentrates &amp; Syrups
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Detox &amp; Energy Drinks
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a href="#!" className="nav-link">
                            Juice Collection
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item border-bottom w-100 ">
                  {" "}
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Breakfast &amp; Instant Food{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#!"
                          >
                            Batter
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Breakfast Cereal
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Noodles, Pasta &amp; Soup
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Frozen Non-Veg Snackss
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Frozen Veg
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Vermicelli
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Instant Mixes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item border-bottom w-100 ">
                  {" "}
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Bakery &amp; Biscuits{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#!"
                          >
                            Cookies
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Glucose &amp; Marie
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Sweet &amp; Salty
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Healthy &amp; Digestive
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Cream Biscuits
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Rusks &amp; Wafers
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Cakes &amp; Rolls
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Buns &amp; Bakery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item border-bottom w-100 ">
                  {" "}
                  <a
                    href="#"
                    className="nav-link collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSeven"
                    aria-expanded="false"
                    aria-controls="flush-collapseSeven"
                  >
                    Chicken, Meat &amp; Fish{" "}
                    <i className="feather-icon icon-chevron-right" />
                  </a>
                  {/* collapse */}
                  <div
                    id="flush-collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#categoryCollapseMenu"
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {/* nav item */}
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#!"
                          >
                            Chicken
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Sausage, Salami &amp; Ham
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Exotic Meat
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Eggs
                          </a>
                        </li>
                        {/* nav item */}
                        <li className="nav-item">
                          <a className="nav-link" href="#!">
                            Frozen Non-Veg Snacks
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="mb-3">Stores</h5>
              <div className="my-4">
                {/* input */}
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by store"
                />
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="eGrocery"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="eGrocery">
                  E-Grocery
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="DealShare"
                />
                <label className="form-check-label" htmlFor="DealShare">
                  DealShare
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="Dmart"
                />
                <label className="form-check-label" htmlFor="Dmart">
                  DMart
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="Blinkit"
                />
                <label className="form-check-label" htmlFor="Blinkit">
                  Blinkit
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="BigBasket"
                />
                <label className="form-check-label" htmlFor="BigBasket">
                  BigBasket
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="StoreFront"
                />
                <label className="form-check-label" htmlFor="StoreFront">
                  StoreFront
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="Spencers"
                />
                <label className="form-check-label" htmlFor="Spencers">
                  Spencers
                </label>
              </div>
              {/* form check */}
              <div className="form-check mb-2">
                {/* input */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="onlineGrocery"
                />
                <label className="form-check-label" htmlFor="onlineGrocery">
                  Online Grocery
                </label>
              </div>
            </div>
            <div className="mb-8">
              {/* price */}
              <h5 className="mb-3">Price</h5>
              <div>
                {/* range */}
                <div id="priceRange" className="mb-3" />
                <small className="text-muted">Price:</small>{" "}
                <span id="priceRange-value" className="small" />
              </div>
            </div>
            {/* rating */}
            <div className="mb-8">
              <h5 className="mb-3">Rating</h5>
              <div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingFive"
                  />
                  <label className="form-check-label" htmlFor="ratingFive">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                  </label>
                </div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingFour"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="ratingFour">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingThree"
                  />
                  <label className="form-check-label" htmlFor="ratingThree">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star-fill text-warning " />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingTwo"
                  />
                  <label className="form-check-label" htmlFor="ratingTwo">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
                {/* form check */}
                <div className="form-check mb-2">
                  {/* input */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="ratingOne"
                  />
                  <label className="form-check-label" htmlFor="ratingOne">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                    <i className="bi bi-star text-warning" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-8 position-relative">
              {/* Banner Design */}
              {/* Banner Content */}
              <div className="position-absolute p-5 py-8">
                <h3 className="mb-0">Fresh Fruits </h3>
                <p>Get Upto 25% Off</p>
                <a href="#" className="btn btn-dark">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
              {/* Banner Content */}
              {/* Banner Image */}
              {/* img */}
              <img
                src="../assets/images/banner/assortment-citrus-fruits.png"
                alt=""
                className="img-fluid rounded "
              />
              {/* Banner Image */}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
export default FilterSidebar;
