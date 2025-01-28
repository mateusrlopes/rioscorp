function status(request, response) {
  response.status(200).json({ chave: "pessoas são fortes" });
}

export default status;
