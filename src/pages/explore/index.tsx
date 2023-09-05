import Banner from '@/components/core/Banner';
import { Card } from '@/components/core/Card';
import { Link } from '@/components/core/Link';
import { Row } from '@/components/data/Row';
import { Fallback } from '@/components/templates/Fallback';
import Layout from '@/layout/Layout';
import { getDetailsUrl } from '@/lib/url';
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
  return (
    <Layout>
      <BannerSection />
      <SeasonSection />
      <EpisodeSection />
      <ActorSection />
      <CharacterSection />
      <LocationSection />
    </Layout>
  );
}

function BannerSection() {
  const { data, error, isLoading } = useSWR(`overview`, getOverview);

  return (
    <div className={styles.banner}>
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        <Banner
          title={data?.data?.title ?? ''}
          description={data?.data?.description ?? ''}
          thumbnail={data?.data?.thumbnail ?? ''}
        />
      </Fallback.Root>
    </div>
  );
}

function SeasonSection() {
  const { data, error, isLoading } = useSWR('seasons', getAllSeasons);

  return (
    <Row.Horizontal title="Seasons">
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        {data?.data?.map((season, key) => {
          return (
            <Card.Vertical
              key={key}
              title={season.title}
              description={season.description}
              thumbnail={season.thumbnail}
            >
              <Link.Primary
                href={getDetailsUrl('seasons', season.uuid)}
                name="See more"
                isLocal={true}
              />
              <Link.Secondary
                href={'/explore/episodes/details/?season_uuid=' + season.uuid}
                name="Episodes"
                isLocal={true}
              />
            </Card.Vertical>
          );
        })}
      </Fallback.Root>
    </Row.Horizontal>
  );
}

function EpisodeSection() {
  const { data, error, isLoading } = useSWR('episodes', getAllEpisodes);

  return (
    <Row.Horizontal title="Episodes">
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        {data?.data?.slice(0, 4).map((episode, key) => {
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
  );
}

function ActorSection() {
  const { data, error, isLoading } = useSWR('actors', getAllActors);

  return (
    <Row.Horizontal title="Actors">
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        {data?.data?.slice(0, 3).map((actor, key) => {
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
  );
}

function CharacterSection() {
  const { data, error, isLoading } = useSWR('characters', getAllCharacters);

  return (
    <Row.Horizontal title="Characters">
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        {data?.data?.slice(0, 4).map((character, key) => {
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
  );
}

function LocationSection() {
  const { data, error, isLoading } = useSWR('locations', getAllLocations);

  return (
    <Row.Horizontal title="Locations" maxColumns="2">
      <Fallback.Root
        isLoading={isLoading}
        hasData={!(error || data?.status !== 200)}
        fallback={<Fallback.Text />}
      >
        {data?.data?.slice(0, 4).map((location, key) => {
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
  );
}
