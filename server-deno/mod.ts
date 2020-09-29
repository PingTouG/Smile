import { App } from "./deps.ts";
import { AppArea } from "./areas/app.area.ts";
import { CorsBuilder } from "./deps.ts";

const app = new App({
  areas: [AppArea],
});

// 跨域处理
app.useCors(
  new CorsBuilder()
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader(),
);

app.listen();
