// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Accounts } from '../../api/links/links.js';

Meteor.startup(() => {
    // if the Links collection is empty
    if (Accounts.find().count() === 0) {
        const data = [{
                name: 'Hansen Group',
                amount: 0.01,
                date: new Date('2016-09-16')
            },
            {
                name: 'Paucek, Strosin and Bradtke',
                amount: 0.22,
                date: new Date('2016-09-19')
            },
            {
                name: 'Graham, Tremblay and Jacobs',
                amount: 1.37,
                date: new Date('2016-09-20')
            },
            {
                name: 'Hoppe, Bode and Emard',
                amount: 2.19,
                date: new Date('2016-09-21')
            },
            {
                name: 'Stehr, Halvorson and Stanton',
                amount: 0.86,
                date: new Date('2016-09-23')
            },
            {
                name: 'Lueilwitz, Hauck and Aufderhar',
                amount: 3.91,
                date: new Date('2016-09-24')
            },
            {
                name: 'Gutmann-Rath',
                amount: 5.34,
                date: new Date('2016-09-25')
            },
            {
                name: 'Reichert, Hammes and Sanford',
                amount: 4.2,
                date: new Date('2016-09-26')
            },
            {
                name: 'Pacocha and Sons',
                amount: 1.06,
                date: new Date('2016-09-27')
            },
            {
                name: 'Weimann, Runolfsson and Macejkovic',
                amount: 7.55,
                date: new Date('2016-09-29')
            },
            {
                name: 'Spencer Inc',
                amount: 9.83,
                date: new Date('2016-09-30')
            },
            {
                name: 'Keeling-Marquardt',
                amount: 4.09,
                date: new Date('2016-10-01')
            },
            {
                name: 'Stroman LLC',
                amount: 11.78,
                date: new Date('2016-10-02')
            },
            {
                name: 'Conn Group',
                amount: 2.82,
                date: new Date('2016-10-04')
            },
            {
                name: 'Reichel-Kassulke',
                amount: 4.05,
                date: new Date('2016-10-05')
            },
            {
                name: 'Will Inc',
                amount: 14.98,
                date: new Date('2016-10-09')
            },
            {
                name: 'Dicki, Leannon and Feeney',
                amount: 2.35,
                date: new Date('2016-10-10')
            },
            {
                name: 'Abbott and Sons',
                amount: 6.72,
                date: new Date('2016-10-15')
            },
            {
                name: 'Lubowitz, DuBuque and Schroeder',
                amount: 12.74,
                date: new Date('2016-10-16')
            },
            {
                name: 'Murray, Rice and Beier',
                amount: 8.3,
                date: new Date('2016-10-21')
            },
            {
                name: 'Zieme-McClure',
                amount: 19.09,
                date: new Date('2016-10-22')
            },
            {
                name: 'Hauck, Kemmer and Schiller',
                amount: 10.73,
                date: new Date('2016-10-25')
            },
            {
                name: 'Ruecker Group',
                amount: 9.67,
                date: new Date('2016-10-26')
            },
            {
                name: 'Sanford-Corkery',
                amount: 18.11,
                date: new Date('2016-10-28')
            },
            {
                name: 'Homenick and Sons',
                amount: 21.51,
                date: new Date('2016-10-29')
            },
            {
                name: 'Halvorson Group',
                amount: 3.73,
                date: new Date('2016-11-05')
            },
            {
                name: 'Skiles-Bartoletti',
                amount: 12.9,
                date: new Date('2016-11-06')
            },
            {
                name: 'Stiedemann-Cartwright',
                amount: 8.66,
                date: new Date('2016-11-07')
            },
            {
                name: 'Sanford and Sons',
                amount: 27.4,
                date: new Date('2016-11-08')
            },
            {
                name: 'Barrows, Tillman and Ernser',
                amount: 15.91,
                date: new Date('2016-11-09')
            },
            {
                name: 'Gutmann, Will and Koelpin',
                amount: 7.48,
                date: new Date('2016-11-11')
            },
            {
                name: 'Connelly Group',
                amount: 8.6,
                date: new Date('2016-11-14')
            },
            {
                name: 'Hoppe, Casper and Willms',
                amount: 21.58,
                date: new Date('2016-11-19')
            },
            {
                name: 'Skiles-Marquardt',
                amount: 8.08,
                date: new Date('2016-11-21')
            },
            {
                name: 'Doyle, Douglas and Bergnaum',
                amount: 29.52,
                date: new Date('2016-11-22')
            },
            {
                name: 'Hamill, Pacocha and Sporer',
                amount: 29.58,
                date: new Date('2016-11-24')
            },
            {
                name: 'Hermiston-Morissette',
                amount: 3.86,
                date: new Date('2016-11-25')
            },
            {
                name: 'Sauer, Adams and Muller',
                amount: 6.55,
                date: new Date('2016-11-27')
            },
            {
                name: 'Schmeler, White and Smitham',
                amount: 26.67,
                date: new Date('2016-11-28')
            },
            {
                name: 'Roberts-Bergnaum',
                amount: 24.56,
                date: new Date('2016-12-02')
            },
            {
                name: 'Dooley, Deckow and Bogan',
                amount: 38.05,
                date: new Date('2016-12-03')
            },
            {
                name: 'Barton-Thiel',
                amount: 36.66,
                date: new Date('2016-12-04')
            },
            {
                name: 'Lemke-Runte',
                amount: 15.37,
                date: new Date('2016-12-06')
            },
            {
                name: 'Nienow-Flatley',
                amount: 24.06,
                date: new Date('2016-12-07')
            },
            {
                name: 'Sauer, Nader and McGlynn',
                amount: 32.03,
                date: new Date('2016-12-08')
            },
            {
                name: 'Schumm, Kovacek and Kertzmann',
                amount: 25.72,
                date: new Date('2016-12-11')
            },
            {
                name: 'Bins and Sons',
                amount: 26.82,
                date: new Date('2016-12-17')
            },
            {
                name: 'West and Sons',
                amount: 19.53,
                date: new Date('2016-12-22')
            },
            {
                name: 'Tromp-Dicki',
                amount: 9.28,
                date: new Date('2016-12-25')
            },
            {
                name: 'Lemke-Vandervort',
                amount: 16.75,
                date: new Date('2016-12-28')
            },
            {
                name: 'Labadie Inc',
                amount: 30.57,
                date: new Date('2016-12-29')
            },
            {
                name: 'Renner Group',
                amount: 38.07,
                date: new Date('2016-12-30')
            },
            {
                name: 'Lowe Inc',
                amount: 46.96,
                date: new Date('2016-12-31')
            },
            {
                name: 'Ondricka-Grady',
                amount: 37.92,
                date: new Date('2017-01-01')
            },
            {
                name: 'Fritsch, Kulas and Rippin',
                amount: 34.75,
                date: new Date('2017-01-02')
            },
            {
                name: 'Kertzmann Inc',
                amount: 17.58,
                date: new Date('2017-01-03')
            },
            {
                name: 'Walter and Sons',
                amount: 54.44,
                date: new Date('2017-01-08')
            },
            {
                name: 'Lakin and Sons',
                amount: 39.57,
                date: new Date('2017-01-09')
            },
            {
                name: 'Runolfsson, Ortiz and Reynolds',
                amount: 45.26,
                date: new Date('2017-01-10')
            },
            {
                name: 'Lind, Kohler and Boyle',
                amount: 43.42,
                date: new Date('2017-01-12')
            },
            {
                name: 'Runte, Hirthe and Cassin',
                amount: 31.09,
                date: new Date('2017-01-13')
            },
            {
                name: 'Christiansen-Kiehn',
                amount: 59.31,
                date: new Date('2017-01-16')
            },
            {
                name: 'Yundt-Bode',
                amount: 58.98,
                date: new Date('2017-01-19')
            },
            {
                name: 'Kuhn Group',
                amount: 33.59,
                date: new Date('2017-01-20')
            },
            {
                name: 'Ondricka-Little',
                amount: 54.66,
                date: new Date('2017-01-24')
            },
            {
                name: 'Koepp, Hickle and Keeling',
                amount: 42.07,
                date: new Date('2017-01-26')
            },
            {
                name: 'Runolfsson, Corkery and Ward',
                amount: 42.45,
                date: new Date('2017-01-27')
            },
            {
                name: 'McClure, Hane and Kirlin',
                amount: 44.5,
                date: new Date('2017-01-28')
            },
            {
                name: 'Bartell Group',
                amount: 34.58,
                date: new Date('2017-01-29')
            },
            {
                name: 'Okuneva Group',
                amount: 51.13,
                date: new Date('2017-01-30')
            },
            {
                name: 'Thompson Group',
                amount: 20.82,
                date: new Date('2017-01-31')
            },
            {
                name: 'Adams Group',
                amount: 24.45,
                date: new Date('2017-02-01')
            },
            {
                name: 'Nienow-Daugherty',
                amount: 15.29,
                date: new Date('2017-02-02')
            },
            {
                name: 'Reilly, Lesch and Gaylord',
                amount: 49.51,
                date: new Date('2017-02-08')
            },
            {
                name: 'Lynch-Bergnaum',
                amount: 10.68,
                date: new Date('2017-02-09')
            },
            {
                name: 'Berge, King and Pfeffer',
                amount: 55.05,
                date: new Date('2017-02-10')
            },
            {
                name: 'Considine-Oberbrunner',
                amount: 3.02,
                date: new Date('2017-02-17')
            },
            {
                name: 'Boyle and Sons',
                amount: 69.77,
                date: new Date('2017-02-19')
            },
            {
                name: 'Weber-Kunde',
                amount: 19.74,
                date: new Date('2017-02-21')
            },
            {
                name: 'Thompson Inc',
                amount: 48.77,
                date: new Date('2017-02-22')
            },
            {
                name: 'Leffler-Berge',
                amount: 61.13,
                date: new Date('2017-02-25')
            },
            {
                name: 'Terry-Hilll',
                amount: 45.02,
                date: new Date('2017-02-28')
            },
            {
                name: 'Pagac-Streich',
                amount: 0.54,
                date: new Date('2017-03-03')
            },
            {
                name: 'White-Crona',
                amount: 33.49,
                date: new Date('2017-03-04')
            },
            {
                name: 'Kris-Kutch',
                amount: 49.01,
                date: new Date('2017-03-05')
            },
            {
                name: 'Koelpin Inc',
                amount: 48.22,
                date: new Date('2017-03-08')
            },
            {
                name: 'Jones-Grant',
                amount: 37.4,
                date: new Date('2017-03-09')
            },
            {
                name: 'Fay LLC',
                amount: 23.54,
                date: new Date('2017-03-10')
            },
            {
                name: 'Schamberger Group',
                amount: 39.85,
                date: new Date('2017-03-11')
            },
            {
                name: 'Schamberger and Sons',
                amount: 86.57,
                date: new Date('2017-03-12')
            },
            {
                name: 'Schaden Inc',
                amount: 37.24,
                date: new Date('2017-03-13')
            },
            {
                name: 'Labadie LLC',
                amount: 11.5,
                date: new Date('2017-03-16')
            },
            {
                name: 'Hane-Collins',
                amount: 41.99,
                date: new Date('2017-03-18')
            },
            {
                name: 'Goodwin-Lebsack',
                amount: 49.37,
                date: new Date('2017-03-23')
            },
            {
                name: 'Purdy, Johns and Hintz',
                amount: 44.38,
                date: new Date('2017-03-26')
            },
            {
                name: 'Lemke, Labadie and Rau',
                amount: 57.8,
                date: new Date('2017-03-27')
            },
            {
                name: 'Predovic, Kuhlman and Champlin',
                amount: 25.71,
                date: new Date('2017-03-29')
            },
            {
                name: 'Ondricka, Treutel and Farrell',
                amount: 25.6,
                date: new Date('2017-03-30')
            },
            {
                name: 'Koss, Ernser and Sawayn',
                amount: 17.26,
                date: new Date('2017-03-31')
            },
            {
                name: 'Stanton Group',
                amount: 18.18,
                date: new Date('2017-04-01')
            }
        ];

        data.forEach(account => Accounts.insert(account));
    }
});