import Joi from "joi";

import AccountController from "../controllers/account";
import AccountModel from "../models/account";

const accountController = new AccountController(AccountModel);

const accountRoute = server => {
  server.route({
    method: "POST",
    path: "/account",
    handler: (request, h) => accountController.getAll(request, h),
    options: {
      validate: {
        payload: {
          key: Joi.string().required(),
          secret: Joi.string().required()
        }
      }
    }
  });
};

module.exports = accountRoute;
