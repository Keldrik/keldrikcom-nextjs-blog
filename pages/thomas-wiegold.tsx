import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <Layout>
      <div className="pt-6 pb-16 text-lg">
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
      </div>
    </Layout>
  );
};

export default About;
