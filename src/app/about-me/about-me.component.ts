import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  template: `
    <div class="container-fluid">

<header col-md-12>
  <a id="titulo" routerLink="'/'">
    <h1 class="text wrab">{{titulo}} P.</h1>
  </a>
  <nav id="hed">
    <ul>
      <li><a >About Me</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contactMe">Contact Me</a></li>
    </ul>
  </nav>
</header>

<!-- Empieza la primera columna -->
  <div class="row">
    <!-- Primera columna -->
    <div id="col1" class="col-md-12 col-12">
      <div id="myText">
        <h1>About Me</h1>
        <p><span>Hello! I'm Esteban 👋 </span> <br> I am a passionate web developer specializing in frontend development with complementary backend knowledge. I am enthusiastic 
          about the world of programming. As a university student, I am focused on improving my skills and knowledge 
          to become a full-stack developer. I am ready to take on new challenges and contribute effectively to a dynamic team.
        </p>
        <div id="myContact">
          
          <a id="contact" target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=eliaspizarro11@gmail.com">Contact me via Email 📧</a> <br>
          <a id="ver"  href="assets/images/CVEsteban.pdf" target="_blank">View CV 👀
            </a> <br>
            <a id="des"  href="assets/images/CVEsteban.pdf" download="assets/images/CvEsteban1.pdf">
              Download CV <img src="assets/images/icono.png" alt="Imagen de logo de descarga">
            </a>
        </div>
      </div>
    </div> <!-- cierre de la primera columna -->
  </div> <!-- cierra la primera fila   -->
</div>
  `,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  titulo:string = 'Esteban';
}
