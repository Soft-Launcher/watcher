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
var import_core5 = require("@keystone-6/core");

// src/portfolio/categories/keystone.category-schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var CategoryKeystoneSchema = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ isIndexed: "unique" }),
    projects: (0, import_fields.relationship)({ ref: "Project.categories", many: true })
  }
});

// src/portfolio/projects/infraestructure/keystone.project-schema.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var projectKeystoneSchema = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    name: (0, import_fields2.text)(),
    caption: (0, import_fields2.text)(),
    categories: (0, import_fields2.relationship)({ ref: "Category.projects", many: true }),
    client: (0, import_fields2.text)(),
    pictureURI: (0, import_fields2.text)()
  }
});

// src/portfolio/infraestructure/keystone.portfolio-schema.ts
var portfolioKeystoneLists = {
  Category: CategoryKeystoneSchema,
  Project: projectKeystoneSchema
};

// src/team/collaborators/infraestructure/keystone.collaborator-schema.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var collaboratorKeystoneSchema = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    name: (0, import_fields3.text)(),
    description: (0, import_fields3.text)(),
    profilePictureURI: (0, import_fields3.text)(),
    personalPortfolioURI: (0, import_fields3.text)()
  }
});

// src/team/infraestructure/keystone.team-schema.ts
var keystoneTeamLists = {
  Collaborator: collaboratorKeystoneSchema
};

// src/users/user.schema.ts
var import_core4 = require("@keystone-6/core");
var import_fields4 = require("@keystone-6/core/fields");
var isAdmin = ({ session: session2 }) => Boolean(session2?.data.isAdmin);
var UserSchema = (0, import_core4.list)({
  fields: {
    name: (0, import_fields4.text)(),
    surname: (0, import_fields4.text)(),
    email: (0, import_fields4.text)({ isIndexed: "unique" }),
    password: (0, import_fields4.password)(),
    isAdmin: (0, import_fields4.checkbox)(),
    isSuperAdmin: (0, import_fields4.checkbox)()
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
var Lists = {
  User: UserSchema,
  ...portfolioKeystoneLists,
  ...keystoneTeamLists
};

// src/auth/index.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var import_crypto = require("crypto");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "isAdmin isSuperAdmin",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
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
  (0, import_core5.config)({
    db: {
      provider: "postgresql",
      url: process.env.POSTGRES_URL || ""
    },
    session,
    lists: Lists,
    server: {
      port: Number(process.env.PORT) || 3e3
    },
    ui: {
      basePath: process.env.BASE_PATH
    },
    graphql: {
      path: `${process.env.BASE_PATH || ""}/api/graphql`
    },
    telemetry: false
  })
);
//# sourceMappingURL=config.js.map
