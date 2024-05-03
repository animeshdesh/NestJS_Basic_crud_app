import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "src/schemas/employee.schemas";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";

@Module({
imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema}])],
providers: [EmployeeService],
controllers: [EmployeeController]
})

export class EmployeeModule {}