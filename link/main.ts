// deno run --allow-read --allow-net main.js
import { parse } from '$std/encoding/yaml.ts'
import { serve } from '$std/http/server.ts'
import { dirname, fromFileUrl, join } from '$std/path/mod.ts'

const urlsFilepath = join(dirname(fromFileUrl(import.meta.url)), 'sites.yaml')
const urls = parse(await Deno.readTextFile(urlsFilepath))
serve((req) => Response.redirect(urls[new URL(req.url).pathname] || urls[404]))
