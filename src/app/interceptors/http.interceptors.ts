import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadInterceptor } from './load.interceptor';

export const HttpInterceptors = [
	
	{provide: HTTP_INTERCEPTORS, useClass:LoadInterceptor, multi:true}
];