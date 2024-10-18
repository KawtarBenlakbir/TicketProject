import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'tickets', component: TicketListComponent }, // Route pour la liste des tickets
  { path: 'add-ticket', component: TicketFormComponent }, // Route pour ajouter un nouveau ticket
  { path: 'edit-ticket/:id', component: EditTicketComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' } // Redirection vers '/tickets' par défaut
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }