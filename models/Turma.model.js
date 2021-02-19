const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const turmaSchema = new Schema(
  {
    anoEscolar: {
      type: String,
      required: [true, "ano escolar obrigatorio"],
    },
    periodo: String,
    letraTurma: String,
    identificacao: String,
    alunos: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Turma", turmaSchema);
