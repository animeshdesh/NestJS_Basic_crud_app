import { Prop } from "@nestjs/mongoose";

export class Employee {
  @Prop({ unique: true })
  username: string;

  @Prop()
  age?: number;

  @Prop()
  designation?: string;
}

