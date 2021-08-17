const router = require('express').Router();
const requestController = require('./request.controller')





router.get('/:skip', requestController.showList);
router.post('/', requestController.createArticle);
// router.get('/:id', requestController.showArticle);
router.put('/:id', requestController.updateArticle);
router.delete('/:id/:useridx', requestController.deleteArticle);


// router.post('/like', likeController.LikeAction)



module.exports = router;