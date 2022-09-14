export const toErrorMap = (errors) => {
  const errorMap = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
