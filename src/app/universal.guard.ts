import { CanActivateFn } from '@angular/router';

export const universalGuard: CanActivateFn = (route, state) => {

  let result = false;
  if(sessionStorage.getItem("islogged")==='true'){
   result =true;
  }

  return result;
};
