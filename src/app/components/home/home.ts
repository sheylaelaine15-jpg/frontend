import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public nomeProduto: string = "Curso de Angular";
  //anuncio:string = "O"+this.nomeProduto+"Está em promoção";
  anuncio: string = `O ${this.nomeProduto} Está em promoção`
  idProduto: number = 123;
  precoProduto: number = 2.59;
  promocao: boolean = true;
  foto:string = "img/crud.png";

  testeVariaveis(): void {
    console.log("nome do produto: ", this.nomeProduto);
    console.log("Anuncio: ", this.anuncio);
    console.log("ID: ", this.idProduto);
    console.log("Preço: ", this.precoProduto);
    console.log("Promoção: ", this.promocao);

   
  }

}