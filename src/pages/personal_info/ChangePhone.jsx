function ChangePhone() {
  return (
    <div
      className="modal fade"
      id="changePhone"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        {/* modal content */}
        <div className="modal-content">
          {/* modal body */}
          <div className="modal-body p-6">
            <div className="d-flex justify-content-between mb-5">
              <div>
                {/* heading */}
                <h5 className="mb-1">CHANGE MOBILE NUMBER</h5>
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
            {/* row */}
            <div className="row g-3">
              {/* col */}
              <div className="col-12">
                {/* input */}
                <input
                  type="text"
                  className="form-control"
                  disabled
                  placeholder="as@gmail.com"
                />
              </div>
              {/* col */}
              <div className="col-12">
                {/* input */}
                <label>New Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="col-12 text-end">
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChangePhone;
