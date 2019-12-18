import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {
  MatDatepickerModule,
  MatFormFieldModule, MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";

@NgModule({
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})

export class AngularMaterialModule {
}
