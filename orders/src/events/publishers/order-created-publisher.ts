import { Publisher, OrderCreatedEvent, Subjects } from '@{{OrganizationName}}/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
