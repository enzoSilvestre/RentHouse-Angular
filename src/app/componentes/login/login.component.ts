import { IDadosCadastro, IUser } from './../../user';
import { loginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: IUser[] = [];

  dadosCadastro: IDadosCadastro = {
    name_register: "",
    email: "",
    senha: "",
    confirmar_senha: "",
    cpf: null,
    data_nascimento: "",
  }
  dadosLogin = {
    email: '',
    senha: ''
  }

  private modalIsOpen = false;

  constructor(private service: loginService, private router: Router) {

   }

  ngOnInit(): void {
    this.service.listUsers().subscribe((usersFound) => {
      this.users = usersFound
    })
  }

  verification() {
    console.log(this.dadosCadastro)
  }

  authUser() {
    const usersFounded = this.users.filter((userFound) => {
      return userFound.email == this.dadosLogin.email && userFound.senha == this.dadosLogin.senha
    })
    if (usersFounded.length > 0) {
      this.router.navigate(['/home'])
    }
    console.log(usersFounded[0])
    return usersFounded[0];
  }

  createNewUser(){
   return this.service.createUser(this.dadosCadastro).subscribe(()=>{
    alert("Usuário criado com sucesso")
    window.location.reload()
   })
  }

  handleModal() {
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }


  modalVerification(): string {
    if (this.modalIsOpen) {
      return 'overlay-open'
    }
    return 'overlay'
  }

}
