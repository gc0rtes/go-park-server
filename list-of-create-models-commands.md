npx sequelize-cli model:generate --name city --attributes imageUrl:string,name:string

npx sequelize-cli model:generate --name park --attributes imageUrl:string,name:string,lat:float,lng:float,cityId:integer
