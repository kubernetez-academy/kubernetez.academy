import lume from "lume/mod.ts";

import icons from "lume/plugins/icons.ts";
import { catalogs as iconCatalogs } from "lume/deps/icons.ts";

const site = lume({
  src: "src",
  location: new URL("https://kubernetez.academy"),
});

site.add("assets");

site.use(icons({
  folder: "/assets/icons",
  catalogs: [
    ...iconCatalogs,
    {
      id: "local",
      src: "resources/assets/icons/local/{name}.svg",
    },
  ],
}));

export default site;
