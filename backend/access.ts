// At it's simplest, the access control returns a yes or no value depending on the users session

import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
  // session come from CONTEXT
  return !!session;
}

const generatedPermission = Object.fromEntries(
  permissionsList.map(permission => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

// Permissions check if someone meets a criteria - yes or no.
export const permissions = {
  ...generatedPermission,
  // //OR add additional rules
  // isAwersome({ session }: ListAccessArgs): boolean {
  //   return session?.data.name.includes('wes');
  // },
};


// Rule based function