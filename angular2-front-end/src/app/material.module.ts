/**
 * Created by PPan on 7/09/2017.
 */
import { NgModule } from '@angular/core';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdDialogModule,
        MdDatepickerModule,
        MdNativeDateModule
    ],
    exports: [
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdDialogModule,
        MdDatepickerModule,
        MdNativeDateModule
    ]
})

export class MaterialModule {}