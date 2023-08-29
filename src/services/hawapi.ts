import type {
  ActorModel,
  CharacterModel,
  EpisodeModel,
  HawAPIClient,
  LocationModel,
  OverviewModel,
  RequestResult,
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

export async function getAllActors(
  size?: string
): Promise<RequestResult<ActorModel[]>> {
  return await hawapi.getAll<ActorModel>('actors', { ...(size && { size }) });
}

export async function getSingleActor(
  uuid: string
): Promise<RequestResult<ActorModel>> {
  return await hawapi.getBy<ActorModel>('actors', uuid);
}

export async function getAllCharacters(
  size?: string
): Promise<RequestResult<CharacterModel[]>> {
  return await hawapi.getAll<CharacterModel>('characters', {
    ...(size && { size }),
  });
}

export async function getSingleCharacter(
  uuid: string
): Promise<RequestResult<CharacterModel>> {
  return await hawapi.getBy<CharacterModel>('characters', uuid);
}

export async function getAllSeasons(
  size?: string
): Promise<RequestResult<SeasonModel[]>> {
  return await hawapi.getAll<SeasonModel>('seasons', { ...(size && { size }) });
}

export async function getSingleSeason(
  uuid: string
): Promise<RequestResult<SeasonModel>> {
  return await hawapi.getBy<SeasonModel>('seasons', uuid);
}

export async function getAllEpisodes(
  size?: string
): Promise<RequestResult<EpisodeModel[]>> {
  return await hawapi.getAll<EpisodeModel>('episodes', {
    ...(size && { size }),
  });
}

export async function getSingleEpisode(
  uuid: string
): Promise<RequestResult<EpisodeModel>> {
  return await hawapi.getBy<EpisodeModel>('episodes', uuid);
}

export async function getAllLocations(
  size?: string
): Promise<RequestResult<LocationModel[]>> {
  return await hawapi.getAll<LocationModel>('locations', {
    ...(size && { size }),
  });
}

export async function getSingleLocation(
  uuid: string
): Promise<RequestResult<LocationModel>> {
  return await hawapi.getBy<LocationModel>('locations', uuid);
}
