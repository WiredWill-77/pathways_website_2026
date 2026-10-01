// Production startup file for cPanel Node.js (Passenger) or any plain Node host.
// Serves the build made by `next build` on process.env.PORT.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => handle(req, res)).listen(port, () => {
      console.log(`Pathways site listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
