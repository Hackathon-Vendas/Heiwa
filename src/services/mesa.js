import axios from "axios";

class TableService {
    async getAllMesas() {
        const response =  await axios.get("mesa/")
        return response.data
    }
}

export default new TableService();