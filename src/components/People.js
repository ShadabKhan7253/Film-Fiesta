import React from 'react';
import { useDynamicTitle } from '../hooks';

export const People = ({ people }) => {
  const imagePath = people.profile_path
    ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
    : `https://placehold.co/382x573?text=No\n Image `;

  useDynamicTitle(`Results for: ${people.title} | Film Fiesta`, 'Film Fiesta');
  return (
    <main>
      <div className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={imagePath} alt={people.name} />
        </div>
        <div className="max-w-2xl text-slate-800 dark:text-slate-50 max-md:px-5">
          <h1 className="text-5xl text-bold my-3 max-md:text-center max-md:text-4xl">
            {people.name}
          </h1>
          <p className="my-4">{people.biography}</p>

          <hr className="my-4" />
          <div className="relative overflow-x-auto">
            <h2 className="text-2xl">Personal Info:</h2>
            <table className="text-sm text-left rtl:text-right text-slate-800 dark:text-slate-50">
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                  >
                    Known For:
                  </th>
                  <td className="py-4">{people.known_for_department} </td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                  >
                    Gender:
                  </th>
                  <td className="py-4">{people.gender === 1 ? 'Female' : 'Male'}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                  >
                    Birthday:
                  </th>
                  <td className="py-4">{people.birthday} </td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                  >
                    Place of birth:
                  </th>
                  <td className="py-4">{people.place_of_birth}</td>
                </tr>

                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="py-4 font-medium text-slate-800 whitespace-nowrap dark:text-slate-50"
                  >
                    IMDB Code:
                  </th>
                  <td className="py-4 underline">
                    <a
                      href={`https://imdb.com/title/${people.imdb_id}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {people.imdb_id}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};
