export function getUuidFromHref(href: string): string | undefined {
  const split = href.split('/');
  return split.pop();
}
