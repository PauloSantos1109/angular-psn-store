import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.css'
})
export class CardLabelComponent implements OnInit{

  @Input()
  gameLabel:string=''
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
