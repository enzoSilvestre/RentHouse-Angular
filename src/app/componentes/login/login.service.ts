import { IUser, IUserVerify, IDadosCadastro } from './../../user';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class loginService {

  private readonly API = 'http://localhost:3000/users';

  constructor(private readonly http: HttpClient) { }

  verifyExistUser(): Observable<IUserVerify> {
    return this.http.get<IUserVerify>(this.API);
  }

  listUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.API)
  }

  createUser(dadosCadastro: IDadosCadastro): Observable<IUser>{
    return this.http.post<IUser>(this.API, dadosCadastro)
  }

}
