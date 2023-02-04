// deno run --allow-read --allow-net main.js
import { serve } from '$std/http/server.ts'
import { dirname, fromFileUrl, join } from '$std/path/mod.ts'

const index = join(dirname(fromFileUrl(import.meta.url)), 'index.html')

serve(async () =>
  new Response((await Deno.open(index, { read: true })).readable)
)
