import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as request from 'supertest';
import { HttpStatus } from '@nestjs/common';

describe('AppController', () => {
  let app: NestExpressApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('POST /', () => {
    it('returns correct age', async () => {
      return request(app.getHttpServer())
        .post('/')
        .send({
          age: 2,
          status: 'ACTIVE',
        })
        .expect(HttpStatus.CREATED)
        .expect({ age: 4, status: 'active' });
    });
  });
});
