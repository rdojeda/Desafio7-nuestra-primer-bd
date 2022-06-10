const knex = require("knex");

class ContenedorChat {
  constructor(options, table) {
    this.knex = knex(options);
    this.table = table;
  }

  async findAll() {
    try {
      const exist = await this.knex.schema.hasTable(this.table);
      if (exist) {
        const res = JSON.stringify(
          await this.knex.from(this.table).select("*")
        );
        const result = JSON.parse(res);
        return result;
      } else {
        return null;
      }
    } catch (error) {
      console.log("Hubo un error al mostrar la base de datos", error);
    }
  }

  async findById(id) {
      try {
          const exist = await this.knex.schema.hasTable(this.table);
          if (exist) {
              const res = JSON.stringify(
                    await this.knex
                        .from(this.table)
                        .select("*")
                        .where("id", id)
              )
              const getById = JSON.parse(res)
              return getById;
          }
              
    } catch (error) {
      console.log('Hubo un error al buscar los datos', error)
    }
  }

  async create(newData) {
      try {
        const exist = await this.knex.schema.hasTable(this.table);
        if (exist) {
          await this.knex(this.table).insert(newData);
          const res = JSON.stringify(
            await this.knex
              .from(this.table)
              .select("*")
              .orderBy("id", "desc")
              .limit(1)
          );
          const result = JSON.parse(res);
          return result;
        } else {
          await this.knex.schema.createTable("mensajes", (table) => {
            table.increments("id").primary().unique();
            table.string("autor", 50).notNullable();
            table.string("texto", 120).notNullable();
          });
          await this.knex(this.table).insert(newData);
          const res = JSON.stringify(
            await this.knex
              .from(this.table)
              .select("*")
              .orderBy("id", "desc")
              .limit(1)
          );
          const result = JSON.parse(res);
          return result;
        }
      } catch (error) {
        console.log("Hubo un error al guardar el mensaje", error);
      }
  }

  async delete(id) {
      try {
        
          const exist = await this.knex.schema.hasTable(this.table);
          if (exist) {
            const deleteById = await this.knex
            .from(this.table)
            .where("id", id)
            .delete();
            return deleteById;
          }
      
    } catch (error) {
      console.log("Hubo un error al eliminar los datos", error);
    }
  }

  async deleteAll() {
      try {
          const exist = await this.knex.schema.hasTable(this.table);
          if (exist) { 
              return await this.knex.from(this.table).del();
              
          }
      
    } catch (error) {
           console.log("Hubo un error al eliminar los datos", error);

    }
  }
}

module.exports = ContenedorChat;
