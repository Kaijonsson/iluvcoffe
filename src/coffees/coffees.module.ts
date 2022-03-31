import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { coffeesService } from './coffees.service';

@Module({ controllers: [CoffeesController], providers: [coffeesService] })
export class CoffeesModule { }
