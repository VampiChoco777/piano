import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';

sound(numero: number): void {
  let audio = new Audio();
  switch (numero)
  {
    case 1: audio.src = 'assets/sounds/piano_1.mp3';
    audio.play();
    audio.play(); break;
    case 2: audio.src = 'assets/sounds/alfedo-calmate.mp3';
    audio.play();
    audio.play();
    break;
    case 3:
    audio.src = 'assets/sounds/siniestro-dross-negas.mp3';
    audio.play();
    audio.play();
    break;
    case 4:
    audio.src = 'assets/sounds/hola-tonotos.mp3';
    audio.play();
    audio.play();
    break;
    case 5:
    audio.src = 'assets/sounds/y2mate_Ajp9shj.mp3';
    audio.play();
    audio.play();
    break;
    case 6:
    audio.src = 'assets/sounds/morbido.mp3';
    audio.play();
    audio.play();
    break; case 7:
    audio.src = 'assets/sounds/y2mate_Ajp9shj.mp3';
    audio.play();
    audio.play();
    break;
    default:
    audio.src = 'assets/sounds/hola-tonotos.mp3';
    audio.play();
    audio.play();
    break;
  }
  }
}
