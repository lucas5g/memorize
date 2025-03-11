import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhraseModule } from './phrase/phrase.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [PhraseModule, PrismaModule, ServeStaticModule.forRoot({
    rootPath: `${__dirname}/../public`
  })],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
