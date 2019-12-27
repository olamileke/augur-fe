import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadInterceptor } from './load.interceptor';
import { ErrorInterceptor } from './error.interceptor';

export const HttpInterceptors = [
	
	{provide: HTTP_INTERCEPTORS, useClass:LoadInterceptor, multi:true},
	{provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true}
];