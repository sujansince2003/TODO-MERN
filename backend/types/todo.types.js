const z = require("zod");

const validateTodo = z.object({
  title: z.string().required(),
  description: z.string().required(),
  status: z.boolean().required(),
});

module.exports = validateTodo;
