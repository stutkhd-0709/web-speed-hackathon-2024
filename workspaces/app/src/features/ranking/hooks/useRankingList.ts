import useSWR, { unstable_serialize } from 'swr';

import { rankingApiClient } from '../apiClient/rankingApiClient';

export function useRankingList(prefetchedData: any, ...[options]: Parameters<typeof rankingApiClient.fetchList>) {
  const ssrKey: string = unstable_serialize(rankingApiClient.fetchList$$key(options))
  const targetData = prefetchedData[ssrKey]

  return useSWR(rankingApiClient.fetchList$$key(options), rankingApiClient.fetchList, { fallbackData: targetData, suspense: true });
}
