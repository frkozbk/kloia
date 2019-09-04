import Validator from "validator";
export const validateEmail = text => {
  const sText = String(text);
  return Validator.isEmail(sText) && !Validator.isEmpty(sText);
};
export const validateText = text => {
  const sText = String(text);
  return !Validator.isEmail(sText) && Validator.isLength(sText, { min: 5 });
};
