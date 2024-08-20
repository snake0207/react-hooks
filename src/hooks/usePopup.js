export const usePopup = (props) => {
  const { title, message, onConfirm } = props;
  const handleConfirm = () => {
    popupClose();
    onConfirm();
  };
  const handleCancel = () => {
    popupClose();
  };
  const popupClose = () => {
    document.getElementById("popup").style.display = "none";
  };

  return (
    <div
      id="popup"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#c0c0c0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "white",
          padding: "8px",
        }}
      >
        <h3>{title}</h3>
        <p>{message}</p>
        <hr />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={handleConfirm}>확인</button>
          <button onClick={handleCancel} style={{ marginLeft: "16px" }}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};
