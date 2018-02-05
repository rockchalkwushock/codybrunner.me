/* eslint-disable no-param-reassign */
module.exports = plop => {
  plop.setGenerator('post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Title:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Keywords for SEO:'
      },
      {
        type: 'input',
        name: 'tags',
        message: 'Tags:'
      },
      {
        type: 'confirm',
        name: 'draft',
        message: "It's a draft?"
      }
    ],
    actions: data => {
      // Set current date.
      data.date = new Date().toISOString().split('T')[0]
      return [
        {
          type: 'add',
          path: '../src/content/posts/{{date}}/{{dashCase title}}.md',
          templateFile: 'templates/post-md.template'
        }
      ]
    }
  })
}
