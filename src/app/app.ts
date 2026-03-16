import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Importante para detectar el navegador
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  public isPlaying = false;
  private player: any;

  // Inyectamos el ID de la plataforma (Browser o Server)
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    // Solo ejecutamos la lógica de YouTube si estamos en el cliente (Browser)
    if (isPlatformBrowser(this.platformId)) {
      this.initYouTubeAPI();
    }
  }

  private initYouTubeAPI() {
    // Carga la API de YouTube
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Configura el reproductor cuando la API esté lista
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new (window as any).YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'xZ3nJ6KhWOo',
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: 'xZ3nJ6KhWOo',
          origin: window.location.origin
        }
      });
    };
  }

  toggleMusic() {
    if (!this.player) return;

    // Verificamos de nuevo que estamos en el navegador antes de llamar al player
    if (isPlatformBrowser(this.platformId)) {
      if (this.isPlaying) {
        this.player.pauseVideo();
      } else {
        this.player.playVideo();
      }
      this.isPlaying = !this.isPlaying;
    }
  }
}
