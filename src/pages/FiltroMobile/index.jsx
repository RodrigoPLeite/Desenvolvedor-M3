import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from 'react';
import { Link } from "react-router-dom";
import { useFiltro }  from '../../hooks/useFiltro';

import { Container, BotoesFiltro, ContainerBotoesFiltro } from './styles';

const FiltroMobile = () => {
  const {
      cor, 
      setCor, 
      setTamanho, 
      tamanho,
      faixaPreco,
      setFaixaPreco,
      filtrar
  } = useFiltro();

  const handleChangeCor = (event) => {
    setCor(event.target.value);
  };

  const handleChangePreco = (event) => {
    setFaixaPreco(event.target.value);
  };

  const handleChangeTamanho = (event) => {
    setTamanho(event.target.value);
  };

  return (
    <>
      <h1 style={{ fontSize: "50px", marginTop: "5%", borderBottom: "3px solid grey" }}>FILTRAR</h1>
      <Container>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          style={{ width: "20%" }}
        >
          <TreeItem
            fontSize= "50px"
            nodeId="1"
            label = "CORES"
          >
            <RadioGroup
              defaultValue="Todos"
              value={cor}
              onChange={handleChangeCor}
              sx={{
                marginLeft: "5%",
              }}
            >
              <FormControlLabel value="Amarelo" control={<Radio />} label="Amarelo" sx={{ width: "50px" }} />
              <FormControlLabel value="Rosa" control={<Radio />} label="Rosa" />
              <FormControlLabel value="Branco" control={<Radio />} label="Branco" />
              <FormControlLabel value="Cinza" control={<Radio />} label="Cinza" />
              <FormControlLabel value="Preto" control={<Radio />} label="Preto" />
              <FormControlLabel value="Laranja" control={<Radio />} label="Laranja" />
            </RadioGroup>
          </TreeItem>
        </TreeView>

        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          style={{ width: "20%" }}
        >
          <TreeItem
            nodeId="1"
            label="TAMANHOS"
          >
            <RadioGroup
              defaultValue="Todos"
              value={tamanho}
              onChange={handleChangeTamanho}
              sx={{
                marginLeft: "5%",
              }}
            >
              <FormControlLabel value="P" control={<Radio />} label="P" />
              <FormControlLabel value="M" control={<Radio />} label="M" />
              <FormControlLabel value="G" control={<Radio />} label="G" />
              <FormControlLabel value="GG" control={<Radio />} label="GG" />
              <FormControlLabel value="U" control={<Radio />} label="U" />
              <FormControlLabel value="36" control={<Radio />} label="36" />
              <FormControlLabel value="38" control={<Radio />} label="38" />
              <FormControlLabel value="40" control={<Radio />} label="40" />
              <FormControlLabel value="42" control={<Radio />} label="42" />
              <FormControlLabel value="44" control={<Radio />} label="44" />
              <FormControlLabel value="46" control={<Radio />} label="46" />
              <FormControlLabel value="T" control={<Radio />} label="T" />
            </RadioGroup>
          </TreeItem>
        </TreeView>
       
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          style={{ width: "20%" }}
        >
          <TreeItem
            nodeId="1"
            label="PREÇO"
          >
            <RadioGroup
              defaultValue="Todos"
              value={faixaPreco}
              onChange={handleChangePreco}
              sx={{
                marginLeft: "5%",
              }}
            >
              <FormControlLabel value={"0,50"} control={<Radio />} label="de R$0 até R$50" sx={{ width: "400px", height: "40px"}}/>
              <FormControlLabel value={"51,150"} control={<Radio />} label="de R$51 até R$150" sx={{ width: "400px", height: "40px"}}/>
              <FormControlLabel value={"151,300"} control={<Radio />} label="de R$151 até R$300" sx={{ width: "400px", height: "40px"}}/>
              <FormControlLabel value={"301,500"} control={<Radio />} label="de R$301 até R$500" sx={{ width: "400px", height: "40px"}}/>
              <FormControlLabel value={"0,1000000"} control={<Radio />} label="a partir de R$ 01" sx={{ width: "400px", height: "40px"}}/>
            </RadioGroup>
          </TreeItem>
        </TreeView>
        <ContainerBotoesFiltro>
          <Link to="/">
            <BotoesFiltro onClick={filtrar}>APLICAR</BotoesFiltro>
          </Link>
          <Link to="/">
            <BotoesFiltro >VOLTAR</BotoesFiltro>
          </Link>
        </ContainerBotoesFiltro>
      </Container>
    </>
  )
}

export default FiltroMobile;