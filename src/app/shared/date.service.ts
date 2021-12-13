import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  getFormatedRelativeDate(date: Date | undefined | null): string {
    if (!date) {
      return '';
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (today.getTime() - date.getTime() < 86400000) {
      const day = 'вчера в ';
      return (
        day +
        date.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    } else if (today.getTime() - date.getTime() <= 0) {
      const day = 'сегодня в ';
      return (
        day +
        date.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }

    const time = date.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
    });

    const dateAndMonth = date.toLocaleDateString(undefined, {
      day: 'numeric',
      month: 'long',
    });

    return dateAndMonth + ' в ' + time;
  }

  //getday с 0  до 6
}
