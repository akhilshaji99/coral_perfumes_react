function BreadCrumps() {
    return(
      <>
     <div className="mt-4">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">Home</a></li>
                <li className="breadcrumb-item"><a href="#!">Perfumes</a></li>
                <li className="breadcrumb-item"><a href="#!">Women</a></li>
                <li className="breadcrumb-item active" aria-current="page">Brands</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  }
  export default BreadCrumps;