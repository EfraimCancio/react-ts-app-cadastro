import { Environment } from '../../../environments';
import { api } from '../axios-config';

export interface IListagemPessoa {
  id: number;
  email: string;
  cidadeId: number;
  nomeCompleto: string;
}

export interface IDetalhePessoa {
    id: number;
    email: string;
    cidadeId: number;
    nomeCompleto: string;
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount: number;
}

const getAll = async (page = 1, filter=''): Promise<TPessoasComTotalCount | Error> => {
  try{
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
    
    const { data, headers } = await api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS)
      };
    }

    return new Error('Erro ao listar os registros.');

  } catch (error) {

    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao listar os registros.');

  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error('Erro ao consultar o Registro.');
  } catch (error) {

    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao consultar o Registro.');

  }
};

const create = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await api.post('/pessoas', dados);
    
    if (data) {
      return data.id;
    }
    
    return new Error('Erro ao Registrar pessoa.');
  } catch (error) {
    
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao Registrar pessoa .');
    
  }
};

const updateById = async (id: number, dados: IDetalhePessoa ): Promise<void | Error> => {
  try {
    await api.put(`/pessoas/${id}`, dados);
  } catch (error) { 
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao atualizar registro.');
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/pessoas/${id}`);
  } catch (error) { 
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro ao deletar registro.');
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};