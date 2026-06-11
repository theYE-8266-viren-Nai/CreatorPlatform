// lib/products/utils.ts
export function getMostRecentProduct<T extends { approvedAt: Date | null }>(products: T[]): T | null {
  return products.reduce((latest, current) => {
    if (!current.approvedAt) return latest;
    if (!latest?.approvedAt) return current;
    return current.approvedAt > latest.approvedAt ? current : latest;
  }, null as T | null);
}

export function formatLaunchDate(date: Date | null | undefined): string {
  if (!date) {
    return "Not yet launched";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}