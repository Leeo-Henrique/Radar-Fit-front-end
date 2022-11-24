import { useState } from "react";
import { HeaderStyled } from "./styles";
import { BsSearch } from "react-icons/bs";
import API from "../../api";
import { toast } from "react-toastify";
export const Header = ({ setProducts }) => {
  const [search, setSearch] = useState("");
  const searchOnApi = () => {
    API.get(`/produtos/find?string=${search}`)
      .then((res) => {
        if (res.data.length === 0) {
          toast.error("Produto nao encontrado");
        } else {
          toast.success("Produto encontrado ");
          setProducts(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <HeaderStyled>
      <span></span>
      <div>
        <input
          placeholder="Buscar por um produto"
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsSearch color="#fff" onClick={searchOnApi} />
      </div>
    </HeaderStyled>
  );
};
