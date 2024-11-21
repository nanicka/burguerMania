import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-cardapio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cardapio.component.html',
  styleUrl: './cardapio.component.css'
})
export class CardapioComponent {

}
