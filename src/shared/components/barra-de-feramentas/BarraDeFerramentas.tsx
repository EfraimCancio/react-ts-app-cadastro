
import { Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Box } from '@mui/system';


interface IBarraDeFerramentasProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca
}) => {

  const theme = useTheme();
    
  return(
    <Box 
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      gap={1}
      alignItems="center" 
      component={Paper}
    >
      <TextField 
        size="small"
        placeholder='Pesquisar...'
      />
      <Box  display="flex" flex={1} justifyContent="end">
        <Button
          color='primary'
          disableElevation
          variant='contained'
          endIcon={<Icon>add</Icon>}
        >Novo</Button>
      </Box>

    </Box>
  );
};