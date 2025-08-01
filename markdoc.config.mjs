import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    alert: {
      render: component("./src/components/Alert.astro"),
      attributes: {
        value: { type: String },
      },
    },
  },
});
