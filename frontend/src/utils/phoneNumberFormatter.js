export const formatPhoneNumber = (value) => {
  // Strip non-digit characters
  const digits = value.replace(/\D/g, "");

  // Apply US format XXX-XXX-XXXX
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0,3)}-${digits.slice(3)}`;
  return `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6,10)}`;
};