import Joi from "joi";

import NewOrderController from "../controllers/newOrder";
import NewOrderModel from "../models/newOrder";

const newOrderController = new NewOrderController(NewOrderModel);

const newOrderRoute = server => {
  server.route({
    method: "POST",
    path: "/orders/new",
    handler: (request, h) => newOrderController.newOrderData(request, h),
    options: {
      validate: {
        payload: {
          key: Joi.string().required(),
          secret: Joi.string().required(),
          symbol: Joi.string().required(),
          side: Joi.string().required(),
          type: Joi.string().required(),
          timestamp: Joi.date().required(),
          quantity: Joi.number().required()
        }
      }
    }
  });
};

module.exports = newOrderRoute;
