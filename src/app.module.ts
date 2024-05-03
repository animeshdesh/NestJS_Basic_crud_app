import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employees/employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
    // MongooseModule.forRoot('mongodb+srv://animeshdesh:animesh2000@cluster0.1w6n9ee.mongodb.net/'),
    EmployeeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
