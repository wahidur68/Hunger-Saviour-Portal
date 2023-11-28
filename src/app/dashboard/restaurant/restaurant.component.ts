import { Component, Input } from '@angular/core';
import { Restaurant } from '../../model/restaurnt';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input()
  restaurant?:Restaurant;
}
