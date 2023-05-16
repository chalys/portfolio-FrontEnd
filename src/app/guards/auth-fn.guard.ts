import { CanActivateFn } from "@angular/router";
import { Inject, inject } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService} from "../service/token.service";

export const authGuardFn: CanActivateFn = () =>{
    const tokenService = inject (TokenService);
    const routerService = inject (Router);

    const token = tokenService.getToken();

    if (!token){
        routerService.navigate(['/login']);
        return false;
    }
    return true;
}