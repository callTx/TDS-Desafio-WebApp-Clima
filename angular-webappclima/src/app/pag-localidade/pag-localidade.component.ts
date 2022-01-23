import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pag-localidade',
  templateUrl: './pag-localidade.component.html',
  styleUrls: ['./pag-localidade.component.scss']
})
export class PagLocalidadeComponent implements OnInit {


  nomecidade: any;

  //Injeta uma rota ativa para pegar o nome da cidade como parametro
  constructor(private route: ActivatedRoute,private el: ElementRef,private renderer: Renderer2) {
    this.nomecidade = this.route.snapshot.params['nomecidade'];
  }


  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', 'white');
  }

}
