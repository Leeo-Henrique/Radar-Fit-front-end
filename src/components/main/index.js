import { ListProducts } from "../listProducts";
import { DescritionProduct } from "../descritionProduct";
import { MainStyled, DivStyled } from "./styles";
import { ModalAddProduct } from "../modalAddProduct";
import { useState } from "react";
export const Main = ({ products }) => {
  const [openDesc, setOpenDesc] = useState(false);
  const [desc, setDesc] = useState({});
  return (
    <MainStyled>
      <section>
        <DivStyled>
          <h1>Produtos</h1>
          <ModalAddProduct />
        </DivStyled>
        <span className="line__grey"></span>
        <div className="content__main">
          <ListProducts
            products={products}
            setDesc={setDesc}
            setOpenDesc={setOpenDesc}
            openDesc={openDesc}
          />
          {openDesc && (
            <DescritionProduct desc={desc} setOpenDesc={setOpenDesc} />
          )}
        </div>
      </section>
    </MainStyled>
  );
};
