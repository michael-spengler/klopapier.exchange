import { opine } from "https://deno.land/x/opine@0.27.0/mod.ts";

const app = opine();

const pathToIndexHTML = `${Deno.cwd()}/docs/index.html`
app.get("/", function(req, res) {
  res.send(`Hello ${pathToIndexHTML}`);
});

app.listen(3000);
