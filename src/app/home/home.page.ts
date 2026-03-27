import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Produtos } from './produtos-interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: Produtos[] = [
    {
      nome: 'Produto 1',
      preco: 10.99,
      descricao: 'Descrição do Produto 1',
      estoque: 100,
      categoria: [
        { nome: 'Alimentos' }
      ]
    },
    {
      nome: 'Produto 2',
      preco: 25.50,
      descricao: 'Descrição do Produto 2',
      estoque: 50,
      categoria: [
        { nome: 'Eletrônicos' }
      ]
    },
    {
      nome: 'Produto 3',
      preco: 15.99,
      descricao: 'Descrição do Produto 3',
      estoque: 75,
      categoria: [
        { nome: 'Alimentos' }
      ]
    },
    {
      nome: 'Produto 4',
      preco: 45.00,
      descricao: 'Descrição do Produto 4',
      estoque: 30,
      categoria: [
        { nome: 'Eletrônicos' }
      ]
    },
    {
      nome: 'Produto 5',
      preco: 8.50,
      descricao: 'Descrição do Produto 5',
      estoque: 200,
      categoria: [
        { nome: 'Alimentos' }
      ]
    },
    {
      nome: 'Produto 6',
      preco: 89.99,
      descricao: 'Descrição do Produto 6',
      estoque: 20,
      categoria: [
        { nome: 'Eletrônicos' }
      ]
    },
    {
      nome: 'Produto 7',
      preco: 32.75,
      descricao: 'Descrição do Produto 7',
      estoque: 60,
      categoria: [
        { nome: 'Casa' }
      ]
    },
    {
      nome: 'Produto 8',
      preco: 12.99,
      descricao: 'Descrição do Produto 8',
      estoque: 150,
      categoria: [
        { nome: 'Alimentos' }
      ]
    },
    {
      nome: 'Produto 9',
      preco: 55.40,
      descricao: 'Descrição do Produto 9',
      estoque: 40,
      categoria: [
        { nome: 'Casa' }
      ]
    },
    {
      nome: 'Produto 10',
      preco: 99.99,
      descricao: 'Descrição do Produto 10',
      estoque: 25,
      categoria: [
        { nome: 'Eletrônicos' }
      ]
    },
    {
      nome: 'Produto 11',
      preco: 22.00,
      descricao: 'Descrição do Produto 11',
      estoque: 80,
      categoria: [
        { nome: 'Casa' }
      ]
    }
  ];

}