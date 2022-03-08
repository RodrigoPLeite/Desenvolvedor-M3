import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";


const OrdenarPor = (props) => {
  var [produtos, setProdutos] = React.useState([]);

  

  return (
    <>

      <Box sx={{ minWidth: 40 }}>
        <FormControl sx={{ width: '20%', marginLeft: "63%" }}>
          <InputLabel id="demo-simple-select-label">Ordenar Por</InputLabel>
          <Select

            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valorEscolhido}
            label="Ordenar Por"
            onChange={texto => setValorEscolhido(texto.target.value)}
          >
            <MenuItem value={1}>Mais Recentes</MenuItem>
            <MenuItem value={2}>Maior Preço</MenuItem>
            <MenuItem value={3}>Menor Preço</MenuItem>
          </Select>
        </FormControl>
        
      </Box>
    </>
  );
}

export default OrdenarPor;