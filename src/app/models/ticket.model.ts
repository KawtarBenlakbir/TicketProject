export interface Ticket {
    ticketId: number;                    // Unique identifier for each ticket
    description: string;            // Short summary of the ticket issue
    status: string;      // Status can only be 'Open' or 'Closed'
    dateCreated: Date;              // The date the ticket was created
  }