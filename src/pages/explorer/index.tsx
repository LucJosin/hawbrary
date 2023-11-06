import Banner from '@/components/core/Banner';
import { Card } from '@/components/core/Card';
import FallbackText from '@/components/core/FallbackText';
import { Link } from '@/components/core/Link';
import Loading from '@/components/core/Loading';
import Row from '@/components/data/Row';
import { APICount } from '@/components/templates/APICount';
import Layout from '@/layout/Layout';
import { getDetailsUrl } from '@/lib/url';
import { getGender } from '@/lib/utils';
import {
  getAllActors,
  getAllCharacters,
  getAllEpisodes,
  getAllGames,
  getAllLocations,
  getAllSeasons,
  getOverview,
} from '@/services/hawapi';
import styles from '@/styles/ExplorerPage.module.css';
import useSWR from 'swr';

export default function ExplorerPage() {
  return (
    <Layout>
      <OverviewSection />

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

      <Row title="Games" maxColumns="auto-fill">
        <GameSection />
      </Row>
    </Layout>
  );
}

function OverviewSection() {
  const { data, error, isLoading } = useSWR(`overview`, getOverview);

  if (error) return <FallbackText />;
  if (isLoading || !data?.data) return <Loading />;

  const dataCount = data.data.data_count;
  return (
    <div className={styles.banner}>
      <Banner
        title={data.data.title}
        description={data.data.description}
        thumbnail={data.data.thumbnail}
      />

      <APICount dataCount={dataCount} />
    </div>
  );
}

function SeasonSection() {
  const { data, error, isLoading } = useSWR('seasons', getAllSeasons);

  if (error) return <FallbackText />;
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
  const { data, error, isLoading } = useSWR('episodes?page=1', getAllEpisodes);

  if (error) return <FallbackText />;
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
  const { data, error, isLoading } = useSWR('actors?page=1', getAllActors);

  if (error) return <FallbackText />;
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
            description={[
              `Nationality: ${actor.nationality}`,
              `Birth Date: ${actor.birth_date}`,
            ]}
            thumbnail={actor.thumbnail}
          />
        );
      })}
    </>
  );
}

function CharacterSection() {
  const { data, error, isLoading } = useSWR(
    'characters?page=1',
    getAllCharacters
  );

  if (error) return <FallbackText />;
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
            description={[
              `Gender: ${getGender(character.gender)}`,
              `Birth Date: ${character.birth_date}`,
            ]}
            thumbnail={character.thumbnail}
          />
        );
      })}
    </>
  );
}

function LocationSection() {
  const { data, error, isLoading } = useSWR(
    'locations?page=1',
    getAllLocations
  );

  if (error) return <FallbackText />;
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

function GameSection() {
  const { data, error, isLoading } = useSWR('games', getAllGames);

  if (error) return <FallbackText />;
  if (isLoading) return <Loading />;

  return (
    <>
      {data?.data?.map((season, key) => {
        return (
          <Card.Vertical
            key={key}
            title={season.name}
            description={season.description}
            thumbnail={season.thumbnail}
          >
            <Link.Primary
              href={getDetailsUrl('games', season.uuid)}
              name="See more"
              isLocal={true}
            />
          </Card.Vertical>
        );
      })}
    </>
  );
}
