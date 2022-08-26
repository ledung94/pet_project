import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kcajw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
