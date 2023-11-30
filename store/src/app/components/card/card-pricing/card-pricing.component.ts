import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent implements OnInit {

  @Input()
  gameType:string = 'Digital PS4';
  @Input()
  gameValue:String='R$ 399,90';

  constructor(){}
  ngOnInit(): void {
      
  }

}
