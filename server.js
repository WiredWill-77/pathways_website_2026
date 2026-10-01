// Root startup file for Passenger. Runs the Next.js app in web/.
process.chdir(require("path").join(__dirname, "web"));
require("./web/server.js");
