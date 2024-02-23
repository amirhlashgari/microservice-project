import { Publisher, Subjects, TicketUpdatedEvent } from '@{{OrganizationName}}/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
