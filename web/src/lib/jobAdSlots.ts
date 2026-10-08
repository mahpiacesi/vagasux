/** 1-based job counts after which the list shows an ad. */
export function jobAdAfterCounts(jobCount: number): number[] {
  if (jobCount <= 0) return []
  if (jobCount < 8) return [jobCount]
  const after: number[] = []
  for (let count = 8; count <= jobCount; count += 10) after.push(count)
  return after
}
