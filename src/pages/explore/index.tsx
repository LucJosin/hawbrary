import Banner from '@/components/core/Banner';
import { Card } from '@/components/core/Card';
import { Link } from '@/components/core/Link';
import { Row } from '@/components/data/Row';
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
      <Row.Horizontal title="Seasons">
        <Card.Vertical
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdKqL.jpg"
        >
          <Link.Primary href="" name="See more" />
          <Link.Secondary href="" name="Episodes" />
        </Card.Vertical>
        <Card.Vertical
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdKqL.jpg"
        >
          <Link.Primary href="" name="See more" />
          <Link.Secondary href="" name="Episodes" />
        </Card.Vertical>
        <Card.Vertical
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdKqL.jpg"
        >
          <Link.Primary href="" name="See more" />
          <Link.Secondary href="" name="Episodes" />
        </Card.Vertical>
        <Card.Vertical
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdKqL.jpg"
        >
          <Link.Primary href="" name="See more" />
          <Link.Secondary href="" name="Episodes" />
        </Card.Vertical>
      </Row.Horizontal>
      <Row.Horizontal title="Episodes">
        <Card.Simple
          title="Lorem"
          description="On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card.Simple
          title="Lorem"
          description="Hopper consegue entrar no laboratório enquanto Nancy e Jonathan confrontam as forças que levaram Will. Os meninos perguntam ao Sr. Clarke como se vai para outra dimensão."
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card.Simple
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
        <Card.Simple
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xdC1O.jpg"
        />
      </Row.Horizontal>
      <Row.Horizontal title="Actors" maxColumns="3">
        <Card.Person
          uuid="ef39b8b3-1662-5d7c-b618-841d60572218"
          target="actors"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
        <Card.Person
          uuid="9a9bf1f1-2a04-5c81-b3b8-5c1428e411d4"
          target="actors"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
        <Card.Person
          uuid="2d0090b8-fd7f-5fbc-b050-debc3f2005c1"
          target="actors"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xmI5e.png"
        />
      </Row.Horizontal>
      <Row.Horizontal title="Characters" maxColumns="3">
        <Card.Person
          uuid="cd5b7cae-7ac7-5836-a310-3cdef93d306e"
          target="characters"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
        <Card.Person
          uuid="928a8530-b342-5088-bfd1-7a8cfcfdab54"
          target="characters"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
        <Card.Person
          uuid="d86f764f-1859-5b08-84b7-edc0beb6471d"
          target="characters"
          name="Lorem"
          description={['Example: 1', 'Example: 2']}
          thumbnail="https://s6.imgcdn.dev/xm7Sq.jpg"
        />
      </Row.Horizontal>
      <Row.Horizontal title="Locations" maxColumns="2">
        <Card.Horizontal
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <Card.Horizontal
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <Card.Horizontal
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
        <Card.Horizontal
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deserunt enim sequi ratione, praesentium cum illum necessitatibus ipsa? Cumque reprehenderit autem assumenda, quasi optio totam non. Nobis voluptatibus fugit quam?"
          thumbnail="https://s6.imgcdn.dev/xe76H.jpg"
        />
      </Row.Horizontal>
    </Layout>
  );
}
