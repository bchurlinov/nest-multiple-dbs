import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Profile } from "src/profiles/entities/profile.entity";

export default registerAs(
  "orm.config",
  (): TypeOrmModuleOptions => ({
    name: "dbTwo",
    type: "mysql",
    host: process.env.DB_TWO_HOST,
    port: Number(process.env.DB_TWO_PORT),
    username: process.env.DB_TWO_USER,
    password: process.env.DB_TWO_PASSWORD,
    database: process.env.DB_TWO_NAME,
    autoLoadEntities: true,
    logging: ["query"],
    entities: [Profile],
    synchronize: true,
  }),
);
