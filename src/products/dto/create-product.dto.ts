import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsOptional()
    color: string;
}
