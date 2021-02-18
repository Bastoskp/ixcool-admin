const express = require("express");
const router = express.Router();

const Turma = require("../models/Turma.model");

/* GET home page */
router.get("/", (req, res, next) => {
  const anoEscolar = "8 ano";
  const periodo = "matutino";
  const letraTurma = "A";
  const identificacao = `${anoEscolar} - ${periodo} - ${letraTurma}`;

  const turmaFalsa = {
    anoEscolar,
    periodo,
    letraTurma,
    identificacao,
  };
  // Turma.create(turmaFalsa).then((turmaDoDb) => {
  //   console.log(turmaDoDb);
  //   res.render("index", {
  //     turmaDoDb,
  //   });
  // });
});

module.exports = router;
