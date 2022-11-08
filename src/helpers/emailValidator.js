export function emailValidator(email) {
/* A regular expression that checks if the email is valid. */

/* A regular expression that checks if the email is valid. */
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}
