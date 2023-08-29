export function getUuidFromHref(href: string): string | undefined {
  const split = href.split('/');
  return split.pop();
}

export function getDetailsUrlFromHref(target: string, href: string): string {
  const uuid = getUuidFromHref(href);
  return buildDetailsUrl(target, uuid ?? '');
}

export function buildDetailsUrl(target: string, uuid: string): string {
  return `/explore/${target}/details/uuid=${uuid}`;
}
