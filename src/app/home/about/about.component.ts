import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) { }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = () => resolve();
      script.onerror = () => reject(`Erreur de chargement: ${src}`);
      this.renderer.appendChild(document.body, script);
    });
  }

  async ngAfterViewInit() {
    const scripts = [
      'assets/js/jquery.js',
      'assets/js/bootstrap.min.js',
      'assets/js/owl.js',
      'assets/js/wow.js',
      'assets/js/validation.js',
      'assets/js/jquery.fancybox.js',
      'assets/js/appear.js',
      'assets/js/isotope.js',
      'assets/js/parallax-scroll.js',
      'assets/js/jquery.nice-select.min.js',
      'assets/js/jQuery.style.switcher.min.js',
      'assets/js/script.js',
    ];

    for (let src of scripts) {
      await this.loadScript("/" + src)
    }
  }

}
