import { ProductStyled } from "./styles";
import { AiFillTag } from "react-icons/ai";
export const CardProduct = ({ product, setDesc, setOpenDesc }) => {
  return (
    <ProductStyled>
      <div>
        <h1>{product?.produto}</h1>
        <p>
          {Number(product?.valor).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <AiFillTag
        onClick={() => {
          setDesc(product);
          setOpenDesc(true);
        }}
      />
    </ProductStyled>
  );
};
