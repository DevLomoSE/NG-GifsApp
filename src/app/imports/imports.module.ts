import { NgModule } from '@angular/core';

import {ListboxModule} from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [
    ],
    exports: [
        ListboxModule,
        InputTextModule,
    ],
    imports: [
        ListboxModule,
        InputTextModule,
    ]
})
export class ImportsModule{

}
