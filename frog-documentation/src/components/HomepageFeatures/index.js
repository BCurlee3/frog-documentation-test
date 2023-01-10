import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tim Trefry',
    Svg: require('@site/static/img/Tim.svg').default,
    description: (
      <><div>
        <>
          C.E.O
        </>
      </div><div>
          <>
          Providing Service Since 1987
          </>
        </div></>
    ),
  },
  {
    title: 'Jason Leach',
    Svg: require('@site/static/img/Jason.svg').default,
    description: (
      <><div>
        <>
          C.O.O
        </>
      </div><div>
          <>
          Providing Service Since 2005
          </>
        </div></>
    ),
  },
  {
    title: 'Mal Dhami',
    Svg: require('@site/static/img/Mal.svg').default,
    description: (
      <><div>
        <>
          C.F.O
        </>
      </div><div>
          <>
          Providing Service Since 2000
          </>
        </div></>
    ),
  },
  {
    title: 'Ashleigh Trefry',
    Svg: require('@site/static/img/Ashleigh.svg').default,
    description: (
      <><div>
        <>
          Office Manager
        </>
      </div><div>
          <>
          Providing Service Since 2014
          </>
        </div></>
    ),
  },
  {
  title: 'David Dugle',
  Svg: require('@site/static/img/daviddugle.svg').default,
  description: (
    <><div>
    <>
      Software Developer
    </>
  </div><div>
      <>
      Providing Service Since 2021
      </>
    </div></>
  ),
},
{
  title: 'John Salva',
  Svg: require('@site/static/img/johnsalva.svg').default,
  description: (
    <><div>
    <>
      Software Developer
    </>
  </div><div>
      <>
      Providing Service Since 2022
      </>
    </div></>
  ),
},
{
  title: 'Brian Curlee',
  Svg: require('@site/static/img/briancurlee.svg').default,
  description: (
    <><div>
    <>
      Software Developer
    </>
  </div><div>
      <>
      Providing Service Since 2022
      </>
    </div></>
  ),
},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
