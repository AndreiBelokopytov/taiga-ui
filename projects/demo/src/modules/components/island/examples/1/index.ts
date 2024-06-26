import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiIslandDirective} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiIslandDirective, TuiLink, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
