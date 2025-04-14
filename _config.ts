import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import nav from "lume/plugins/nav.ts";
import nunjucks from "lume/plugins/nunjucks.ts";
import pug from "lume/plugins/pug.ts";
import remark from "lume/plugins/remark.ts";

const site = lume();

site.use(esbuild());
site.use(nav());
site.use(nunjucks());
site.use(pug());
site.use(remark());

export default site;
