import { inject, Injectable } from '@angular/core';
import { ApplicationContextService } from '../../state/application-context.service';
import { CACHE_KEY_NAMES } from '../../shared/shared.enums';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { ServerInteractionService } from './server-interaction.service';
import { OPERATIONS } from '../../shared/operations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server:ServerInteractionService=inject(ServerInteractionService);

  constructor() { }

  login(){
    return this.server.processGetRequest(OPERATIONS.LOGIN);
  }

}
