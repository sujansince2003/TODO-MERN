const z = require("zod");

const validateUserData = z.object({
  username: z.string(),
  password: z.string().min(8, "minimum 8 characters"),
});

module.exports = validateUserData;
