import { request_types as OperationFields } from './request-types.js';

export type LinkedFieldType<
    ParentType extends {},
    TypeName extends string & keyof ParentType,
    Type,
    Plural extends boolean,
> = Plural extends true ? Type[] : null extends ParentType[TypeName] ? Type | null : Type;

export type OperationFieldType<
    ParentTypeName extends string,
    TypeName extends string,
    Type,
> = ParentTypeName extends keyof OperationFields ?
    TypeName extends keyof OperationFields[ParentTypeName] ?
        null extends OperationFields[ParentTypeName][TypeName] ? Type | null : Type : Type :
    Type;

export type UnknownScalarType = unknown & (string | number | boolean);
