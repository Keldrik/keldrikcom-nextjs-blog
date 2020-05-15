import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const Kontakt: NextPage<{ success?: boolean }> = ({ success }) => {
  return (
    <Layout>
      <Head>
        <title>
          Kontakt - Keldrik.com - Programmieren mit Javascript, Node.js, React
          usw...
        </title>
      </Head>
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-2xl uppercase">Kontakt</h1>
        {success ? (
          <div className="h-64 pt-6">
            <h3 className="text-2xl pt-6 text-center">Danke!</h3>
            <p className="pt-2 pb-4 text-lg text-center">
              Nachricht wurde gesendet!
            </p>
          </div>
        ) : (
          <form
            className="w-full mt-6 mb-4"
            action="https://api.staticforms.xyz/submit"
            method="post"
          >
            <input
              type="hidden"
              name="accessKey"
              value="2cae3d01-2043-462e-81e0-8820b81b7a66"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="https://www.keldrik.com/kontakt?success=true"
            />
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3 mb-2 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Nachricht
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <input
                  type="submit"
                  value="Senden"
                  className="bg-gray-900 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const success: boolean = context.query?.success ? true : false;
  return {
    props: {
      success,
    },
  };
};

export default Kontakt;
