import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard'; // Asegúrate de que esto sea correcto

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard], // Agrega el guard como proveedor
    });
    guard = TestBed.inject(AuthGuard); // Inyecta el guard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Verifica que el guard fue creado
  });
});

