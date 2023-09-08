import Banner from '@/components/core/Banner';
import { Card } from '@/components/core/Card';
import { Link } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import Row from '@/components/data/Row';
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
import styles from '@/styles/ExplorerPage.module.css';
import useSWR from 'swr';

export default function ExplorerPage() {
  return (
    <Layout>
      <BannerSection />

      <Row title="Seasons">
        <SeasonSection />
      </Row>

      <Row title="Episodes">
        <EpisodeSection />
      </Row>

      <Row title="Actors">
        <ActorSection />
      </Row>

      <Row title="Characters">
        <CharacterSection />
      </Row>

      <Row title="Locations" maxColumns="2">
        <LocationSection />
      </Row>
    </Layout>
  );
}

function BannerSection() {
  const { data, error, isLoading } = useSWR(`overview`, getOverview);

  if (error) return <Fallback.Text />;
  if (isLoading || !data?.data) return <Loading />;

  return (
    <div className={styles.banner}>
      <Banner
        title={data.data.title}
        description={data.data.description}
        thumbnail={data.data.thumbnail}
      />
    </div>
  );
}

function SeasonSection() {
  const { data, error, isLoading } = useSWR('seasons', getAllSeasons);

  if (error) return <Fallback.Text />;
  if (isLoading) return <Loading />;

  return (
    <>
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
              href={`/explorer/episodes/?season_uuid=${
                season.uuid
              }&season_num=${key + 1}`}
              name="Episodes"
              isLocal={true}
            />
          </Card.Vertical>
        );
      })}
    </>
  );
}

function EpisodeSection() {
  const { data, error, isLoading } = useSWR('episodes', getAllEpisodes);

  if (error) return <Fallback.Text />;
  if (isLoading) return <Loading />;

  return (
    <>
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
    </>
  );
}

function ActorSection() {
  const { data, error, isLoading } = useSWR('actors', getAllActors);

  if (error) return <Fallback.Text />;
  if (isLoading) return <Loading />;

  return (
    <>
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
    </>
  );
}

function CharacterSection() {
  const { data, error, isLoading } = useSWR('characters', getAllCharacters);

  if (error) return <Fallback.Text />;
  if (isLoading) return <Loading />;

  return (
    <>
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
    </>
  );
}

function LocationSection() {
  const { data, error, isLoading } = useSWR('locations', getAllLocations);

  if (error) return <Fallback.Text />;
  if (isLoading) return <Loading />;

  return (
    <>
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
    </>
  );
}
