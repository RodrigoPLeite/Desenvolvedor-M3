import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Pagina from './Pagina';
import React, { useEffect, useState } from 'react';
import Api from './Api';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import styled from "styled-components";

// const Container = styled.div`
// border: 1px solid blue;
// height: 100px;
//     @media (min-width: 962px){
//         border: 1px solid red;
//     }
//     width: auto;
// `

const Opcoes = styled.div`
border: 1px solid white;
width: 100%;
height: 100px;

`

const Sidebar = () => {
    const [cor, setCor] = useState("Todas");
    const [faixaPreco, setFaixaPreco] = useState("0,1000000");
    const [tamanho, setTamanho] = useState('T');
    
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [valorEscolhido, setValorEscolhido] = useState(0);
    const [atualizar, setAtualizar] = useState(false);

    useEffect(() => {
        Api.get(`products`)
        .then(res => {
            setProdutos(res.data);
            setProdutosFiltrados(res.data);
            filtrarSelect();
        })
    }, [])

    useEffect(() => {
        filtrar();
    },[ cor, faixaPreco, tamanho ])

    const filtrarSelect = (valor) => {
        //filtro do select
        produtosFiltrados.sort(function (a, b){
            setValorEscolhido(valor);
            if(valor === 2){
                return +(a.price > b.price) || +(a.price === b.price) - 1;
            }else if(valor === 3){
                return +(a.price < b.price) || +(a.price === b.price) - 1;
            }else if(valor === 1){
                return +(a.date < b.date) || +(a.date === b.date) - 1;
            }
        });
    }

    const filtrar = () => {
        const precos = faixaPreco.split(",");

        const filtrados = produtos       
        .filter(produto => produto.price >= precos[0] && produto.price < precos[1] )
        .filter(produto => produto.color === cor || cor === 'Todas')
        .filter(produto => {
            for(let i=0; i < produto.size.length; i++) {
                if(tamanho === produto.size[i]){
                    return produto.size[i];
                }else if(tamanho === 'T'){
                    // console.log("Else if");
                    return produto;
                }
            }
        });    

        setProdutosFiltrados(filtrados);
        setAtualizar(!atualizar);
    }
    
    return (
        <>
        {/* <Container> */}
        <Box >
            <FormControl sx={{ width: '15%', marginLeft: "77%", marginTop: "2%"}}>
                <InputLabel id="demo-simple-select-label">Ordenar Por</InputLabel>
                <Select
                    value={valorEscolhido}
                    label="Ordenar Por"
                    onChange={e => filtrarSelect(e.target.value)}
                >
                    <MenuItem value={1}>Mais Recentes</MenuItem>
                    <MenuItem value={2}>Menor Preço</MenuItem>
                    <MenuItem value={3}>Maior Preço</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box sx={{
            backgroundColor: 'white',
            width: "70%",
            height: "10px",
        }}>
            <Opcoes>
            <RadioGroup
                defaultValue="Todos"
                name="radio-buttons-group"
                value={cor}
                onClick={e => setCor(e.target.value)}
                sx={{
                    marginLeft: "5%",
                }}
            >
                <h1>Blusas</h1>
                <h3>CORES</h3>
                {/* <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Amarelo" />
                    <FormControlLabel control={<Checkbox />} label="Rosa" />
                </FormGroup> */}
                <FormControlLabel value="Amarelo" control={<Radio />} label="Amarelo" sx={{width: "50px"}} />
                <FormControlLabel value="Rosa" control={<Radio />} label="Rosa" />
                <FormControlLabel value="Branco" control={<Radio />} label="Branco" />
                <FormControlLabel value="Cinza" control={<Radio />} label="Cinza" />
                <FormControlLabel value="Preto" control={<Radio />} label="Preto" />
                <FormControlLabel value="Laranja" control={<Radio />} label="Laranja" />
                <TreeView
                    aria-label="file system navigator"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    style={{width: "20%"}}
                    >
                    <TreeItem 
                    nodeId="1" 
                    label="Ver todas as cores"
                 >
                        { <Box>
                            Outras Cores, {cor}
                        </Box> }
                    </TreeItem>
                </TreeView>
            </RadioGroup>
            <h3 style={{marginLeft: "5%",}}>TAMANHOS</h3>
            <Box sx={{display: "flex", marginLeft: "5%", width: "100%"}}>
                <Card onClick={() => setTamanho("P")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: 'pointer'}}>P</Card>
                <Card onClick={() => setTamanho("M")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>M</Card>
                <Card onClick={() => setTamanho("G")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>G</Card>
                <Card onClick={() => setTamanho("GG")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>GG</Card>
            </Box>
            <Box sx={{display: "flex", marginLeft:"5%", paddingTop: 1.2, width: "100%"}}>
                <Card onClick={() => setTamanho("U")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>U</Card>
                <Card onClick={() => setTamanho("36")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>36</Card>
                <Card onClick={() => setTamanho("38")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>38</Card>
                <Card onClick={() => setTamanho("40")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>40</Card>
            </Box>
            <Box sx={{display: "flex", marginLeft:"5%", paddingTop: 1.2, width: "100%"}}>
                <Card onClick={() => setTamanho("42")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>42</Card>
                <Card onClick={() => setTamanho("44")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>44</Card>
                <Card onClick={() => setTamanho("46")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>46</Card>
                <Card onClick={() => setTamanho("T")} sx={{width:"4%", height:"30px", textAlign:"center", paddingTop: 0.5, marginRight: 1, border: "1px solid lightblue", cursor: "pointer"}}>T</Card>
            </Box>
            <h3 style={{marginLeft:"5%"}}>FAIXA DE PREÇO</h3>
            <Box sx={{display: "flex"}}>
            <RadioGroup
                name="radio-buttons-group"
                value={faixaPreco}
                onClick={e => setFaixaPreco(e.target.value)}
                sx={{ marginLeft:"5%" }}
            >
                <FormControlLabel value={"0,50"} control={<Radio />} label="de R$0 até R$50" />
                <FormControlLabel value={"51,150"} control={<Radio />} label="de R$51 até R$150" />
                <FormControlLabel value={"151,300"} control={<Radio />} label="de R$151 até R$300" />
                <FormControlLabel value={"301,500"} control={<Radio />} label="de R$301 até R$500" />
                <FormControlLabel value={"0,1000000"} control={<Radio />} label="a partir de R$ 01" />
            </RadioGroup>
            </Box>
            </Opcoes>
        </Box>
        {/* </Container> */}
        <Pagina produtosFiltrados={produtosFiltrados} valorEscolhido={valorEscolhido} setValorEscolhido={setValorEscolhido} />
        </>
    )
}

export default Sidebar;