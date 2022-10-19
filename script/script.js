function getValues() {
  let nome = $("#username").val();
  let num = $("#number").val();
  let valid = $("#validade").val();
  let cvc = $("#cvc").val();

  $(".cartaofrente").html(nome + " - " + valid + cvc);
}
