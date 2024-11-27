import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  titulo: string = 'Esteban'
  projects = [
    {id: 1, name: 'Online Library',              description: 'I developed this virtual library with an interactive catalog, allowing users to easily browse through published and unpublished books. The plataform fratures a user-friendly interface that enhances the reading experience and provides detailed information about each book, ',                                   tec: 'angular',                                   url: 'https://books-elitaxh.netlify.app',              img: 'assets/images/libreria.png'},
    {id: 2, name: 'A Simple E-Commerce',           description: 'This is a project I developed called VoltMark, an e-commerce site for showcasing technology products. It features an accessible, user-friendly interface for exploring a variety of electronic devices, allowing users to browse a wide variety of products.',                                                       tec: 'html,css,bootstrap',                        url: 'https://voltmark.netlify.app/',                             img: 'assets/images/volrmarkoficial.png'},
    // {id: 3, name: 'Portafolio',                description: 'pagina hecha en bootstrap html y css',                                                                                                                                                 tec: 'html,css,javascript',                       url: 'https://github.com',                             img: 'assets/images/voltmark.png'},
    // {id: 4, name: 'Portafolio',                description: 'pagina hecha en bootstrap html y css',                                                                                                                                                 tec: 'react',                                     url: 'https://github.com',                             img: 'assets/images/voltmark.png'},
  ]
    v = false;
  ver(){
    this.v = !this.v;
  }
  
}

