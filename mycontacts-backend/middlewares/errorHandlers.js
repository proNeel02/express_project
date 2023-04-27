import { constants } from "../constant.js";

const handleError = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
console.log("Hello error",res.statusCode);

  switch (statusCode) {

    case constants.BAD_REQUEST:
        res.json({
          title: "Validation Failed",
          message: err.message,
          stackTrace: err.stack
        });
        break;

    case constants.UNAUTHORIZED_ERROR:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack
      });
      break;

      case constants.FORBIDDEN:
        res.json({
          title: "Forbidden",
          message: err.message,
          stackTrace: err.stack
        });
        break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack
      });
      break;

    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;

    default:
        console.log("No Error All Good!");
      break;
  }
};

export default handleError;
