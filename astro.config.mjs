import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import {astroImageTools} from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({

  integrations: [astroImageTools, compress()]

});