import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventSchema, Event } from 'src/events/entities/event.entity';
import { CoffeesController } from './coffees.controller';
import { coffeesService } from './coffees.service';
import { Coffee, CoffeesSchema } from './entities/coffee.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeesSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [coffeesService],
})
export class CoffeesModule { }
