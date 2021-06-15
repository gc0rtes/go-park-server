npx sequelize-cli model:generate --name city --attributes imageUrl:string,name:string

npx sequelize-cli model:generate --name park --attributes imageUrl:string,name:string,lat:float,lng:float,cityId:integer

npx sequelize-cli model:generate --name user --attributes imageUrl:string,name:string,email:string,password:string

npx sequelize-cli model:generate --name tag --attributes name:string

npx sequelize-cli model:generate --name event --attributes imageUrl:string,title:string,description:string,phone:integer,startDate:date,endDate:date,lat:float,lng:float,isCanceled:boolean,parkId:integer,userId:integer

npx sequelize-cli model:generate --name tagEvent --attributes tagId:integer,eventId:integer

