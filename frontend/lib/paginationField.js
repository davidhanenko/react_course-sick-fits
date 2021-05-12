import { PAGINATION_QUERY } from '../components/Pagination';

// READ => MERGE => READ

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we will take care of everything
    read(existing = [], { args, cache }) {
      // console.log(existing, args, cache);
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing values & filter undefined values
      const items = existing.slice(skip, skip + first).filter((x) => x);

      // if we are on the last page or there are not enought items to fill the page, just send what we have
      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // We don't habe any items, we must go to the network to fetch them
        return false;
      }

      // if there are items - just return them from cashe
      if (items.length) {
        // console.log(
        //   `There are ${items.length} items in the cache. Gonna send them to apollo`
        // );
        return items;
      }

      return false; // falback to network

      // First thing it does, it asks the read function for those items
      // Wecan do 2 things:
      // 1st - return the items because they are already in the cache
      // 2nd - return false from here (network requestr)
    },
    merge(existing, incoming, { args }) {
      // This runs when the Apollo client comes back from the network with our products

      const { skip, first } = args;

      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      // console.log(merged);
      // Finally we return merged items from cache
      return merged;
    },
  };
}
