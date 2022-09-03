import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly brand?: string;

  // @MinLength(3)
  @IsString()
  @IsOptional()
  readonly model?: string;
}
