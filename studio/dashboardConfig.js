export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '633875aae466921cf384126e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-eqpu4qtg',
                  apiId: 'a330edc5-e839-450f-9782-4dc60395cd9d'
                },
                {
                  buildHookId: '633875aa5adf251be9f32f65',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-qc8jwgbe',
                  apiId: '40eead8d-01e2-4835-8a51-7391a5f3ef35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YonatanKof/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-qc8jwgbe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
