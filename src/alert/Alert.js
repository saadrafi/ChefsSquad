import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyError = (msg) => {
  toast.error(msg);
};
const notifySuccess = (msg) => {
  toast.success(msg);
};
const notifyInfo = (msg) => {
  toast.info(msg);
};
const notifyWarning = (msg) => {
  toast.warning(msg);
};

export { notifyError, notifySuccess, notifyInfo, notifyWarning };