import { Body, Controller, Delete, Get,UseGuards , HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto } from "./dto/CreateEmployee.dto";
import mongoose, { mongo } from "mongoose";
import { UpdateEmployeeDto } from "./dto/UpdateEmployee.dto";
import {AuthGuard} from "../auth/auth.guard"

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService:EmployeeService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    @UseGuards(new AuthGuard(process.env.TOKEN))
    async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
        const response = await this.employeeService.createUser(createEmployeeDto);
        return response;
    }
    @Get()
    @UsePipes(new ValidationPipe())
    @UseGuards(new AuthGuard(process.env.TOKEN))
    async getAllEmployees() {
        const response = await this.employeeService.getAllUsers();
        return response;
    }

    @Get(':id')
    @UseGuards(new AuthGuard(process.env.TOKEN))
    async getEmployeeById(@Param('id') id: string) {
        //add the logic to check if id is valid in middleware but we are checking here for simplicity
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) {
            throw new HttpException('Invalid ID', 400);
        }
        const findUser = await this.employeeService.getUserById(id);
        if(!findUser) {
            throw new HttpException('User not found', 404);
        }
        return findUser;
    }

    @Patch(':id')
    @UseGuards(new AuthGuard(process.env.TOKEN))
    async updateEmployee(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) {
            throw new HttpException('Invalid ID', 400);
        }
        const response = await this.employeeService.updateUser(id, updateEmployeeDto);
        if(!response) {
            throw new HttpException('User not found', 404);
        }
        return response;
    }
    @Delete(':id')
    @UseGuards(new AuthGuard(process.env.TOKEN))
    async DeleteEmployee(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) {
            throw new HttpException('Invalid ID', 400);
        }
        const response = await this.employeeService.deleteUser(id);
        if(!response) {
            throw new HttpException('User not found', 404);
        }
        return response;
    }
}