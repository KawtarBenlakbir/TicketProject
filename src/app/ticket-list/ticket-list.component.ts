import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket.model';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = []; // Array to hold filtered tickets
  searchTerm: string = ''; // To store the search input

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe(
      (data: Ticket[]) => {
        this.tickets = data;
        console.log(this.tickets);
      },
      (error) => {
        console.error('Error loading tickets', error);
      }
    );
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.loadTickets();  
    });
  }
  
  ajouterTicket() {
    window.location.href = '/add-ticket'
  }

  filterTickets(): void {
    this.filteredTickets = this.tickets.filter(ticket =>
      ticket.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
