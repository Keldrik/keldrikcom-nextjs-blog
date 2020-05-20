import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import Link from 'next/link';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Thomas Wiegold - Selbständiger Programmierer aus Münster - Keldrik.com
          - Javascript, Node.js, React usw...
        </title>
        <meta
          name="description"
          content="Eine kurze Beschreibung meiner Arbeit als selbstständiger Programmierer. Was interessiert mich und was habe ich gemacht."
        />
        <link href="https://www.keldrik.com/thomas-wiegold" rel="canonical" />
      </Head>
      <div className="pt-6 pb-16">
        <h1 className="text-3xl uppercase">Thomas Wiegold</h1>
        <p className="pt-4 text-left">
          Mein Name ist Thomas Wiegold, im Internet kennt man mich auch als der
          Keldrik. Ich wurde 1983 in der schönen Stadt Münster geboren und bin
          seit 2011 als selbständiger Programmierer tätig.
        </p>
        <p className="text-left pt-2">
          Ich beschäftige mich bei meiner Arbeit intensiv mit der
          Programmiersprache C# und den .NET Framework von Microsoft. Noch bevor
          die ersten Windows Phone Geräte auf den Markt gekommen sind, habe ich
          mich mit dem mobilen Betriebssystem auseinandergesetzt und kenne es
          mittlerweile wie meine Westentasche. Wenn ich Daten im Netz verteilen
          will, für eine Webseite oder eine App, dann mache ich das bevorzugt
          mit ASP.NET MVC und WebAPI, die ich in den letzten Jahren schon für
          diverse Projekte erfolgreich eingesetzt habe. Für meine Spiele
          verwende ich gerne die Unity Engine, die mir mit meiner Erfahrung mit
          dem XNA Framework und der Möglichkeit C# als Script-Sprache zu
          benutzen, von Anfang an vertraut war. Außerdem programmiere ich in
          letzter Zeit auch immer häufiger mal was mit JavaScript und baue wenn
          es erforderlich ist schöne Sachen mit HTML5.
        </p>
        <p className="text-left pt-2">
          Über gute Nachrichten freue ich mich immer. Wenn Sie Kontakt zwecks
          einer Zusammenarbeit suchen oder eine Frage haben sollten, dann
          schreiben Sie mir doch mal. Das ist ganz einfach mit dem
          <Link href="/kontakt">
            <a className="font-semibold"> Kontaktformular</a>
          </Link>
          .
        </p>
        <h3 className="pt-4 pb-2 text-center text-2xl uppercase">
          FRUIT SAFARI
        </h3>
        <div className="flex justify-around flex-wrap md:flex-no-wrap">
          <div className="flex flex-col w-7/12 md:w-1/4 md:mr-6">
            <img
              className="w-full h-auto"
              src="/img/about/fruit-safari-app.png"
              alt="Fruit Safari - Match 3 Game Android"
            />
            <a href="https://play.google.com/store/apps/details?id=com.ThomasWiegold.FruitSafari">
              <img
                className="w-full h-auto mt-4"
                src="/img/about/google-play-download.png"
                alt="Fruit Safari - Match 3 Game Android"
              />
            </a>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-auto flex-grow">
            <div className="w-full relative aspect-16x9">
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/gOUA9wqy8Ko"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <h3 className="pt-8 pb-4 text-center text-2xl uppercase">
          Windows Phone Apps
        </h3>
        <div className="flex justify-around flex-wrap md:flex-no-wrap">
          <div className="flex flex-col w-7/12 md:w-1/4 md:mr-6">
            <img
              className="w-full h-auto"
              src="/img/about/pink_galaxy_windows_phone_tile_logo.jpg"
              alt="Pink Galaxy Game Windows Phone"
            />
            <h4 className="text-xl uppercase font-semibold">Pink Galaxy</h4>
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-auto flex-grow">
            <div className="w-full relative aspect-16x9">
              <iframe
                className="absolute top-0 left-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/8uOn7SG6rik"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div>
            <img
              className="w-full h-auto"
              src="/img/about/my_q_windows_phone_tile_logo.jpg"
              alt="My Q Game Windows Phone"
            />
            <h4 className="text-lg uppercase font-semibold">My Q</h4>
          </div>
          <div>
            <img
              className="w-full h-auto"
              src="/img/about/schlauberger_2_windows_phone_tile_logo.jpg"
              alt="Schlauberger 2 Quiz Spiel Windows Phone"
            />
            <h4 className="text-lg uppercase font-semibold">Schlauberger 2</h4>
          </div>
          <div>
            <img
              className="w-full h-auto"
              src="/img/about/schlauberger_windows_phone_tile_logo.jpg"
              alt="Schlauberger Quiz Spiel Windows Phone"
            />
            <h4 className="text-lg uppercase font-semibold">Schlauberger</h4>
          </div>
        </div>
        <h3 className="pt-8 pb-4 text-center text-2xl uppercase">Webseiten</h3>
        <div className="flex flex-wrap md:flex-no-wrap">
          <div className="w-full md:w-1/2 md:mr-6">
            <img
              className="w-full h-auto"
              src="/img/about/podlistde-screenshot.jpg"
              alt="Podlist.de Podcast Verzeichnis Webseite"
            />
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-auto flex-grow">
            <a href="http://podlist.de">
              <h4 className="text-lg uppercase font-semibold">Podlist.de</h4>
            </a>
            <p>Podlist ist ein deutsches Podcast-Verzeichnis.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
