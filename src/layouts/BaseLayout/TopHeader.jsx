import Marquee from "react-fast-marquee";

function TopHeader() {
  return (
    <>
      <div className="bg-dark py-2">
        <div className="container-fluid">
          <div className="row">
            <Marquee>
              <p className="marquee-text">
                I can be a React component, multiple React components, or just
                some text.
              </p>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopHeader;
