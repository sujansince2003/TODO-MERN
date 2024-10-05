const z = require("zod");

const validateUserData = z.object({
  username: z.string().required(),
  password: z.string().min(8, "minimum 8 characters").required(),
});

module.exports = validateUserData;
