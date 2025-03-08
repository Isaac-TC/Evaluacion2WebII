import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {
  docente = {
    nombre: 'Prof. Juan Pérez',
    departamento: 'Departamento de Matemáticas',
    foto: 'https://randomuser.me/api/portraits/men/32.jpg', // Imagen de perfil del docente
    horarios: [
      { dia: 'Lunes', materia: 'Álgebra', hora: '08:00 - 09:30', aula: '101' },
      { dia: 'Martes', materia: 'Cálculo I', hora: '10:00 - 11:30', aula: '102' },
      { dia: 'Miércoles', materia: 'Geometría', hora: '12:00 - 13:30', aula: '103' },
      { dia: 'Jueves', materia: 'Trigonometría', hora: '14:00 - 15:30', aula: '104' },
      { dia: 'Viernes', materia: 'Estadística', hora: '16:00 - 17:30', aula: '105' }
    ]
  };
  
   constructor(private router: Router) {} 

  logut(){
    localStorage.setItem("login","false");
    this.router.navigate(['login']); // Redirige al home
  }

}
