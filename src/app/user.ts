export interface IUser{
  id?: 1;
  nome: string;
  email: string;
  senha: string;
  cpf: number;
  data: string;
}

export interface IUserVerify{
  email: string;
  senha: string
}

export interface IDadosCadastro{
  name_register: string;
  email: string;
  senha: string;
  confirmar_senha: string;
  cpf: number | null;
  data_nascimento: string;
}
