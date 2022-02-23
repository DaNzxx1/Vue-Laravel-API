## Introdução
Sistema desenvolvido em Vue.js consumindo via API REST o Laravel.

## Instruções para uso
### Back-End - Laravel
- Crie um banco com o nome laravel
- Navegue até a pasta: ```cd laravel_api``` e ```cd laravel```
- Renomeie o arquivo ```.env.example``` para ```.env```
- Instale as dependencias do projeto: ```npm install```
- Instale as dependencias do composer: ```composer install```
- Compile os scripts: ```npm run dev```
- Gerar key de uso: ```php artisan key:generate```
- Crie todas as tabelas do banco e relações: ```php artisan migrate```
- Gerar dados automaticos no banco: ```php artisan db:seed```
- Inicie o projeto: ```php artisan serve```

### Front-End - Vuejs
- Navegue até a pasta: ```cd laravel_api``` e cd ```vue```
- Instale as dependenciar do projeto: ```yarn install```
- Inicie o projeto: ```yarn serve```