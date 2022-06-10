const knex = require("knex");

class Contenedor {
  constructor(options, table) {
    this.knex = knex(options);
    this.table = table;
  }

  async findAll() {
    try {
      const getAll = await this.knex.from(this.table).select("*");
      return getAll;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async findById(id) {
    try {
      const getById = await this.knex
        .from(this.table)
        .select("*")
        .where("id", id);
      return getById;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async create(obj) {
    try {
      const createObj = await this.knex(this.table).insert(obj);
      return createObj;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async delete(id) {
    try {
      const deleteById = await this.knex
        .from(this.table)
        .where("id", id)
        .delete();
      return deleteById;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async deleteAll() {
    try {
      return await this.knex.from(this.table).del();
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}


module.exports = Contenedor


