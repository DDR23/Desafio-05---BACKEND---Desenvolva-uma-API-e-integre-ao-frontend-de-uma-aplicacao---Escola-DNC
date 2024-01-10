
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API | atividade---board-task-backend---Escola-DNC',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js']
}

const specs = swaggerJsdoc(options)

module.exports = function(app){
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(specs))
}