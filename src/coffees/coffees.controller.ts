import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';
import { Protocol } from 'src/common/decorators/protocol.decorators';
import { Public } from 'src/common/decorators/public.decorators';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
// import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) { }

  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @Public()
  @Get()
  async findAll(
    // @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    // console.log(protocol);
    // const { limit, offset } = paginationQuery;
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.coffeesService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Public()
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
  }

  @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) UpdateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, UpdateCoffeeDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
