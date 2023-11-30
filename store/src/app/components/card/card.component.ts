import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CommonModule, CardLabelComponent, CardPricingComponent]
})
export class CardComponent implements  OnInit{

    @Input()
    gameCover:string=''
    @Input()
    gameLabel:string=''
    @Input()
    gameType:string = 'XPTO | PS4';
    @Input()
    gameValue:String='R$ 399,90';

    constructor(){}    
    ngOnInit(): void {}

}
