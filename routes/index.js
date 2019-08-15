const routes = (app, controllers) => {
  /**
  * @swagger
  *
  * /api/all/{type}:
  *    get:
  *      description: View all artwork or artist
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The artwork or artist name
  *          in: path
  *          type: string
  *      responses:
  *        200:
  *          description: all values
  */
  app.get('/api/all/:type', async function (req, res) {
      let type = req.params.type;
      let value = {};

      try {
        value = await controllers.all(type);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/create/{type}:
  *    post:
  *      summary: Creates artworks and artists
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The artwork or artist name
  *          in: path
  *          type: string
  *        - name: data
  *          description: The artworks or artist
  *          in: body
  *      responses:
  *        200:
  *          description: a artworks or artist
  */
  app.post('/api/create/:type', async function (req, res) {
      let type = req.params.type;
      let data = req.body;
      let value = {};

      try {
        value = await controllers.create(type, data);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/read/{type}/{id}:
  *    get:
  *      description: View all artworks or artist
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The artwork or artist name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The id of the artwork or artist
  *          in: path
  *          type: string
  *      responses:
  *        200:
  *          description: Get a artwork or artist
  */
  app.get('/api/read/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let value = {};

      console.log(`Read type ${type} with id ${id}`);

      try {
        value = await controllers.read(type, id);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/update/{type}/{id}:
  *    post:
  *      summary: Creates artworks or artist
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The artworks or artist name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The artworks or artist id
  *          in: path
  *          type: string
  *        - name: name
  *          description: The artworks or artist
  *          in: body
  *      responses:
  *        200:
  *          description: a new artworks or artist
  */
  app.post('/api/update/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let data = req.body;
      let value = {};

      console.log(`Update type ${type} with id ${id}`);

      try {
        value = await controllers.update(type, id, data);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
  /**
  * @swagger
  *
  * /api/delete/{type}/{id}:
  *    post:
  *      summary: Creates artworks or artists
  *      produces:
  *        - application/json
  *      parameters:
  *        - name: type
  *          description: The artworks or artist name
  *          in: path
  *          type: string
  *        - name: id
  *          description: The artworks or artist id
  *          in: path
  *          type: string
  *        - name: name
  *          description: The artworks or artist
  *          in: body
  *      responses:
  *        200:
  *          description: a new artworks or artist
  */
  app.post('/api/delete/:type/:id', async function (req, res) {
      let type = req.params.type;
      let id = req.params.id;
      let value = {};

      console.log(`Get all ${type}`);

      try {
        value = await controllers.deleter(type, id);
      } catch (error) {
        value = error;
      }

      res.json(value);
  });
}

module.exports = routes;
