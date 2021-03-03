export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603ef709ce1ae3873812e257',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7oc8dwdh',
                  apiId: 'd91cc2da-04bd-430c-8284-867657eef161'
                },
                {
                  buildHookId: '603ef7091595707cd9f4845f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y878k727',
                  apiId: '4bfdc69e-0d57-4ee1-b7bb-cb3856338d64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zingram/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y878k727.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
