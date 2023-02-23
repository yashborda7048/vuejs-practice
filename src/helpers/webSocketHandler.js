let connectionStr = null;
let conn = null;
export const onOpenWebSocket = (url) => {
  if (url !== null || url !== undefined) {
    connectionStr = new WebSocket(url);
    connectionStr.onopen = () => {
      console.log("Notification Url Connected ...");
    };
    connectionStr.onclose = function (event) {
      console.log(event, "close");
    };
    connectionStr.onerror = function (error) {
      console.log(error, "error");
    };
    return connectionStr;
  }
};

export const onSendMessageWebSocket = (data = null) => {
  if (connectionStr !== null) {
    connectionStr.send(data);
  }
};

export const socketConnect = (url) => {
  if (url !== null || url !== undefined) {
    conn = new WebSocket(process.env.VUE_APP_ROOT_WEB_SOCKET + url);
    conn.onopen = () => {
      console.log("Connected ...");
    };
    return conn;
  }
};
