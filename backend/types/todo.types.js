const z = require("zod");

const validateTodo = z.object({
  title: z.string(),
  description: z.string(),
  status: z.boolean(),
});

module.exports = validateTodo;
