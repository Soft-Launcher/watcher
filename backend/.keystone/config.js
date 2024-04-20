"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// src/users/user.schema.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");
var isAdmin = ({ session: session2 }) => Boolean(session2?.data.isAdmin);
var UserSchema = (0, import_core.list)({
  fields: {
    name: (0, import_fields.text)(),
    surname: (0, import_fields.text)(),
    email: (0, import_fields.text)({ isIndexed: "unique" }),
    password: (0, import_fields.password)(),
    isAdmin: (0, import_fields.checkbox)(),
    isSuperAdmin: (0, import_fields.checkbox)()
  },
  access: {
    operation: {
      query: () => true,
      create: isAdmin,
      delete: isAdmin,
      update: isAdmin
    }
  }
});

// src/keystone/lists.ts
var lists = {
  User: UserSchema
};

// src/auth/index.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var import_crypto = require("crypto");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "isAdmin isSuperAdmin"
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: { provider: "sqlite", url: "file:./keystone.db" },
    session,
    lists
  })
);
//# sourceMappingURL=config.js.map
