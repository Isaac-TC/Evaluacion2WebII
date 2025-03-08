import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagenes = [
    { src: 'https://media.istockphoto.com/id/1899837584/es/foto/students-doing-a-presentation-on-classroom-at-school.jpg?s=612x612&w=0&k=20&c=XhnsBGT3y4eXmtI_gz3dZqSGQ0w7BiXkmviHCF-4hIY=', alt: 'Aula de Clases' },
    { src: 'https://cdn.pixabay.com/photo/2015/09/05/21/51/library-925589_640.jpg', alt: 'Biblioteca' },
    { src: 'https://media.istockphoto.com/id/2162210336/es/foto/pasillo-escolar-vac%C3%ADo-con-casilleros-rojos-y-piso-a-cuadros.jpg?s=612x612&w=0&k=20&c=UQ6PioRKfGX2Koi4-4psUk4eeqrd4FUdOjhvWQjVUjo=', alt: 'Edificio de la Escuela' },
    { src: 'https://cdn.pixabay.com/photo/2017/08/17/08/40/football-2650433_640.jpg', alt: 'Cancha de Fútbol' },
    { src: 'https://cdn.pixabay.com/photo/2016/05/18/11/25/library-1400313_640.jpg', alt: 'Estudiantes en Actividades' },
    { src: 'https://cdn.pixabay.com/photo/2024/01/30/12/59/women-8541959_640.jpg', alt: 'Evento Escolar' }
  ];

}
