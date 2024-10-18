import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket.model';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  //styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  ticket: Ticket = { ticketId: 0, description: '', status: '', dateCreated: new Date ()};
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTicket();
  }

  loadTicket(): void {
    this.ticketService.getTicket(this.id).subscribe(
      (data: Ticket) => {
        this.ticket = data;
      },
      (error) => {
        console.error('Error fetching ticket', error);
      }
    );
  }

  saveTicket(): void {
    this.ticketService.updateTicket(this.id, this.ticket).subscribe(
      () => {
        this.router.navigate(['/tickets']);
      },
      (error) => {
        console.error('Error updating ticket', error);
      }
    );
  }
}
