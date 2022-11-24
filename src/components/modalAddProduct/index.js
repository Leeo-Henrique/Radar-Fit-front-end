import { TextField } from "@mui/material";
import { useState } from "react";
import Modal from "react-modal";
import { ButtonStyled } from "./styles";
import API from "../../api";
import { toast } from "react-toastify";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "600px",
  },
};

const DivStyled = {
  display: "flex",
  width: "100%",
  marginBottom: "20px",
  marginTop: "20px",
  justifyContent: "flex-end",
};
export const ModalAddProduct = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameProduct, setNameProduct] = useState("");
  const [valueProduct, setValueProduct] = useState(0);
  const [descritionProduct, setDescritionProduct] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#2c3e45";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sendToApi = () => {
    const data = {
      produto: nameProduct,
      valor: valueProduct,
      descricao: descritionProduct,
    };
    API.post("/produtos", data)
      .then(() => {
        toast.success("Produto cadastrado com sucesso");
        setTimeout(() => window.location.reload(), 2000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button onClick={openModal}>+</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Novo Produto</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "20px",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="filled-basic"
              label="Produto"
              variant="filled"
              onChange={(e) => setNameProduct(e.target.value)}
            />
            <TextField
              id="filled-basic"
              label="Valor"
              variant="filled"
              type="number"
              value={valueProduct}
              onChange={(e) => {
                if (Number(e.target.value) < 0) {
                  setValueProduct(0);
                } else {
                  setValueProduct(e.target.value);
                }
              }}
            />
          </div>
          <TextField
            id="standard-multiline-static"
            label="Descrição"
            multiline
            rows={4}
            variant="standard"
            style={{ width: "100%" }}
            onChange={(e) => setDescritionProduct(e.target.value)}
          />
          <div style={{ ...DivStyled }}>
            <ButtonStyled onClick={sendToApi}>ADD</ButtonStyled>
            <ButtonStyled onClick={closeModal}>Fechar</ButtonStyled>
          </div>
        </form>
      </Modal>
    </div>
  );
};
