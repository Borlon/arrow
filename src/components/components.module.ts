import { NgModule } from '@angular/core';
import { HeaderGymComponent } from './header-gym/header-gym';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
    declarations: [
        HeaderGymComponent
    ],
    imports: [SuperTabsModule],
    exports: [HeaderGymComponent]
})
export class ComponentsModule { }
