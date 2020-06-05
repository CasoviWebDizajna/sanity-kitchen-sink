export default {
  widgets: [
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
                  buildHookId: '5eda0dff4873ef4e0dc25c2c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f7tjfd2e',
                  apiId: '0c11b490-c702-403f-b765-d05cd4747dc4'
                },
                {
                  buildHookId: '5eda0dff7f8e20310ad9d97e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-j6fegcnz',
                  apiId: 'f40dbe57-2b18-42ae-b585-1990b64ab696'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CasoviWebDizajna/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-j6fegcnz.netlify.app', category: 'apps'}
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
