import { Prop, SchemaFactory } from "@nestjs/mongoose";
import {Schema} from "@nestjs/mongoose";

@Schema()
export class Employee {
  @Prop({unique: true})
  Username: string;

  @Prop({required: false})
  age?: number;

  @Prop({required: false})
  designation?: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);