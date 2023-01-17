/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';


interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo='Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo
}) => {

  const theme = useTheme();
    
  return(
    <Box 
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center" 
      height={theme.spacing(5)}
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField 
          size="small"
          value={ textoDaBusca }
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
          placeholder='Pesquisar...'
        />
      )}
      
      <Box  display="flex" flex={1} justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            color='primary'
            disableElevation
            variant='contained'
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >{textoBotaoNovo}</Button>
        )}
      </Box>

    </Box>
  );
};