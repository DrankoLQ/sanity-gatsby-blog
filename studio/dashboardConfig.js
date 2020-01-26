export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e2dcc6d83a12a51bf2e7717',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p6gkwk1f',
                  apiId: '44af9a29-8e83-45d3-80c3-b8e519ff76f5'
                },
                {
                  buildHookId: '5e2dcc6db956f6cb9f627cc9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-okcmu5oq',
                  apiId: '19b9b7c0-2e6b-4272-b1d4-be7e23210821'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DrankoLQ/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-okcmu5oq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
