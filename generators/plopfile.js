/* eslint-disable no-undef */
module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.vue",
        templateFile: "templates/Component.vue.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.ts",
        templateFile: "templates/stories.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.ts",
        templateFile: "templates/test.ts.hbs",
      },
    ],
  });
};
