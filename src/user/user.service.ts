import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return [
      {
        id: 1,
        name: 'Arjun Khetia',
        email: 'john.doe@example.com',
      },
    ];
  }
}
