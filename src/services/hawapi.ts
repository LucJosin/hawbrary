import { API_URL } from '@/lib/constants';
import type {
  ActorModel,
  CharacterModel,
  EpisodeModel,
  HawAPIClient,
  LocationModel,
  OverviewModel,
  Pageable,
  SeasonModel,
} from '@hawapi/js-sdk';
import { HawAPIOptions, createClient } from '@hawapi/js-sdk';

/**
 * Disable 'inMemoryCache' to use internal cache from SWR
 */
const options = new HawAPIOptions({
  inMemoryCache: false,
  endpoint: API_URL,
  size: 12,
});

const hawapi: HawAPIClient = createClient(options);

export async function setLanguage(language: string) {
  await hawapi.setLanguage(language);
}

export async function getOverview() {
  return await hawapi.getOverview<OverviewModel>();
}

export async function getAllActors(pageable?: Pageable) {
  return await hawapi.getAll<ActorModel>('actors', null, pageable);
}

export async function getSingleActor(uuid: string) {
  return await hawapi.getBy<ActorModel>('actors', uuid);
}

export async function getAllCharacters(pageable?: Pageable) {
  return await hawapi.getAll<CharacterModel>('characters', null, pageable);
}

export async function getSingleCharacter(uuid: string) {
  return await hawapi.getBy<CharacterModel>('characters', uuid);
}

export async function getAllSeasons(pageable?: Pageable) {
  return await hawapi.getAll<SeasonModel>('seasons', null, pageable);
}

export async function getSingleSeason(uuid: string) {
  return await hawapi.getBy<SeasonModel>('seasons', uuid);
}

export async function getAllEpisodes(pageable?: Pageable) {
  return await hawapi.getAll<EpisodeModel>('episodes', null, pageable);
}

export async function getSingleEpisode(uuid: string) {
  return await hawapi.getBy<EpisodeModel>('episodes', uuid);
}

export async function getAllLocations(pageable?: Pageable) {
  return await hawapi.getAll<LocationModel>('locations', null, pageable);
}

export async function getSingleLocation(uuid: string) {
  return await hawapi.getBy<LocationModel>('locations', uuid);
}
