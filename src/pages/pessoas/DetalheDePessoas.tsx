import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';



export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const hendleSave = () => {
    console.log('Sabve');
  };

  const handleDelete = () => {
    console.log('delete');
  };    


  return (
    <LayoutBaseDePagina 
      titulo='Detalhe de pessoa'
      barraDeFerramentas={
        <FerramentasDeDetalhe 
          textoBotaoNovo="nova"
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmSalvar={hendleSave}
          aoClicarEmSalvarEFechar={hendleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmNovo={() => {}}
          aoClicarEmVoltar={() => {}}
        />
      }
    >
      <p>Detalhe de Pessoas {id}</p>
    </LayoutBaseDePagina>
  );
};