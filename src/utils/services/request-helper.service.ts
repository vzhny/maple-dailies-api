import { Request } from 'express';
import { pick } from 'lodash';
import { AppUser } from 'src/auth/models/app-user.interface';

class RequestHelperService {
  getLoggedInUser(request: Request) {
    return pick(request.user, ['userId', 'username']) as AppUser;
  }
}

export const RequestHelper = new RequestHelperService();
