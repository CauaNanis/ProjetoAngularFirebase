import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor() {}

  criarConta() {

  if (this.nome == '') {
    alert('Digite o nome');
  }

  if (this.email == '') {
    alert('Digite o e-mail');
  }

  if (!this.email.includes('@') || !this.email.includes('.')) {
    alert('Digite um e-mail válido');
    return;
  }

  if (this.senha == '') {
    alert('Digite a senha');
  }

  if (this.confirmarSenha == '') {
    alert('Confirme a senha');
  }

  if (this.senha != '' && this.confirmarSenha != '' && this.senha != this.confirmarSenha) {
    alert('As senhas estão diferentes');
  }

  if (
    this.nome != '' &&
    this.email != '' &&
    this.email.indexOf('@') != -1 &&
    this.senha != '' &&
    this.confirmarSenha != '' &&
    this.senha == this.confirmarSenha
  ) {
    alert('Conta criada com sucesso');
  }

}

  facebook() {
    alert('Login com Facebook');
  }

  twitter() {
    alert('Login com Twitter');
  }

  google() {
    alert('Login com Google');
  }

}
