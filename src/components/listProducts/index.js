import { ListStyled } from "./styles";
import { CardProduct } from "../cardProduct";
export const ListProducts = ({
  products,
  setDesc,
  setOpenDesc,
  openDesc,
  setColor,
  color,
}) => {
  return (
    <ListStyled>
      <h2>Lista de Produtos</h2>
      <div className="list__product">
        {products?.map((product, index) => (
          <CardProduct
            product={product}
            key={index}
            setDesc={setDesc}
            setOpenDesc={setOpenDesc}
            openDesc={openDesc}
            setColor={setColor}
            color={color}
          />
        ))}
      </div>
    </ListStyled>
  );
};
