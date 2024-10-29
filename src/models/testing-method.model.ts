import { IntersectionType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

export enum StatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export class EmployeeModel {
  @Expose()
  salary: number;

  @Expose()
  @Transform(({ value }) => value * 2, { toPlainOnly: true })
  age: number;

  @Expose()
  @Transform(({ value }) => StatusEnum[value] || null, { toPlainOnly: true })
  status: StatusEnum;
}

export class CirurgionModel {
  @Expose()
  habilities: string[];

  @Expose()
  @Transform(({ value }) => value * 2, { toPlainOnly: true })
  age: number;
}

export class PersonModel {
  @Expose()
  name: string;

  @Expose()
  @Transform(({ value }) => value * 2, { toPlainOnly: true })
  age: number;

  @Expose()
  @Transform(({ value }) => StatusEnum[value] || null, { toPlainOnly: true })
  status: StatusEnum;
}

export class DoctorModel extends IntersectionType(
  EmployeeModel,
  CirurgionModel,
  PersonModel,
) {}
