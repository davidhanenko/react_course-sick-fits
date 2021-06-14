import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

// At it's simplest, the access control returns a yes or no value depending on the users session

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
// Rules can return a boolean - yes or no - or a filter which limits which products they can CRUD.

export const rules = {
  canManageProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    // 2. If not, do they own this product?
    return { user: { id: session.itemId } };
  },

  canOrder({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2. If not, do they own this item?
    return { user: { id: session.itemId } };
  },

  canManageOrderItems({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Can they manage Cart
    if (permissions.canManageCart({ session })) {
      return true;
    }
    // 2. If not, do they own this product | filter throw order -> user
    return { order: { user: { id: session.itemId } } };
  },

  canReadProducts({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageProducts({ session })) {
      return true; // They can read everything
    }
    // They should only see availiable products(based on status field)
    return { status: 'AVAILABLE' };
  },

  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    // 1. Do they have the permission of canManageProducts
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // 2. Otherwise they may only update themselves
    return { id: session.itemId };
  },
};
