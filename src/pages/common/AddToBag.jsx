import addToCart from "../cart/js/addToCart";
function AddToBag({ variant_id }) {
  return (
    <button
      className="btn btn-dark w-100 mt-2"
      onClick={() => addToCart(variant_id, 1)}
    >
      add to bag{" "}
    </button>
  );
}
export default AddToBag;
