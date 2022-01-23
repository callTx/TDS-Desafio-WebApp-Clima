import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pag-home',
  templateUrl: './pag-home.component.html',
  styleUrls: ['./pag-home.component.scss']
})
export class PagHomeComponent implements OnInit {

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', '#0f0f0f');
  }

}
