import { Subjects, Publisher, OrderCancelledEvent } from '@{{OrganizationName}}/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
