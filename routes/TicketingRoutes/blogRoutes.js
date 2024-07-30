const express = require('express');
const { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } = require('../../controllers/TicketingControllers/blogController');
const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
