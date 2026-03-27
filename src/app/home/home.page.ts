import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: ILivro[] = [
    {
      isbn: '123', 
      titulo: 'Uma breve história do tempo', 
      categoria: [
      { nome: 'científico'},
      { nome: 'romance'},
      { nome: 'terror'}
    ]
  },
    {
      isbn: '456',
      titulo: '1984',
      categoria: [
        { nome: 'ficção científica' },
        { nome: 'distopia' }
      ]
    },
    {
      isbn: '789',
      titulo: 'O Senhor dos Anéis',
      categoria: [
        { nome: 'fantasia' },
        { nome: 'aventura' }
      ]
    },
    {
      isbn: '101',
      titulo: 'Dom Casmurro',
      categoria: [
        { nome: 'romance' },
        { nome: 'clássico' }
      ]
    },
    {
      isbn: '202',
      titulo: 'O Cortiço',
      categoria: [
        { nome: 'romance' },
        { nome: 'realismo' }
      ]
    },
    {
      isbn: '303',
      titulo: 'O Código Da Vinci',
      categoria: [
        { nome: 'mistério' },
        { nome: 'suspense' }
      ]
    },
    {
      isbn: '404',
      titulo: 'Cem Anos de Solidão',
      categoria: [
        { nome: 'realismo mágico' },
        { nome: 'clássico' }
      ]
    },
    {
      isbn: '505',
      titulo: 'O Príncipe',
      categoria: [
        { nome: 'política' },
        { nome: 'filosofia' }
      ]
    },
    {
      isbn: '606',
      titulo: 'Orgulho e Preconceito',
      categoria: [
        { nome: 'romance' },
        { nome: 'clássico' }
      ]
    },
    {
      isbn: '707',
      titulo: 'A Metamorfose',
      categoria: [
        { nome: 'ficção' },
        { nome: 'absurdo' }
      ]
    },
    {
      isbn: '808',
      titulo: 'O Hobbit',
      categoria: [
        { nome: 'fantasia' },
        { nome: 'aventura' }
      ]
    },
    {
      isbn: '909',
      titulo: 'Dune',
      categoria: [
        { nome: 'ficção científica' },
        { nome: 'épico' }
      ]
    },
    {
      isbn: '1010',
      titulo: 'Sapiens',
      categoria: [
        { nome: 'história' },
        { nome: 'científico' }
      ]
    },
    {
      isbn: '1111',
      titulo: 'O Mundo de Sofia',
      categoria: [
        { nome: 'filosofia' },
        { nome: 'educativo' }
      ]
    },
    {
      isbn: '1212',
      titulo: 'A Revolução dos Bichos',
      categoria: [
        { nome: 'sátira' },
        { nome: 'alegoria' }
      ]
    },
    {
      isbn: '1313',
      titulo: 'O Grande Gatsby',
      categoria: [
        { nome: 'romance' },
        { nome: 'clássico' }
      ]
    },
    {
      isbn: '1414',
      titulo: 'Normal People',
      categoria: [
        { nome: 'romance' },
        { nome: 'contemporâneo' }
      ]
    },
    {
      isbn: '1515',
      titulo: 'O Atlas da Negligência',
      categoria: [
        { nome: 'ficção' },
        { nome: 'drama' }
      ]
    },
    {
      isbn: '1616',
      titulo: 'Sherlock Holmes - A Baskerville',
      categoria: [
        { nome: 'mistério' },
        { nome: 'clássico' }
      ]
    },
    {
      isbn: '1717',
      titulo: 'Mindset',
      categoria: [
        { nome: 'autoajuda' },
        { nome: 'psicologia' }
      ]
    },
    {
      isbn: '1818',
      titulo: 'O Alquimista',
      categoria: [
        { nome: 'ficção' },
        { nome: 'espiritualidade' }
      ]
    }
  ];

  

}
