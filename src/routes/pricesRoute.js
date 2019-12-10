import PricesController from "../controllers/prices";

const pricesController = new PricesController();

const pricesRoute = server => {
  server.route({
    method: "GET",
    path: "/prices",
    handler: (request, h) => pricesController.getAll(request, h)
  });
};

module.exports = pricesRoute;
