import _customers from '@/api/mocks/customers'
import _orders from '@/api/mocks/orders'
import { OrderState } from '@/settings/orders'

export default {
  getOrders (successCallback) {
    setTimeout(() => successCallback(_orders), 100)
  },
  getOrder (orderId, successCallback) {
    setTimeout(() => {
      let order = _orders.find(order => order.id == orderId)
      successCallback(order)
    }, 100)
  },
  createOrder (order, successCallback) {
    setTimeout(() => {
       // actual data will be return from server
      order.id = _orders.length + 1
      order.customer = _customers.find(customer => customer.id == order.customer_id)
      order.state = OrderState.requested
      let itemsTotal = order.order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      order.total = itemsTotal + parseInt(order.shipment_total) + parseInt(order.adjustment_total)
      successCallback(order)
    }, 100)
  },
  updateOrder (order, successCallback) {
    setTimeout(() => {
       // actual data will be return from server
      let itemsTotal = order.order_items.reduce(((sum, item) => item.price * item.quantity + sum), 0)
      order.total = itemsTotal + parseInt(order.shipment_total) + parseInt(order.adjustment_total)
      successCallback(order)
    }, 100)
  },
}