import createApiClient from "./api.service";

class BookService {
  constructor(baseUrl = "/api/book") {
    this.api = createApiClient(baseUrl);
  }
  async create(data) {
    return (await this.api.post("/create", data)).data;
  }

  async getAll(searchQuery = "") {
    return (await this.api.get("/" + "?" + searchQuery)).data;
  }
  async getById(id) {
    return (await this.api.get("/" + id)).data;
  }

  async update(id, data) {
    return await this.api.put(`/${id}`, data).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}

export default new BookService();
