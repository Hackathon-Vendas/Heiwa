import axios from "@/plugins/axios.js";


class TableService {
    async getAllMesas() {
        const {data}  =  await axios.get("mesas/")
        console.log(data)
        return data
    }
}

export default new TableService();