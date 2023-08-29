import Banner from '@/components/core/Banner';
import { Card } from '@/components/core/Card';
import { Link } from '@/components/core/Link';
import { Row } from '@/components/data/Row';
import { Fallback } from '@/components/templates/Fallback';
import Layout from '@/layout/Layout';
import {
  getAllActors,
  getAllCharacters,
  getAllEpisodes,
  getAllLocations,
  getAllSeasons,
  getOverview,
} from '@/services/hawapi';
import styles from '@/styles/Explore.module.css';
import useSWR from 'swr';

export default function Explore() {
  const {
    data: overviewData,
    error: overviewError,
    isLoading: overviewIsLoading,
  } = useSWR(`overview`, getOverview);
  const {
    data: seasonData,
    error: seasonError,
    isLoading: seasonIsLoading,
  } = useSWR('seasons', getAllSeasons);
  const {
    data: episodeData,
    error: episodeError,
    isLoading: episodeIsLoading,
  } = useSWR('episodes', getAllEpisodes);
  const {
    data: actorData,
    error: actorError,
    isLoading: actorIsLoading,
  } = useSWR('actors', getAllActors);
  const {
    data: characterData,
    error: characterError,
    isLoading: characterIsLoading,
  } = useSWR('characters', getAllCharacters);
  const {
    data: locationData,
    error: locationError,
    isLoading: locationIsLoading,
  } = useSWR('locations', getAllLocations);

  return (
    <Layout>
      <div className={styles.banner}>
        <Fallback.Root
          isLoading={overviewIsLoading}
          hasData={!(overviewError || overviewData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          <Banner
            title={overviewData?.data?.title ?? ''}
            description={overviewData?.data?.description ?? ''}
            thumbnail={overviewData?.data?.thumbnail ?? ''}
          />
        </Fallback.Root>
      </div>

      <Row.Horizontal title="Seasons">
        <Fallback.Root
          isLoading={seasonIsLoading}
          hasData={!(seasonError || seasonData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          {seasonData?.data?.map((season, key) => {
            return (
              <Card.Vertical
                key={key}
                title={season.title}
                description={season.description}
                thumbnail={season.thumbnail}
              >
                <Link.Primary
                  href={'/explore/seasons/details/?uuid=' + season.uuid}
                  name="See more"
                />
                <Link.Secondary
                  href={'/explore/episodes/details/?season_uuid=' + season.uuid}
                  name="Episodes"
                />
              </Card.Vertical>
            );
          })}
        </Fallback.Root>
      </Row.Horizontal>

      <Row.Horizontal title="Episodes">
        <Fallback.Root
          isLoading={episodeIsLoading}
          hasData={!(episodeError || episodeData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          {episodeData?.data?.slice(0, 4).map((episode, key) => {
            return (
              <Card.Simple
                key={key}
                uuid={episode.uuid}
                target="episodes"
                title={episode.title}
                description={episode.description}
                thumbnail={episode.thumbnail}
              />
            );
          })}
        </Fallback.Root>
      </Row.Horizontal>

      <Row.Horizontal title="Actors" maxColumns="3">
        <Fallback.Root
          isLoading={actorIsLoading}
          hasData={!(actorError || actorData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          {actorData?.data?.slice(0, 3).map((actor, key) => {
            return (
              <Card.Person
                key={key}
                uuid={actor.uuid}
                target="actors"
                name={`${actor.first_name} ${actor.last_name}`}
                description={['Example: 1', 'Example: 2']}
                thumbnail={actor.thumbnail}
              />
            );
          })}
        </Fallback.Root>
      </Row.Horizontal>

      <Row.Horizontal title="Characters" maxColumns="4">
        <Fallback.Root
          isLoading={characterIsLoading}
          hasData={!(characterError || characterData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          {characterData?.data?.slice(0, 4).map((character, key) => {
            return (
              <Card.Person
                key={key}
                uuid={character.uuid}
                target="characters"
                name={`${character.first_name} ${character.last_name}`}
                description={['Example: 1', 'Example: 2']}
                thumbnail={character.thumbnail}
              />
            );
          })}
        </Fallback.Root>
      </Row.Horizontal>

      <Row.Horizontal title="Locations" maxColumns="2">
        <Fallback.Root
          isLoading={locationIsLoading}
          hasData={!(locationError || locationData?.status !== 200)}
          fallback={<Fallback.Text />}
        >
          {locationData?.data?.slice(0, 4).map((location, key) => {
            return (
              <Card.Horizontal
                key={key}
                uuid={location.uuid}
                target="locations"
                title={location.name}
                description={location.description}
                thumbnail={location.thumbnail}
              />
            );
          })}
        </Fallback.Root>
      </Row.Horizontal>
    </Layout>
  );
}
