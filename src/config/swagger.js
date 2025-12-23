const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Happy Pet API Documentation",
      version: "1.0.0"
    },
    servers: [
      {
        url: "https://happy.techinfo.uz"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },

  apis: [path.join(__dirname, "src/routes/*.js")],
  apis: [path.join(__dirname, "../router/*.router.js")]
};

module.exports = swaggerJSDoc(options);
