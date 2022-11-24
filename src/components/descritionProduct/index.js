import { AsideStyled } from "./styles";
import { ButtonStyled } from "../modalAddProduct/styles";
import { GoPencil } from "react-icons/go";
import { AiFillTag } from "react-icons/ai";
import { ModalPatchProduct } from "../modalUpdateProduct";
import { useState } from "react";
export const DescritionProduct = ({ desc, setOpenDesc }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <AsideStyled>
        <h2>Detalhes</h2>
        <div className="detailed__product">
          <h3>{desc.produto}</h3>
          <div>
            <p>Valor</p>
            <span>
              {Number(desc.valor).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <p className="content__descrition">{desc.descricao}</p>
        </div>
        <span className="line__grey"></span>
        <div className="detailed__edit__product">
          <ButtonStyled
            className="reset"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <GoPencil />
            Editar
          </ButtonStyled>
          <AiFillTag
            onClick={() => {
              setOpenDesc(false);
            }}
          />
        </div>
      </AsideStyled>
      {modalIsOpen && (
        <ModalPatchProduct
          modalIsOpen={modalIsOpen}
          desc={desc}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
