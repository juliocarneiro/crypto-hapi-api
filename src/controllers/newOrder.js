import Boom from "boom";
import api from "binance";

class NewOrderController {
  constructor(NewOrder) {
    this.NewOrder = NewOrder;
  }
  async newOrderData(request, h) {
    try {
      const binanceRest = new api.BinanceRest({
        key: h.request.payload.key,
        secret: h.request.payload.secret,
        disableBeautification: false,
        handleDrift: true
      });
      const orders = await binanceRest.newOrder({
        symbol: h.request.payload.symbol,
        side: h.request.payload.side,
        type: h.request.payload.type,
        timestamp: Date.now(),
        quantity: h.request.payload.quantity
      });
      return { orders };
    } catch (error) {
      return Boom.badRequest(
        error.code === -2010
          ? "A conta tem saldo insuficiente para a ação solicitada"
          : JSON.stringify(error.msg)
      );
    }
  }
}

export default NewOrderController;
