import lume from "lume/mod.ts";

const site = lume({
  src: "src",
  location: new URL("https://kubernetez.academy"),
});

site.add("assets");

export default site;
