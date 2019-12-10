import Boom from "boom";
import api from "binance";

class OrdersController {
  constructor(Orders) {
    this.Orders = Orders;
  }

  async getAll(request, h) {
    try {
      const binanceRest = new api.BinanceRest({
        key: h.request.payload.key,
        secret: h.request.payload.secret,
        disableBeautification: false,
        handleDrift: true
      });
      const orders = await binanceRest.allOrders({
        symbol: h.request.payload.symbol
      });
      const ordersData = orders.length
        ? { orders }
        : { message: "Nenhuma ordem cadastrada!" };
      return ordersData;
    } catch (error) {
      return Boom.badRequest("Falha ao buscar ordens.");
    }
  }
}

export default OrdersController;
