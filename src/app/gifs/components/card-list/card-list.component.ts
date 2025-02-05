import { ChangeDetectionStrategy, Component, isStandalone } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent { }
