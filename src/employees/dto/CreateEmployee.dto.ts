import { IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    Username: string;

    age?: number;
    @IsString()
    designation?: string;
}