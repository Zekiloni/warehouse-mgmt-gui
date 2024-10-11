import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    loadComponent: () =>
      import('./pages/main-page').then(m => m.MainPageComponent)
  },
  {
    path: 'customer',
    title: 'Customer Management',
    loadComponent: () =>
      import('./pages/customer-page').then(m => m.CustomerPageComponent),
    children: [
      {
        path: 'search',
        title: 'Search Customer',
        loadComponent: () =>
          import('./pages/search-customer-page').then(m => m.SearchCustomerPageComponent)
      },
      {
        path: 'create',
        title: 'Create Customer',
        loadComponent: () =>
          import('./pages/create-customer-page').then(m => m.CreateCustomerPageComponent)
      }
    ]
  }
];
