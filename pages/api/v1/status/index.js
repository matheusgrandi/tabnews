function status(request, response) {
  response
    .status(200)
    .send(
      "sou capaz e o melhor em tudo o que fizer, as pessoas me reconhecem por isso"
    );
}

export default status;
