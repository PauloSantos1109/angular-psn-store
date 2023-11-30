import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, CardComponent]
})
export class HomeComponent {

}
