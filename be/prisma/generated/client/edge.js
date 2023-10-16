
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.4.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DivisionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId'
};

exports.Prisma.PositionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  divisionId: 'divisionId',
  userId: 'userId'
};

exports.Prisma.WorksProgramScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  plan: 'plan',
  indicator: 'indicator',
  time: 'time',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  divisionId: 'divisionId',
  positionId: 'positionId'
};

exports.Prisma.RoutineTaskScalarFieldEnum = {
  id: 'id',
  name: 'name',
  status: 'status',
  time: 'time',
  category: 'category',
  divisionId: 'divisionId',
  positionId: 'positionId',
  worksProgramId: 'worksProgramId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  GURU: 'GURU',
  STAFF: 'STAFF',
  KEPALA_SEKOLAH: 'KEPALA_SEKOLAH',
  ADMIN: 'ADMIN'
};

exports.Category_Works = exports.$Enums.Category_Works = {
  ROUTINE: 'ROUTINE',
  INCIDENTAL: 'INCIDENTAL'
};

exports.Status = exports.$Enums.Status = {
  ON_PROCESS: 'ON_PROCESS',
  DONE: 'DONE',
  UNFINISHED: 'UNFINISHED'
};

exports.Category_Routine = exports.$Enums.Category_Routine = {
  ROUTINE: 'ROUTINE',
  REGULATION: 'REGULATION',
  CHALLENGE: 'CHALLENGE',
  REQUEST: 'REQUEST',
  DEADLINE: 'DEADLINE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Division: 'Division',
  Position: 'Position',
  WorksProgram: 'WorksProgram',
  RoutineTask: 'RoutineTask'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\user\\Desktop\\Me\\Pantau_Manajemen\\be\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.1",
  "engineVersion": "61e140623197a131c2a6189271ffee05a7aa9a59",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiDQogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KfQ0KDQovLyBzY2hlbWEucHJpc21hDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KfQ0KDQplbnVtIFJvbGUgew0KICBHVVJVDQogIFNUQUZGDQogIEtFUEFMQV9TRUtPTEFIDQogIEFETUlODQp9DQoNCmVudW0gU3RhdHVzIHsNCiAgT05fUFJPQ0VTUw0KICBET05FDQogIFVORklOSVNIRUQNCn0NCg0KZW51bSBDYXRlZ29yeV9Xb3JrcyB7DQogIFJPVVRJTkUNCiAgSU5DSURFTlRBTA0KfQ0KDQplbnVtIENhdGVnb3J5X1JvdXRpbmUgew0KICBST1VUSU5FDQogIFJFR1VMQVRJT04NCiAgQ0hBTExFTkdFDQogIFJFUVVFU1QNCiAgREVBRExJTkUNCn0NCg0KDQoNCm1vZGVsIFVzZXIgew0KICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKSBAbWFwKCJ1c2VyX2lkIikNCiAgbmFtZSAgICAgIFN0cmluZyAgQHVuaXF1ZQ0KICBlbWFpbCAgICAgU3RyaW5nICBAdW5pcXVlDQogIHBhc3N3b3JkICBTdHJpbmcNCiAgcm9sZSAgICAgIFJvbGUNCiAgY3JlYXRlZF9hdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKSAgLy8gS29sb20gY3JlYXRlZF9hdA0KICB1cGRhdGVkX2F0IERhdGVUaW1lICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKSAgLy8gS29sb20gdXBkYXRlZF9hdA0KICBkaXZpc2lvbnMgRGl2aXNpb24/DQogIHBvc2l0aW9ucyBQb3NpdGlvbj8NCn0NCg0KbW9kZWwgRGl2aXNpb24gew0KICBpZCAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKSBAbWFwKCJkaXZpc2lvbl9pZCIpDQogIG5hbWUgICAgICBTdHJpbmcNCiAgcG9zaXRpb25zIFBvc2l0aW9uW10NCiAgd29ya3NQcm9ncmFtcyBXb3Jrc1Byb2dyYW1bXQ0KICByb3V0aW5lcyAgIFJvdXRpbmVUYXNrW10NCiAgdXNlciAgIFVzZXIgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgdXNlcklkIFN0cmluZyAgICBAdW5pcXVlDQp9DQoNCg0KbW9kZWwgUG9zaXRpb24gew0KICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdChjdWlkKCkpIEBtYXAoInBvc2l0aW9uX2lkIikNCiAgbmFtZSAgICAgICBTdHJpbmcNCiAgZGl2aXNpb24gICBEaXZpc2lvbiBAcmVsYXRpb24oZmllbGRzOiBbZGl2aXNpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIGRpdmlzaW9uSWQgU3RyaW5nDQogIHdvcmtzUHJvZ3JhbXMgV29ya3NQcm9ncmFtW10NCiAgcm91dGluZXMgICBSb3V0aW5lVGFza1tdDQogIHVzZXIgICBVc2VyICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHVzZXJJZCBTdHJpbmcgICAgQHVuaXF1ZQ0KfQ0KDQoNCm1vZGVsIFdvcmtzUHJvZ3JhbSB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKSBAbWFwKCJ3b3Jrc19wcm9ncmFtX2lkIikNCiAgbmFtZSAgICAgICAgICBTdHJpbmcNCiAgY2F0ZWdvcnkgICAgICBDYXRlZ29yeV9Xb3Jrcw0KICBwbGFuICAgICAgICAgIFN0cmluZw0KICBpbmRpY2F0b3IgICAgIFN0cmluZw0KICB0aW1lICAgICAgICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICBzdGF0dXMgICAgICAgIFN0YXR1cyAgIC8vIEhhcHVzIGRlZmF1bHQgdmFsdWUNCiAgY3JlYXRlZF9hdCAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQ0KICB1cGRhdGVkX2F0ICAgIERhdGVUaW1lICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQ0KICBkaXZpc2lvbiAgICAgIERpdmlzaW9uIEByZWxhdGlvbihmaWVsZHM6IFtkaXZpc2lvbklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgZGl2aXNpb25JZCAgICBTdHJpbmcNCiAgcG9zaXRpb24gICAgICBQb3NpdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbcG9zaXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0pDQogIHBvc2l0aW9uSWQgICAgU3RyaW5nDQogIHJvdXRpbmVUYXNrcyAgUm91dGluZVRhc2tbXQ0KfQ0KDQptb2RlbCBSb3V0aW5lVGFzayB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKSBAbWFwKCJyb3V0aW5lX3Rhc2tfaWQiKQ0KICBuYW1lICAgICAgICAgIFN0cmluZw0KICBzdGF0dXMgICAgICAgIFN0YXR1cyAgIC8vIEhhcHVzIGRlZmF1bHQgdmFsdWUNCiAgdGltZSAgICAgICAgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgY2F0ZWdvcnkgICAgICBDYXRlZ29yeV9Sb3V0aW5lDQogIGRpdmlzaW9uICAgICAgRGl2aXNpb24gQHJlbGF0aW9uKGZpZWxkczogW2RpdmlzaW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KICBkaXZpc2lvbklkICAgIFN0cmluZw0KICBwb3NpdGlvbiAgICAgIFBvc2l0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtwb3NpdGlvbklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgcG9zaXRpb25JZCAgICBTdHJpbmcNCiAgd29ya3NQcm9ncmFtICBXb3Jrc1Byb2dyYW0gQHJlbGF0aW9uKGZpZWxkczogW3dvcmtzUHJvZ3JhbUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgd29ya3NQcm9ncmFtSWQgU3RyaW5nDQp9DQo=",
  "inlineSchemaHash": "7817eb52eba5c3144a347060e14fd616eb4e48667076c4118897181a8345b2ee"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"divisions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Division\",\"relationName\":\"DivisionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"relationName\":\"PositionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Division\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"division_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"relationName\":\"DivisionToPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worksPrograms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorksProgram\",\"relationName\":\"DivisionToWorksProgram\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoutineTask\",\"relationName\":\"DivisionToRoutineTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"DivisionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Position\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"position_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"division\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Division\",\"relationName\":\"DivisionToPosition\",\"relationFromFields\":[\"divisionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"divisionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worksPrograms\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorksProgram\",\"relationName\":\"PositionToWorksProgram\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routines\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoutineTask\",\"relationName\":\"PositionToRoutineTask\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PositionToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"WorksProgram\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"works_program_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category_Works\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"indicator\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"division\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Division\",\"relationName\":\"DivisionToWorksProgram\",\"relationFromFields\":[\"divisionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"divisionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"relationName\":\"PositionToWorksProgram\",\"relationFromFields\":[\"positionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"routineTasks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RoutineTask\",\"relationName\":\"RoutineTaskToWorksProgram\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RoutineTask\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"routine_task_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Status\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category_Routine\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"division\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Division\",\"relationName\":\"DivisionToRoutineTask\",\"relationFromFields\":[\"divisionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"divisionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Position\",\"relationName\":\"PositionToRoutineTask\",\"relationFromFields\":[\"positionId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"positionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worksProgram\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WorksProgram\",\"relationName\":\"RoutineTaskToWorksProgram\",\"relationFromFields\":[\"worksProgramId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"worksProgramId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"GURU\",\"dbName\":null},{\"name\":\"STAFF\",\"dbName\":null},{\"name\":\"KEPALA_SEKOLAH\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null},\"Status\":{\"values\":[{\"name\":\"ON_PROCESS\",\"dbName\":null},{\"name\":\"DONE\",\"dbName\":null},{\"name\":\"UNFINISHED\",\"dbName\":null}],\"dbName\":null},\"Category_Works\":{\"values\":[{\"name\":\"ROUTINE\",\"dbName\":null},{\"name\":\"INCIDENTAL\",\"dbName\":null}],\"dbName\":null},\"Category_Routine\":{\"values\":[{\"name\":\"ROUTINE\",\"dbName\":null},{\"name\":\"REGULATION\",\"dbName\":null},{\"name\":\"CHALLENGE\",\"dbName\":null},{\"name\":\"REQUEST\",\"dbName\":null},{\"name\":\"DEADLINE\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

