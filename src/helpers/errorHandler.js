const errorHandler = (error) => {
  console.log(error);
  if (error.response !== undefined || null) {
    if (error.response.status === 500) {
      alert("Internal server error");
    } else if (error.response.status === 404) {
      alert("404 : Page Not Found");
    } else if (error.response.status === 400) {
      alert("Bad request");
    } else {
      alert("error.. error..");
    }
  } else {
    alert("Something Is Wrong");
  }
};
export default errorHandler;
