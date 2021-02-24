const express = require("express");
const router = express.Router();

const Turma = require("../models/Turma.model");

router.get("/home", (req, res, next) => res.render("private/home"));

router.get("/turma", (req, res, next) => res.render("private/turma"));

router.get("/turma/cadastro", (req, res, next) =>
  res.render("private/turma/cadastro")
);

router.get("/alunos", (req, res, next) => res.render("private/alunos"));

router.get("/professor", (req, res, next) => res.render("private/professor"));

module.exports = router;
