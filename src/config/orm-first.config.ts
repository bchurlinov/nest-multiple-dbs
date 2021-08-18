import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";

export default registerAs(
  "orm.config",
  (): TypeOrmModuleOptions => ({
    name: "dbOne",
    type: "mysql",
    host: process.env.DB_ONE_HOST,
    port: Number(process.env.DB_ONE_PORT),
    username: process.env.DB_ONE_USER,
    password: process.env.DB_ONE_PASSWORD,
    database: process.env.DB_ONE_NAME,
    autoLoadEntities: true,
    logging: ["query"],
    entities: [User],
    synchronize: true,
  }),
);
