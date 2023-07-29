function AlerMessage({ t, toast, status, message }) {
  return (
    <>
      <span>
        Custom and <b>bold {status}</b>
        <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
      </span>
    </>
  );
}
export default AlerMessage;
