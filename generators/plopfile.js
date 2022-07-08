/* eslint-disable no-undef */
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/Component.vue.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/Component.stories.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/Component.spec.ts.hbs'
      }
    ]
  });
  plop.setGenerator('feature', {
    description: 'Create a feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your feature name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/index.ts',
        templateFile: 'templates/homeIndex.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/Home.vue',
        templateFile: 'templates/Home.vue.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/pages/Home/Home.spec.ts',
        templateFile: 'templates/Home.spec.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.spec.ts',
        templateFile: 'templates/Component.spec.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.vue',
        templateFile: 'templates/Component.vue.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'templates/Component.stories.js.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/store/{{camelCase name}}/store.ts',
        templateFile: 'templates/store.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/store/{{camelCase name}}/store.spec.ts',
        templateFile: 'templates/store.spec.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/store/{{camelCase name}}/index.ts',
        templateFile: 'templates/storeIndex.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/features/{{pascalCase name}}/routes/index.ts',
        templateFile: 'templates/routesIndex.ts.hbs'
      }
    ]
  });
};
