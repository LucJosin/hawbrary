import type {
  ActorModel,
  CharacterModel,
  EpisodeModel,
  HawAPIClient,
  LocationModel,
  OverviewModel,
  SeasonModel,
} from '@hawapi/js-sdk';
import { HawAPIOptions, createClient } from '@hawapi/js-sdk';

const options = new HawAPIOptions({
  endpoint: 'http://localhost:8080/api',
});

let hawapi: HawAPIClient = createClient(options);

export function setLanguage(language: string) {
  options.language = language;
  hawapi = createClient(options);
}

export async function getOverview() {
  return await hawapi.getOverview<OverviewModel>('en-US');
}

export async function getAllActors() {
  return await hawapi.getAll<ActorModel>('actors');
}

export async function getSingleActor(uuid: string) {
  return await hawapi.getBy<ActorModel>('actors', uuid);
}

export async function getAllCharacters() {
  return await hawapi.getAll<CharacterModel>('characters');
}

export async function getSingleCharacter(uuid: string) {
  return await hawapi.getBy<CharacterModel>('characters', uuid);
}

export async function getAllSeasons() {
  return await hawapi.getAll<SeasonModel>('seasons');
}

export async function getSingleSeason(uuid: string) {
  return await hawapi.getBy<SeasonModel>('seasons', uuid);
}

export async function getAllEpisodes() {
  return await hawapi.getAll<EpisodeModel>('episodes', {});
}

export async function getSingleEpisode(uuid: string) {
  return await hawapi.getBy<EpisodeModel>('episodes', uuid);
}

export async function getAllLocations() {
  return await hawapi.getAll<LocationModel>('locations', {});
}

export async function getSingleLocation(uuid: string) {
  return await hawapi.getBy<LocationModel>('locations', uuid);
}
