function AlerMessage({ t, toast, status, message }) {
  return (
    <>
      <div className="alert-block">
        <span>
          <button className="alert-btn" onClick={() => toast.dismiss(t.id)}>
            <svg
              width={11}
              height={11}
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.24271 1.24264L9.72799 9.72792M1.24271 9.72792L9.72799 1.24264"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="alert-container">
            <h3>Out of Stock</h3>
            <h6>We will notify you when it’s available</h6>
          </div>
        </span>
      </div>
    </>
  );
}
export default AlerMessage;
