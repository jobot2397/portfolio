import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    alert: {
      render: component("./src/components/markdoc/Alert.astro"),
      attributes: {
        value: { type: String },
      },
    },
    button: {
      render: component("./src/components/markdoc/Button.astro"),
      attributes: {
        value: { type: String },
      },
    },
    iconCard: {
      render: component("./src/components/markdoc/IconCard.astro"),
      attributes: {
        value: { type: String },
      },
    },
  },
  nodes: {
    heading: {
      ...nodes.heading, // Preserve default anchor link generation
      render: component("./src/components/markdoc/Heading.astro"),
    },
  },
});
