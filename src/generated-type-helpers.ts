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
> = Type;

export type UnknownScalarType = unknown & (string | number | boolean);
