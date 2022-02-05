import {Injectable, OnModuleInit, OnModuleDestroy, INestApplication} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrestoPrismaClient extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
