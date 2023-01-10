//import { PropsWithChildren } from 'react';
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePagina {
    titulo: string;
    children: string;
}

// eslint-disable-next-line react/prop-types
export const LayoutBaseDePagina: React.FunctionComponent<ILayoutBaseDePagina> = ( {titulo, children} ) => {

  const theme = useTheme();  
  const smDown = useMediaQuery(theme.breakpoints.down ('sm')); 

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>  
          </IconButton>
        )}
        
        <Typography variant="h5">
          {titulo}
        </Typography>
      </Box> 

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>  
  );
};