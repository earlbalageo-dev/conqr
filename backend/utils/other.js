//stores initials for avatar
export const getInitials = (fullName) => {
  const initials = fullName
    .split(' ')
    .map((n, index, array) => {
      if (index === 0 || index === array.length - 1) return n[0];
      else return '';
    })
    .join('')
    .toUpperCase();

  return initials;
};
