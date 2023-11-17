export const validate = (email, password, fullName, isUser) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isName = /^[a-zA-Z ]{2,30}$/.test(fullName);

  if (!isEmailValid) return "Invalid Email Address";
  if (!isPasswordValid) return "Invalid Password";
  if (!isUser) {
    if (!isName) return "Invalid Name";
  }

  return null;
};
