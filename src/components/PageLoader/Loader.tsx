function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] grid place-content-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
