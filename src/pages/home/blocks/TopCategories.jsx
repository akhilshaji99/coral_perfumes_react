import deviceImageRender from "../../../utils/deviceImageRender";

function TopCategories({ componentDatas }) {
  const dynamicBackground = {
    backgroundColor: componentDatas?.bg_color,
  };
  const products = componentDatas?.datas;

  return (
    <>
      <div className="container-fluid my-5">
        <div className="card top-categories" style={dynamicBackground}>
          <h1 className="mb-5">{componentDatas?.title}</h1>
          <div className="row">
            {products.map((product, index) => {
              return (
                <div key={index} className="col-md-2 col-6 text-center">
                  <img
                    src={deviceImageRender(
                      product.desktop_image,
                      product.mobile_image
                    )}
                    alt={product.image_alt}
                  />
                  <h3>{product.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default TopCategories;
