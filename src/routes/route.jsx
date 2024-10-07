import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/index";

import GestaoEstoqueEstoque from '../pages/gestao-estoque/estoque/estoque'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Login />} />
        <Route path="/gestao-estoque/estoque" element={<GestaoEstoqueEstoque />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;