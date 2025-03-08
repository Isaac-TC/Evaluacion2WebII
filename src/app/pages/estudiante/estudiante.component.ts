import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
   

  alumno = {
    nombre: 'Juan García',
    carrera: 'Ingeniería en Sistemas',
    foto: 'https://randomuser.me/api/portraits/men/45.jpg', // Imagen del alumno
    horarios: [
      { dia: 'Lunes', materia: 'Programación I', hora: '08:00 - 09:30', aula: '201' },
      { dia: 'Martes', materia: 'Bases de Datos', hora: '10:00 - 11:30', aula: '202' },
      { dia: 'Miércoles', materia: 'Redes de Computadoras', hora: '12:00 - 13:30', aula: '203' },
      { dia: 'Jueves', materia: 'Matemáticas Discretas', hora: '14:00 - 15:30', aula: '204' },
      { dia: 'Viernes', materia: 'Seguridad Informática', hora: '16:00 - 17:30', aula: '205' }
    ]
  };

  constructor(private router: Router) {} 

  logut(){
    localStorage.setItem("login","false");
    this.router.navigate(['login']); // Redirige al home
  }


}
