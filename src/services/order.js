import axios from "axios";

class OrderService {
    async getAllOrders() {
        const response =  await axios.get("order/")
        return response.data
    }
}

export default new OrderService();