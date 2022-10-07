import { Home } from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
