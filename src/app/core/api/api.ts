export * from './customerApi.service';
import { CustomerApiService } from './customerApi.service';
export * from './itemApi.service';
import { ItemApiService } from './itemApi.service';
export * from './locationApi.service';
import { LocationApiService } from './locationApi.service';
export * from './orderApi.service';
import { OrderApiService } from './orderApi.service';
export const APIS = [CustomerApiService, ItemApiService, LocationApiService, OrderApiService];
