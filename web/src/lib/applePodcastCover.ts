export function isApplePodcastUrl(url: string): boolean {
  return /podcasts\.apple\.com\//i.test(url)
}

export function isApplePodcastCoverUrl(url: string): boolean {
  return /mzstatic\.com\/image\//i.test(url)
}
