const Blog = require('../../models/TicketingModels/blogModel');

 const createBlog = async (req, res) => {
    const { title, type, description, picture } = req.body;
    try {
        const newBlog = new Blog({
            title,
            type,
            description,
            picture
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully', newBlog });
    } catch (err) {
        console.error('Error creating blog:', err);
        res.status(400).json({ error: err.message });
    }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        console.error('Error retrieving blogs:', err);
        res.status(400).json({ error: err.message });
    }
};

const getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (err) {
        console.error('Error retrieving blog:', err);
        res.status(400).json({ error: err.message });
    }
};

const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, type, description, picture } = req.body;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, {
            title,
            type,
            description,
            picture
        }, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (err) {
        console.error('Error updating blog:', err);
        res.status(400).json({ error: err.message });
    }
};

const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
        console.error('Error deleting blog:', err);
        res.status(400).json({ error: err.message });
    }
};

module.exports = {createBlog, getBlogs, deleteBlog, updateBlog, getBlog};