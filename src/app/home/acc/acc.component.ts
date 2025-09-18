import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements AfterViewInit {

  testimonials = [
    {
      name:"Mohamed, 29 ans",
      rate:5,
      text:"ImpactBank m'a permis d'envoyer de l'argent en Tunisie rapidement et à moindre coût. Très pratique !",
      img:"/assets/images/resource/testimonial-1.png"
    },
    {
      name:"Syrine, 24 ans",
      rate:4,
      text:"Application facile à utiliser, j'adore la transparence et la rapidité des transactions.",
      img:"/assets/images/resource/testimonial-2.png"
    },
    {
      name:"Yassine, 35 ans",
      rate:5,
      text:"Enfin une solution fiable pour transférer de l'argent à ma famille et gérer mes dépenses depuis la France.",
      img:"/assets/images/resource/testimonial-3.png"
    }
  ]

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
