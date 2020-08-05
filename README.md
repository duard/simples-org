# Projeto BASE

Atualizar o projeto inteiro, sempre mantenha ele atualizado, não seja um goiaba que deixa as coisas em 1998.

https://awesomeopensource.com/project/juliandavidmr/awesome-nestjs

```shell
npm uninstall -g angular-cli;
npm install -g @angular/cli@latest;
npx ng update --all --force;
npm audit fix; npm audit fix --force;
```

Gerar todas as Entities do seu banco de dados

```shell
npx typeorm-model-generator -h localhost -d seubancodedados -u seuusuario -x suasenha -e mysql -o .
```

Criar uma nova Library NestJS

```shell
nx generate @nrwl/nest:library lib-nome-a-ser-creiada
```

##### installs angular

```
npm i @ngrx/store-devtools @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/schematics  @angular/animations @angular/cdk @angular/cdk @angular/flex-layout @angular/material  @angular/material-moment-adapter @ngx-translate/core  @ngrx/router-store --save
npm i --save-dev ngrx-store-freeze
npm audit fix; npm audit fix --force;

```

#### installs nestjs

```
npm i --save typeorm @nestjs/config @nestjs/typeorm @nestjs/common dotenv-flow mysql
npm i --save-dev    @types/lodash
npm i --save @nestjs/jwt request-context bcrypt @nestjs/swagger class-transformer class-validator @nestjs/passport nestjs-i18n compression  express-rate-limit file-type helmet jsonwebtoken lodash mime-types morgan reflect-metadata request-context source-map-support passport-jwt  @nestjs/microservices passport
npm audit fix; npm audit fix --force;

```

## configurar o cache
Connect the workspace to your Nx Cloud account at https://nx.app/orgs/workspace-setup?accessToken=ZjFjYzI4OWMtNzY1Ny00MjYyLWI3YmItMmRkMjhkZmNlZDdkfHJlYWQtd3JpdGU=.
This will allow you to configure the cache and see detailed stats. You can do it later.

## cypress ainda não funfa no WSL2 :-o
https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress

```
npm uninstall cypress --save-dev; npm install cypress --save-dev;
```