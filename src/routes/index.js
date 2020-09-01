import Header from "../template/Header";

import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

import GetHash from "../utils/GetHash";
import ResolveRoutes from "../utils/ResolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/Contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("Header");
  const content = null || document.getElementById("Content");

  header.innerHTML = await Header();

  let hash = GetHash();
  let route = await ResolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
