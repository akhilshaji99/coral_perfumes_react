import addToWishlist from "../js/addToWishlist";
function WishlistIcon({ product_slug, is_in_wishlist }) {
  return (
    <span
      className={
        is_in_wishlist ? "wishlist-button wishlist-active" : "wishlist-button"
      }
      onClick={() => {
        addToWishlist(product_slug);
      }}
    >
      <svg
        width="29"
        height="25"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.5399 7.98659C27.5399 17.032 18.9036 22.3664 15.0342 23.642C14.5754 23.7967 13.8375 23.7967 13.3787 23.642C11.7233 23.1009 9.19022 21.8059 6.85662 19.8151C3.70527 17.1286 0.873047 13.1664 0.873047 7.98659C0.873047 3.98576 4.18396 0.75803 8.27274 0.75803C10.7061 0.75803 12.8601 1.89836 14.2164 3.63786C15.2167 2.3415 16.6397 1.41078 18.2545 0.996773C19.8693 0.582766 21.5811 0.709778 23.112 1.35719C25.7248 2.4782 27.5399 5.01012 27.5399 7.98659Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
export default WishlistIcon;
