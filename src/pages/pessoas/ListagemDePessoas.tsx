
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FerramentasDaListagem } from '../../shared/components';
import { useDebounce } from '../../shared/hooks';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasServices';


export const ListagemDePessoas = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(3000, false);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {

    debounce(() => {
      PessoasService.getAll(1, busca)
        .then((result) => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            console.log(result.data[0].nomeCompleto);
          }
        });
    });
  }, [busca]);

  return (
    <LayoutBaseDePagina 
      titulo='Listagem de Pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoBotaoNovo="Nova"  
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({busca: texto}, {replace: true})}
        />
      }
    >

    </LayoutBaseDePagina>  
  );
};