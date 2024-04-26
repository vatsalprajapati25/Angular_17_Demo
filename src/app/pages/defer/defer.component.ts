import { Component } from '@angular/core';
import { ForComponent } from '../for/for.component';
import { IfElseComponent } from '../if-else/if-else.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [ForComponent, IfElseComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {

}
