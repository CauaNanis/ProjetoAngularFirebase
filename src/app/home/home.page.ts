import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livro.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  livros: Livro[] = [
    {
      isbn: '123',
      titulo: 'Nunca desista dos seus sonhos',
      sinopse: 'Livro de psicanálise',
      paginas: '200',
      data_lancamento: '01/01/2000',
      autor: [{ nome: 'Augusto Cury', email: 'augusto@hotmail.com' }],
      categoria: [
        { nome: 'Científico' },
        { nome: 'Auto-ajuda' }
      ],
      editora: { nome: 'Erica', site: 'editoraerica.com' }
    },

    // +20 livros
    {
      isbn: '124',
      titulo: 'O Poder do Hábito',
      sinopse: 'Como os hábitos funcionam',
      paginas: '300',
      data_lancamento: '10/02/2012',
      autor: [{ nome: 'Charles Duhigg', email: 'charles@email.com' }],
      categoria: [{ nome: 'Auto-ajuda' }],
      editora: { nome: 'Companhia', site: 'companhia.com' }
    },
    {
      isbn: '125',
      titulo: 'Mindset',
      sinopse: 'A nova psicologia do sucesso',
      paginas: '280',
      data_lancamento: '05/05/2006',
      autor: [{ nome: 'Carol Dweck', email: 'carol@email.com' }],
      categoria: [{ nome: 'Psicologia' }],
      editora: { nome: 'Objetiva', site: 'objetiva.com' }
    },
    {
      isbn: '126',
      titulo: 'Pai Rico Pai Pobre',
      sinopse: 'Educação financeira',
      paginas: '250',
      data_lancamento: '01/01/1997',
      autor: [{ nome: 'Robert Kiyosaki', email: 'robert@email.com' }],
      categoria: [{ nome: 'Finanças' }],
      editora: { nome: 'Alta Books', site: 'altabooks.com' }
    },
    {
      isbn: '127',
      titulo: 'O Alquimista',
      sinopse: 'Jornada espiritual',
      paginas: '180',
      data_lancamento: '01/01/1988',
      autor: [{ nome: 'Paulo Coelho', email: 'paulo@email.com' }],
      categoria: [{ nome: 'Ficção' }],
      editora: { nome: 'Rocco', site: 'rocco.com' }
    },
    {
      isbn: '128',
      titulo: 'Dom Casmurro',
      sinopse: 'Clássico da literatura brasileira',
      paginas: '220',
      data_lancamento: '01/01/1899',
      autor: [{ nome: 'Machado de Assis', email: 'machado@email.com' }],
      categoria: [{ nome: 'Romance' }],
      editora: { nome: 'Globo', site: 'globo.com' }
    },
    {
      isbn: '129',
      titulo: '1984',
      sinopse: 'Distopia política',
      paginas: '300',
      data_lancamento: '08/06/1949',
      autor: [{ nome: 'George Orwell', email: 'orwell@email.com' }],
      categoria: [{ nome: 'Ficção' }],
      editora: { nome: 'Companhia', site: 'companhia.com' }
    },
    {
      isbn: '130',
      titulo: 'A Revolução dos Bichos',
      sinopse: 'Crítica política',
      paginas: '150',
      data_lancamento: '17/08/1945',
      autor: [{ nome: 'George Orwell', email: 'orwell@email.com' }],
      categoria: [{ nome: 'Fábula' }],
      editora: { nome: 'Companhia', site: 'companhia.com' }
    },
    {
      isbn: '131',
      titulo: 'O Pequeno Príncipe',
      sinopse: 'História poética',
      paginas: '120',
      data_lancamento: '06/04/1943',
      autor: [{ nome: 'Antoine de Saint-Exupéry', email: 'antoine@email.com' }],
      categoria: [{ nome: 'Infantil' }],
      editora: { nome: 'Agir', site: 'agir.com' }
    },
    {
      isbn: '132',
      titulo: 'A Arte da Guerra',
      sinopse: 'Estratégia militar',
      paginas: '100',
      data_lancamento: '01/01/500',
      autor: [{ nome: 'Sun Tzu', email: 'suntzu@email.com' }],
      categoria: [{ nome: 'Estratégia' }],
      editora: { nome: 'Jardim', site: 'jardim.com' }
    },
    {
      isbn: '133',
      titulo: 'O Hobbit',
      sinopse: 'Fantasia épica',
      paginas: '310',
      data_lancamento: '21/09/1937',
      autor: [{ nome: 'J.R.R. Tolkien', email: 'tolkien@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'HarperCollins', site: 'harper.com' }
    },
    {
      isbn: '134',
      titulo: 'Senhor dos Anéis',
      sinopse: 'Saga épica',
      paginas: '1000',
      data_lancamento: '29/07/1954',
      autor: [{ nome: 'J.R.R. Tolkien', email: 'tolkien@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'HarperCollins', site: 'harper.com' }
    },
    {
      isbn: '135',
      titulo: 'Harry Potter e a Pedra Filosofal',
      sinopse: 'Magia e aventura',
      paginas: '320',
      data_lancamento: '26/06/1997',
      autor: [{ nome: 'J.K. Rowling', email: 'jk@email.com' }],
      categoria: [{ nome: 'Fantasia' }],
      editora: { nome: 'Rocco', site: 'rocco.com' }
    },
    {
      isbn: '136',
      titulo: 'O Código Da Vinci',
      sinopse: 'Suspense religioso',
      paginas: '450',
      data_lancamento: '18/03/2003',
      autor: [{ nome: 'Dan Brown', email: 'dan@email.com' }],
      categoria: [{ nome: 'Suspense' }],
      editora: { nome: 'Arqueiro', site: 'arqueiro.com' }
    },
    {
      isbn: '137',
      titulo: 'A Cabana',
      sinopse: 'Reflexão espiritual',
      paginas: '240',
      data_lancamento: '01/01/2007',
      autor: [{ nome: 'William P. Young', email: 'william@email.com' }],
      categoria: [{ nome: 'Religião' }],
      editora: { nome: 'Arqueiro', site: 'arqueiro.com' }
    },
    {
      isbn: '138',
      titulo: 'O Milagre da Manhã',
      sinopse: 'Desenvolvimento pessoal',
      paginas: '200',
      data_lancamento: '01/01/2012',
      autor: [{ nome: 'Hal Elrod', email: 'hal@email.com' }],
      categoria: [{ nome: 'Auto-ajuda' }],
      editora: { nome: 'BestSeller', site: 'bestseller.com' }
    },
    {
      isbn: '139',
      titulo: 'Essencialismo',
      sinopse: 'Menos é mais',
      paginas: '250',
      data_lancamento: '01/01/2014',
      autor: [{ nome: 'Greg McKeown', email: 'greg@email.com' }],
      categoria: [{ nome: 'Produtividade' }],
      editora: { nome: 'Sextante', site: 'sextante.com' }
    },
    {
      isbn: '140',
      titulo: 'Hábitos Atômicos',
      sinopse: 'Pequenas mudanças',
      paginas: '320',
      data_lancamento: '16/10/2018',
      autor: [{ nome: 'James Clear', email: 'james@email.com' }],
      categoria: [{ nome: 'Auto-ajuda' }],
      editora: { nome: 'Alta Life', site: 'altalife.com' }
    },
    {
      isbn: '141',
      titulo: 'Comece pelo Porquê',
      sinopse: 'Liderança',
      paginas: '280',
      data_lancamento: '01/01/2009',
      autor: [{ nome: 'Simon Sinek', email: 'simon@email.com' }],
      categoria: [{ nome: 'Negócios' }],
      editora: { nome: 'Sextante', site: 'sextante.com' }
    },
    {
      isbn: '142',
      titulo: 'Trabalhe 4 Horas por Semana',
      sinopse: 'Estilo de vida',
      paginas: '350',
      data_lancamento: '01/01/2007',
      autor: [{ nome: 'Timothy Ferriss', email: 'tim@email.com' }],
      categoria: [{ nome: 'Empreendedorismo' }],
      editora: { nome: 'Intrínseca', site: 'intrinseca.com' }
    },
    {
      isbn: '143',
      titulo: 'Quem Pensa Enriquece',
      sinopse: 'Mentalidade de sucesso',
      paginas: '300',
      data_lancamento: '01/01/1937',
      autor: [{ nome: 'Napoleon Hill', email: 'hill@email.com' }],
      categoria: [{ nome: 'Finanças' }],
      editora: { nome: 'Fundamento', site: 'fundamento.com' }
    }
  ];
}