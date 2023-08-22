import Banner from '@/components/core/Banner';
import Card from '@/components/core/Card';
import HorizontalCard from '@/components/core/HorizontalCard';
import VerticalCard from '@/components/core/VerticalCard';
import CardRow from '@/components/data/CardRow';
import Layout from '@/layout/Layout';
import styles from '@/styles/Explore.module.css';

export default function Explore() {
  return (
    <Layout>
      <div className={styles.banner}>
        <Banner
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/2rdwu.jpg"
        />
      </div>
      <CardRow title="Seasons">
        <VerticalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/x3zIV.jpg"
          priButton="See more"
          priButtonHref=""
          secButton="Episodes"
          secButtonHref=""
        />
        <VerticalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/x3zIV.jpg"
          priButton="See more"
          priButtonHref=""
          secButton="Episodes"
          secButtonHref=""
        />
        <VerticalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/x3zIV.jpg"
          priButton="See more"
          priButtonHref=""
          secButton="Episodes"
          secButtonHref=""
        />
        <VerticalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/x3zIV.jpg"
          priButton="See more"
          priButtonHref=""
          secButton="Episodes"
          secButtonHref=""
        />
      </CardRow>
      <CardRow title="Episodes">
        <Card
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
      </CardRow>
      <CardRow title="Actors" maxColumns="3">
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
      </CardRow>
      <CardRow title="Characters" maxColumns="3">
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
        <Card
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
      </CardRow>
      <CardRow title="Locations" maxColumns="2">
        <HorizontalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <HorizontalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <HorizontalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <HorizontalCard
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
      </CardRow>
    </Layout>
  );
}
