module.exports = (body) => {
  const { status, userDetails } = body;
  if (status && (status != "open" && status != "closed")) {
    throw new Error("Invalid ticket status");
  }
  if (userDetails && (!userDetails.userName || !userDetails.age)) {
    throw new Error("Invalid user details");
  }
  if (userDetails?.age && parseInt(userDetails?.age) == NaN) {
    throw new Error("Incorrect age input");
  }
};
