import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RendezVousComponent, DialogAddRendezVousComponent} from './rendezvous/rendez-vous.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    RendezVousComponent,
    DialogAddRendezVousComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
