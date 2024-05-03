import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee } from "src/entity/employee.entity";
import { CreateEmployeeDto } from "./dto/CreateEmployee.dto";
import { UpdateEmployeeDto } from "./dto/UpdateEmployee.dto";
//here we are using enitity instead of schema so we need to import the entity and use it in the service
// we have to add .exec() at the end of the query to execute the query for the entity and for schema you can 
//directly use the query


@Injectable()
export class EmployeeService {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<Employee>) {
        console.log('Employee Service Created');
    }
    createUser(createEmployeeDto: CreateEmployeeDto) {
        const user = new this.employeeModel(createEmployeeDto);        
        return user.save();
    }
    getAllUsers() {
        return this.employeeModel.find().exec();
        // return process.env.TOKEN;
    }
    getUserById(id: string) {
        return this.employeeModel.findById(id).exec();
    }
    updateUser(id: string, updateEmployeeDto: UpdateEmployeeDto) {
        return this.employeeModel.findByIdAndUpdate(id,updateEmployeeDto,{new: true}).exec() 
    }
    deleteUser(id: string) {
        return this.employeeModel.findByIdAndDelete(id,{new: true}).exec();
    }
}