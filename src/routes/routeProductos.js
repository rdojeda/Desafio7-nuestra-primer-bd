const { Router } = require("express");
const router = Router();
const Contenedor = require("../classProducts");
const { options } = require("../DB/configDB.js");
const contenedorProductos = new Contenedor(options.mariaDB, 'articulos');

const multer = require("multer");

// Multer subir archivos.
// 'image' campo en el formulario para subir imagen.
const storage = multer.diskStorage({
  destination: (req, table, cb) => {
    cb(null, "src/public/uploads");
  },
  filename: (req, table, cb) => {
    cb(null, table.originalname);
  },
});
router.use(multer({ storage }).single('image'));


router.get('/', (req, res) => {
  res.render("index", {
    title: "WebStore",
    items: contenedorProductos.findAll(),
  });
})
 
  router.post('/productos', (req, res, next) => {
    const body = req.body
    const image = req.file
    console.log(req)
    body.thumbnail = '/uploads/'+image.filename
    contenedorProductos.create(body, table)
    res.redirect('/')
  })

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const prod = await contenedorProductos.delete(id);
    res.json(prod);
  });
   
module.exports = router
