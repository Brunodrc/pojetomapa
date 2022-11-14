para funcionar é preciso ter o banco de dados postgres disponível na maquina e ajustar as configurações do arquivo src/database/appdata-source.ts para o banco de dados clocal.

site do orm utilizado no projeto: https://typeorm.io/

deve rodar o npm install

comando para rodar as migrations:
npm run typeorm migration:run

comando para gerar novas migrations
npm run typeorm migration:generate src/database/migrations/novamigration
