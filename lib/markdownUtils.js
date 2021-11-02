import fs from "fs"; // FS Node module to work with the File System
import * as path from "path";
// import * as matter from 'gray-matter';
import matter from "gray-matter";

// process.cwd() -> Absolute path to the current working directory (overall project folder)
const postsDirectory = path.join(process.cwd(), 'content', 'posts');

function getFileData(directory, fileName, extension = '.md') {
    const fullFilePath = path.join(directory, fileName);
    const fileOverallContent = fs.readFileSync(fullFilePath, 'utf-8'); // Defined the file encoded as utf-8, so we support all the unicode characters
    const {data: MetaData, content} = matter(fileOverallContent);
    const fileNameWithoutExtension = fileName.replace(RegExp(extension, "g"), '');
    return {id: fileNameWithoutExtension, ...MetaData, content};
};

export const getAllPosts = () => {
    // Returns and array of strings (file names)
    const postsFileNames = fs.readdirSync(postsDirectory); // Reads all the content synchronously (in a blocking way). Reads the content of the directory in one go
    const postsFilesData = postsFileNames.map(postsFileName => getFileData(postsDirectory, postsFileName));
    // Orders the postsFileData js objects by the date: (posts with a greater date or a more recent date, will appear first in the array (with a lower index))
    return postsFilesData.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
};

export const getFeaturedPosts = () => {
    const sortedPostsFilesData = getAllPosts();
    return sortedPostsFilesData.filter(postFileData => postFileData.isFeatured);
};

export const getOneSinglePost = (postId) => {
    // const sortedPostsFilesData = getAllPosts();
    // return sortedPostsFilesData.find(postFileData => postFileData.id === postId);
    return getFileData(postsDirectory, `${postId}.md`);
};

export const getFileNames = (directory) => {
    return fs.readdirSync(directory);
};

export const getFileNamesWithoutExtension = (directory, extension = '.md') => {
    const fileNames = fs.readdirSync(directory);
    return fileNames.map(fileName => fileName.replace(RegExp(extension, "g"), ''));
};