export const useConfirm = (msg, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onConfirm !== "function") {
    return;
  }

  const funcRet = () => {
    if (confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return funcRet;
};
