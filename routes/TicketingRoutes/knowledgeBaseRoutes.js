const express = require('express');
const { createKnowledgeBase, getKnowledgeBases } = require('../../controllers/TicketingControllers/knowledgeBaseController');
const router = express.Router();

router.post('/', createKnowledgeBase);
router.get('/', getKnowledgeBases);

module.exports = router;
