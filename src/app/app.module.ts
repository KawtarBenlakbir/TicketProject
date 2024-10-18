import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Assurez-vous d'importer AppRoutingModule
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';


@NgModule({
  declarations: [
    TicketListComponent,
    EditTicketComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
