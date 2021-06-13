import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { DropdownDirective } from '../dropdown.directive';
import { LoadingComponent } from '../loading-spinner/loading.component';
import { PlaceholderDirective } from '../placeholder/placeholder.directive';
import { AlertComponent } from './alert.component';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
})
export class SharedModule {}