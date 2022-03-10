import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Pagina from '../Pagina';
import React, { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useFiltro } from '../../hooks/useFiltro';
import { Container } from './styles';

const Sidebar = () => {
    const {
        valorEscolhido,
        cor,
        setCor,
        tamanho,
        setTamanho,
        setFaixaPreco,
        faixaPreco,
        produtosFiltrados,
        setValorEscolhido,
        filtrar
    } = useFiltro();

    useEffect(() => {
        filtrar();
    }, [cor, faixaPreco, tamanho, valorEscolhido]);

    const handleChangeCor = (event) => {
        setCor(event.target.value);
    };

    const handleChangePreco = (event) => {
        setFaixaPreco(event.target.value);
    };

    const handleChangeTamanho = (valor) => {
        setTamanho(valor);
    };

    return (
        <>
            <Box sx={{ width: '15%', marginLeft: "77%", marginTop: "2%" }}>
                <InputLabel id="label-select">Ordenar Por</InputLabel>
                <Select
                    sx={{ width: "100%" }}
                    value={valorEscolhido}
                    onChange={e => setValorEscolhido(e.target.value)}
                >
                    <MenuItem value={1}>Mais Recentes</MenuItem>
                    <MenuItem value={2}>Menor Preço</MenuItem>
                    <MenuItem value={3}>Maior Preço</MenuItem>
                </Select>
            </Box>
            <Container>
                <Box sx={{ display: "flex", width: "100%" }}>
                    <RadioGroup
                        defaultValue="Todos"
                        value={cor}
                        onChange={handleChangeCor}
                        sx={{
                            marginLeft: "5%",
                        }}
                    >
                        <h1>Blusas</h1>
                        <h3>CORES</h3>
                        <FormControlLabel value="Amarelo" control={<Radio />} label="Amarelo" sx={{ width: "50px" }} />
                        <FormControlLabel value="Rosa" control={<Radio />} label="Rosa" />
                        <FormControlLabel value="Branco" control={<Radio />} label="Branco" />
                        <FormControlLabel value="Cinza" control={<Radio />} label="Cinza" />
                        <FormControlLabel value="Preto" control={<Radio />} label="Preto" />
                        <FormControlLabel value="Laranja" control={<Radio />} label="Laranja" />
                        <TreeView
                            aria-label="file system navigator"
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                            style={{ width: "100%" }}
                        >
                            <TreeItem
                                nodeId="1"
                                label="Ver todas as cores"
                            >
                                <p>Outras Cores</p>
                            </TreeItem>
                        </TreeView>
                    </RadioGroup>
                </Box>
                <h3 style={{ marginLeft: "5%", }}>TAMANHOS</h3>
                <Box sx={{ display: "flex", marginLeft: "5%", width: "100%" }}>
                    <Card onClick={() => { handleChangeTamanho("P") }} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: 'pointer' }}>P</Card>
                    <Card onClick={() => {handleChangeTamanho("M")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>M</Card>
                    <Card onClick={() => {handleChangeTamanho("G")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>G</Card>
                    <Card onClick={() => {handleChangeTamanho("GG")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>GG</Card>
                </Box>
                <Box sx={{ display: "flex", marginLeft: "5%", paddingTop: 1.2, width: "100%" }}>
                    <Card onClick={() => {handleChangeTamanho("U")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>U</Card>
                    <Card onClick={() => {handleChangeTamanho("36")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>36</Card>
                    <Card onClick={() => {handleChangeTamanho("38")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>38</Card>
                    <Card onClick={() => {handleChangeTamanho("40")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>40</Card>
                </Box>
                <Box sx={{ display: "flex", marginLeft: "5%", paddingTop: 1.2, width: "100%" }}>
                    <Card onClick={() => {handleChangeTamanho("42")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>42</Card>
                    <Card onClick={() => {handleChangeTamanho("44")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>44</Card>
                    <Card onClick={() => {handleChangeTamanho("46")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>46</Card>
                    <Card onClick={() => {handleChangeTamanho("T")}} sx={{ width: "4%", height: "30px", textAlign: "center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer" }}>T</Card>
                </Box>
                <h3 style={{ marginLeft: "5%" }}>FAIXA DE PREÇO</h3>
                <Box sx={{ display: "flex", width: "100%" }}>
                    <RadioGroup
                        defaultValue="Todos"
                        value={faixaPreco}
                        onChange={handleChangePreco}
                        sx={{
                            marginLeft: "5%",
                        }}
                    >
                        <FormControlLabel value={"0,50"} control={<Radio />} label="de R$0 até R$50" />
                        <FormControlLabel value={"51,150"} control={<Radio />} label="de R$51 até R$150" />
                        <FormControlLabel value={"151,300"} control={<Radio />} label="de R$151 até R$300" />
                        <FormControlLabel value={"301,500"} control={<Radio />} label="de R$301 até R$500" />
                        <FormControlLabel value={"0,1000000"} control={<Radio />} label="a partir de R$ 01" />
                    </RadioGroup>
                </Box>
            </Container>
            <Pagina produtosFiltrados={produtosFiltrados} valorEscolhido={valorEscolhido} setValorEscolhido={setValorEscolhido} />
        </>
    )
}

export default Sidebar;