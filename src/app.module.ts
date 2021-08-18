import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ProfilesModule } from "./profiles/profiles.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormConfigOne from "src/config/orm-first.config";
import ormConfigTwo from "src/config/orm-second.config";

//
//
// Another way of implementing multiple Databases
//
//

// const defaultOptions: TypeOrmModuleOptions = {
//   type: "mysql",
//   port: 3306,
//   username: "root",
//   password: "pass123",
//   synchronize: true,
// };

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       ...defaultOptions,
//       name: "dbOne",
//       host: "localhost",
//       entities: [User],
//       database: "users",
//     }),
//     TypeOrmModule.forRoot({
//       ...defaultOptions,
//       name: "dbTwo",
//       host: "localhost",
//       port: 3307,
//       entities: [Profile],
//       database: "profiles",
//     }),
//     UsersModule,
//     ProfilesModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

//
//
//
//

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfigOne, ormConfigTwo],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfigOne,
      name: "dbOne",
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfigTwo,
      name: "dbTwo",
    }),
    UsersModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
