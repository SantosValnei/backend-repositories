import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
    const custoHash = 8;
    return bcrypt.hash(password, custoHash);
}

export const checkPassword = (user, password) => {
    bcrypt.compare(password, user.password);
}
