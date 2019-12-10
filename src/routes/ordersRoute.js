import Joi from "joi";

import OrdersController from "../controllers/orders";
import OrdersModel from "../models/orders";

const ordersController = new OrdersController(OrdersModel);

const ordersRoute = server => {
  server.route({
    method: "POST",
    path: "/orders",
    handler: (request, h) => ordersController.getAll(request, h),
    options: {
      validate: {
        payload: {
          key: Joi.string().required(),
          secret: Joi.string().required(),
          symbol: Joi.string().required()
        }
      }
    }
  });
};

module.exports = ordersRoute;
