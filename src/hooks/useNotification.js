export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNoti = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
    } else if (Notification.permission !== "granted") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  };

  return fireNoti;
};
