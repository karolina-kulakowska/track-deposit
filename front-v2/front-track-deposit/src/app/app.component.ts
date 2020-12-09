import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFileAudio, faMusic, faQuoteLeft, faQuoteRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faNapster } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-track-deposit';
  logoimage: string = "assets/img/logo.jpg";

  icons = {
    quoteLeft: faQuoteLeft,
    quoteRight: faQuoteRight,
    musicIcon: faMusic,
    catIcon: faNapster,
  };

  constructor(
    private router: Router,
    ) { }

  goToAllTrackList() {
    this.router.navigate(['/tracks']);
  }
}
