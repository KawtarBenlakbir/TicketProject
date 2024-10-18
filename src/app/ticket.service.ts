import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from './models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:5273/api/tickets';  // URL de ton API .NET

  constructor(private http: HttpClient) { }

  // Lire tous les tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/all`);
  }

  // Lire un ticket par ID
  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouveau ticket
  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.apiUrl}/create`, ticket);
  }

  // Mettre à jour un ticket existant
  updateTicket(id: number,ticket: Ticket): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, ticket);
  }

  // Supprimer un ticket
  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
