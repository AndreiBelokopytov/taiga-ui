import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiPieChartModule} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPieChartExample1} from './examples/1';
import {TuiPieChartExample2} from './examples/2';
import {ExampleTuiPieChartComponent} from './pie-chart.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiPieChartModule,
        TuiAmountPipe,
        PolymorpheusModule,
        TuiAddonDocModule,
        TuiHintModule,
        TuiNotificationModule,
        TuiLinkDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPieChartComponent)),
    ],
    declarations: [ExampleTuiPieChartComponent, TuiPieChartExample1, TuiPieChartExample2],
    exports: [ExampleTuiPieChartComponent],
})
export class ExampleTuiPieChartModule {}
