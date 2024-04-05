import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiIconComponent, TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';

import {TuiIconExample1} from './examples/1';
import {TuiIconExample2} from './examples/2';
import {TuiIconExample3} from './examples/3';
import {ExampleTuiIconComponent} from './icon.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIconComponent,
        TuiLinkDirective,
        TuiNotificationModule,
        tuiGetDocModules(ExampleTuiIconComponent),
    ],
    declarations: [
        ExampleTuiIconComponent,
        TuiIconExample1,
        TuiIconExample2,
        TuiIconExample3,
    ],
    exports: [ExampleTuiIconComponent],
})
export class ExampleTuiIconModule {}
