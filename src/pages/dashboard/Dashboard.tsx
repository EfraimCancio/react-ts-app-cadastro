

import { FerramentasDaListagem, FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <LayoutBaseDePagina 
      titulo={'Página Inicial'} 
      barraDeFerramentas={(
        <FerramentasDeDetalhe />
      )}
    >
        Testando
    </LayoutBaseDePagina>
  );
};