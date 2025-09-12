import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    alert: {
      render: component("./src/components/markdoc/Alert.astro"),
      attributes: {
        value: { type: String },
        type: { type: String, default: "info" },
      },
    },
    button: {
      render: component("./src/components/markdoc/Button.astro"),
      attributes: {
        value: { type: String },
        href: { type: String },
        variant: { type: String, default: "primary" },
        size: { type: String, default: "md" },
        target: { type: String, default: "_self" },
      },
    },
    iconCard: {
      render: component("./src/components/markdoc/IconCard.astro"),
      attributes: {
        value: { type: String },
      },
    },
    accordion: {
      render: component("./src/components/markdoc/Accordion.astro"),
      attributes: {
        title: { type: String },
      },
    },
    image: {
      render: component("./src/components/markdoc/Image.astro"),
      attributes: {
        src: { type: String },
        alt: { type: String },
        width: { type: String },
        height: { type: String },
        caption: { type: String },
        rounded: { type: Boolean, default: false },
        border: { type: Boolean, default: false },
      },
    },
    icon: {
      render: component("./src/components/markdoc/Icon.astro"),
      attributes: {
        name: { type: String },
        size: { type: String, default: "md" },
        color: { type: String, default: "primary" },
      },
    },
    embed: {
      render: component("./src/components/markdoc/Embed.astro"),
      attributes: {
        src: { type: String },
        type: { type: String, default: "iframe" },
        title: { type: String },
        width: { type: String },
        height: { type: String },
        aspectRatio: { type: String, default: "16:9" },
      },
    },
    definitionList: {
      render: component("./src/components/markdoc/DefinitionList.astro"),
      attributes: {
        items: { type: String },
        variant: { type: String, default: "default" },
      },
    },
    code: {
      render: component("./src/components/markdoc/Code.astro"),
      attributes: {
        code: { type: String },
        language: { type: String, default: "text" },
        title: { type: String },
        showLineNumbers: { type: Boolean, default: false },
        highlightLines: { type: String },
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
