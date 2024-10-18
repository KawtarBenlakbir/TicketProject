import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../models/ticket.model';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ticket-form',
  imports: [ReactiveFormsModule],
  templateUrl: './ticket-form.component.html',
  //styleUrls: ['./ticket-form.component.scss'],
})
export class TicketFormComponent implements OnInit {
  ticketForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      status: ['Open', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const newTicket: Ticket = {
        ticketId: 0,  // Temporarily 0 for creation
        description: this.ticketForm.get('description')?.value,
        status: this.ticketForm.get('status')?.value,
        dateCreated: new Date(),
      };

      this.ticketService.addTicket(newTicket).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
