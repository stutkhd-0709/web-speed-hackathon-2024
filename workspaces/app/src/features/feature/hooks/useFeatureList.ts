import useSWR, { unstable_serialize } from 'swr';

import { featureApiClient } from '../apiClient/featureApiClient';

export function useFeatureList(prefetchedData: any, ...[options]: Parameters<typeof featureApiClient.fetchList>) {
  const ssrKey: string = unstable_serialize(featureApiClient.fetchList$$key(options))
  const targetData = prefetchedData[ssrKey]

  return useSWR(featureApiClient.fetchList$$key(options), featureApiClient.fetchList, { fallbackData: targetData, suspense: true });
}
