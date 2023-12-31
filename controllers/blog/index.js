const createBlog = require ('./create')
const updateBlog = require ('./update')
const getBlog = require ('./getBlog')
const getAllBlogs = require('./getAllBlogs')
const deleteBlog = require ('./delete')
const likeBlog = require ('./likeBlog')
const dislikeBlog = require ('./dislikeBlog')
const uploadImagesBlogs = require ('./uploadImage')

module.exports = {createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog, dislikeBlog, uploadImagesBlogs}