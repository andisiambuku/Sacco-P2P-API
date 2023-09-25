import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  assetName: string;

  @IsNotEmpty()
  @IsNumber()
  sharePrice: number;

  @IsNotEmpty()
  @IsNumber()
  shareQuantity: number;
}
