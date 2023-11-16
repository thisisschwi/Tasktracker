let express = require('express');
let router = express.Router();
//connect with task model
let task = require('../models/task');
let TaskController = require('../controllers/task')
/* Get route for the Bio Books list */
// Read Operation
router.get('/', TaskController.DisplayTaskList);
/* Get route for Add Book page --> Create */
router.get('/add', TaskController.AddTask);
/* Post route for Add Book page --> Create */
router.post('/add', TaskController.ProcessTask);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', TaskController.EditTask);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', TaskController.ProcessEditTask);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', TaskController.DeleteTask);
module.exports = router;