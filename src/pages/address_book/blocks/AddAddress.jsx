function AddAddress() {
  return (
    <div
      className="modal fade"
      id="AddAddress"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-between mb-5">
              <div>
                {/* heading */}
                <h5 className="mb-1">ADD NEW ADDRESS</h5>
              </div>
              <div>
                {/* button */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div>
              <form className="row mb-4">
                <div className="mb-3 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Flat Number"
                    required=""
                  />
                </div>
                {/* CVV */}
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Building Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <select className="form-control">
                      <option>Dubai</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PIN"
                      required=""
                    />
                  </div>
                </div>
                <div className="mb-3 col-md-6 col-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="09999999"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddAddress;
