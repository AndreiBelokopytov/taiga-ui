```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCopyModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputCopyModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(''),
  });
}
```
