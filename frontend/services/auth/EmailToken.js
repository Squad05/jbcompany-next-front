const extrairEmailDoToken = (token) => {
  try {
    const [, payloadBase64] = token.split(".");
    const payload = JSON.parse(atob(payloadBase64));

    const Email =
      payload.token || payload.sub || payload.Email || payload.user_Email;

    return Email;
  } catch (error) {
    console.error("Erro ao extrair Email do token:", error);
    return null;
  }
};

export { extrairEmailDoToken };
