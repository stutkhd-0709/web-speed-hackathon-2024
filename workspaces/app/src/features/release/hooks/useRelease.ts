import useSWR, { unstable_serialize } from 'swr';

import { releaseApiClient } from '../apiClient/releaseApiClient';

export function useRelease(prefetchedData: any, ...[options]: Parameters<typeof releaseApiClient.fetch>) {
  const ssrKey: string = unstable_serialize(releaseApiClient.fetch$$key(options))
  const targetData = prefetchedData[ssrKey]

  return useSWR(releaseApiClient.fetch$$key(options), releaseApiClient.fetch, { fallbackData: targetData, suspense: true });
}