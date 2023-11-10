export function getUuidFromHref(href: string): string | undefined {
  const split = href.split('/');
  return split.pop();
}

export function getDetailsUrlFromHref(
  target: string,
  href: string
): string | null {
  const uuid = getUuidFromHref(href);
  if (!uuid) return null;
  return getDetailsUrl(target, uuid ?? '');
}

export function getDetailsUrl(target: string, uuid: string): string {
  return `/explorer/${target}/details/?uuid=${uuid}`;
}
