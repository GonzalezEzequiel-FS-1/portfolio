export const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, "").substring(0, 10);

  const part1 = digits.substring(0, 3);
  const part2 = digits.substring(3, 6);
  const part3 = digits.substring(6, 10);

  if (part2) {
    if (part3) return `(${part1}) ${part2}-${part3}`;
    return `(${part1}) ${part2}`;
  }
  if (part1) return `(${part1}`;
  return "";
};

