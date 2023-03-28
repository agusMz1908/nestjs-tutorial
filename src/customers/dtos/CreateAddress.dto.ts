import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    street1: string;

    street2: string;

    @IsNotEmpty()
    @IsNumber()
    number: number;

    @IsNotEmpty()
    @IsNumber()
    zip: number;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;
}