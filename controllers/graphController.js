const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAllExpenses: function(req,res) {
      db.Expense
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findAllIncome: function(req,res) {
      db.Income
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findExpenseById: function(req, res) {
    db.Expense
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
    findIncomeById: function(req, res) {
    db.Income
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createExpense: function(req, res) {
    console.log("create expense works")
    console.log(req.body)
    db.Expense
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createIncome: function(req, res) {
    db.Income
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateExpense: function(req, res) {
    db.Expense
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateIncome: function(req, res) {
    db.Income
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeExpense: function(req, res) {
    db.Expense
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeIncome: function(req, res) {
    db.Income
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}