# ProjectTracker

### Criar docker

```js
docker run --name database -p 5432:5432 -d -t kartoza/postgis
```

user & password = **docker**

database = **projecttracker**

### Popular o banco de dados

```js
npx sequelize-cli db:seed:all
```
