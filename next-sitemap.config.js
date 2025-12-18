/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bucovina-med.ro', // URL-ul principal al site-ului tău
  generateRobotsTxt: true,            // generează automat robots.txt
  sitemapSize: 5000,                   // numărul maxim de URL-uri pe sitemap
  changefreq: 'daily',                 // valoare implicită pentru changefreq
  priority: 0.7,                       // valoare implicită pentru priority
  autoLastmod: true,                   // actualizează automat <lastmod> la ultima build
  generateIndexSitemap: true,          // generează sitemap index dacă sunt mai multe sitemap-uri
  exclude: ['/admin/**', '/secret/**'], // exclud URL-uri dacă e nevoie
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }  // permite Google să indexeze tot site-ul
    ],
  },
};
