const router = require("express").Router();
const graphController = require("../controllers/graphController");

router.post("/expenses", graphController.createExpense);

router.post("/income", graphController.createIncome)

router.get("/expenses", graphController.findAllExpenses);

router.get("/income", graphController.findAllIncome)

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);


// router.route("/savedGraph")
//     .get(graphController.findGraph)
//     .post(graphController.createGraph);

  
module.exports = router;