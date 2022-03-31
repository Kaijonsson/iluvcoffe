import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
@Schema()
export class Coffee extends Document {
  @Prop()
  name: string;

  @Prop()
  brand: string;

  @Prop([String])
  flavors: string[];

  @Prop(mongoose.SchemaTypes.Mixed)
  payload: Record<string, any>;
}

export const CoffeesSchema = SchemaFactory.createForClass(Coffee);
