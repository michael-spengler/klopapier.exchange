import { opine } from "https://deno.land/x/opine@1.1.0/mod.ts";
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

const app = opine();

app.get("/", function(req, res) {
  res.send("Hello World");
});


setInterval(() => {

  console.log('getting data for sentiment analysis')

// }, 1000 * 60 * 15)
}, 1000 * 60 * 0.1)

// http://localhost:3002
app.listen(3002);