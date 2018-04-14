import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderContentComponent } from './header-content';

@NgModule({
    declarations: [
        HeaderContentComponent,
    ],
    imports: [
        IonicPageModule.forChild(HeaderContentComponent)
    ],
    exports: [
        HeaderContentComponent
    ]
})
export class HeaderContentComponentModule {
}