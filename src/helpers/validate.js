export function validateEmail(email) {
  if (email == undefined || email == null || email == '') return true;
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
