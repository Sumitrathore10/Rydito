import app from "./app.js";
import http from "http";

const server = http.createServer(app)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
