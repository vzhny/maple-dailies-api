import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { omit, isArray } from 'lodash';
import { AppContants } from 'src/constants/app.contants';

@Injectable()
export class RemoveAuditInfoInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (isArray(data)) {
          return data.map((datum) => omit(datum, AppContants.AUDIT_FIELDS));
        } else {
          return omit(data, AppContants.AUDIT_FIELDS);
        }
      }),
    );
  }
}
