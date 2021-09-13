import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { EvaluationsController } from './evaluations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './evaluations.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluation]),
  ],
  providers: [EvaluationsService],
  controllers: [EvaluationsController]
})
export class EvaluationsModule { }
