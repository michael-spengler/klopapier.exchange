import { opine, serveStatic } from "https://deno.land/x/opine/mod.ts";
import { opineCors } from 'https://deno.land/x/cors/mod.ts'

const app = opine();

app.use(opineCors())

const pathToIndexHTML = `${Deno.cwd()}/docs`
app.use(serveStatic(pathToIndexHTML))

app.get("/", function(req, res) {
  res.sendFile(`${pathToIndexHTML}/index.html`);
});

// the default http port would be 80 - the default https port would be 443
app.listen(3000); 
