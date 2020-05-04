import marked from "marked";

export const vueTutorial = marked(`
# Carbon Charts - Vue
The Carbon Charts Vue library provides a collection of reusable charting components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.

&nbsp;
## Install

**with yarn:**
\`\`\`bash
yarn add @carbon/charts @carbon/charts-vue d3
\`\`\`

**with npm:**
\`\`\`bash
npm install --save @carbon/charts @carbon/charts-vue d3
\`\`\`

&nbsp;
## Getting started

To start using the \`StackedBarChart\` component, try the example below:
&nbsp;

###### hello-world.vue
\`\`\`vue
<script>
  import Vue from "vue";
  import "@carbon/charts/styles.css";
  import chartsVue from "@carbon/charts-vue";

  Vue.use(chartsVue);

  export default {
    name: "HelloWorld",
    components: {},
    data() {
      return {
        stackedBarData: {
          // ...see next section
        },
        stackedBarOptions: {
          // ...see next section
        },
      };
    },
    template:
      '<ccv-stacked-bar-chart :data="stackedBarData" :options="stackedBarOptions"></ccv-bar-chart>',
  };
</script>
\`\`\`

&nbsp;
## Data and Options
Data and options follow the same model in all charts, with minor exceptions and differences in specific components.
See tutorial on tabular data format for more information on chart data.

&nbsp;
## Demos and Examples
+ **[Storybook - Demos](https://carbon-design-system.github.io/carbon-charts/vue)**
+ **[Storybook - Story Sources](https://github.com/carbon-design-system/carbon-charts/tree/master/packages/vue/stories)**
+ **[Storybook - Data & options used](https://github.com/carbon-design-system/carbon-charts/tree/master/packages/core/demo/demo-data)**

&nbsp;
## Guidance
Please refer to the [Carbon Design Systems guidance](https://www.carbondesignsystem.com/data-visualization/chart-types) on using the different charts available in this library.

&nbsp;
## Development
Please refer to the [Contribution Guidelines](https://github.com/carbon-design-system/carbon-charts/blob/master/CONTRIBUTING.md) before starting any work.

#### Using the server
We recommend the use of [Vue Storybook](https://github.com/storybookjs/storybook/tree/next/app/vue) for developing components.

**Start the server:**
\`\`\`bash
cd packages/vue
yarn storybook
\`\`\`

Open browser to \`http://localhost:6006/\`.

&nbsp;
## List of available components
View available components [here](https://github.com/carbon-design-system/carbon-charts#component-status)

&nbsp;
## Troubleshoot
If you experience any issues while getting set up with Carbon Charts, please head over to the [GitHub repo](https://github.com/carbon-design-system/carbon-charts) for more guidelines and support. Please [create an issue](https://github.com/carbon-design-system/carbon-charts/issues) if your issue does not already exist.
`);
