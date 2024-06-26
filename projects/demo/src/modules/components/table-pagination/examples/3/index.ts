import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTablePagination,
    tuiTablePaginationOptionsProvider,
} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({
            showPages: false,
        }),
    ],
})
export default class Example {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
