import { AfterViewInit, Component, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild("ourCarousel") ourCarousel;

  title = 'A2';

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit() {
    console.log(this.ourCarousel)
    this.renderer.setAttribute(this.ourCarousel['_container'].nativeElement, 'aria-activedescendant', 'slide-first');
  }
}
