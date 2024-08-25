import { toast } from "react-toastify";

class AlertService {
  success = (message) => {
    toast.success(message);
  };

  error = (message) => {
    toast.error(message);
  };
}

const alertService = new AlertService();

export default alertService;
