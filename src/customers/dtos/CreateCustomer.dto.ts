import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, IsString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto
}