import { NgModule } from '@angular/core';

import {ListboxModule} from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import {CardModule} from 'primeng/card';


@NgModule({
    declarations: [
    ],
    exports: [
        ListboxModule,
        InputTextModule,
        CardModule
    ],
})
export class ImportsModule{

}
