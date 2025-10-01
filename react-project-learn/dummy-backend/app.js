const express = require('express');
const bodyParser = require('body-parser');

const { getStoredPosts, storePosts } = require('./data/posts');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/posts', async (req, res) => {
  const storedPosts = await getStoredPosts();
   //await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
  res.json({ posts: storedPosts });
});

app.get('/posts/:id', async (req, res) => {
  const storedPosts = await getStoredPosts();
  const post = storedPosts.find((post) => post.id === req.params.id);
  res.json({ post });
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const storedPosts = await getStoredPosts(); // must return an array
    const idParam = req.params.id;

    // if your IDs are numeric in storage, normalize both sides
    const idx = storedPosts.findIndex(p => String(p.id) === String(idParam));

    if (idx === -1) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const [deleted] = storedPosts.splice(idx, 1);

    // persist the updated list — implement this to write to your JSON/file/db
    await storePosts(storedPosts);

    // 204 (No Content) is common for DELETE; 200 with body is also fine
    return res.status(200).json({ deleted });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/posts', async (req, res) => {
  const existingPosts = await getStoredPosts();
  const postData = req.body;
  const newPost = {
    ...postData,
    id: Math.random().toString(),
  };
  const updatedPosts = [newPost, ...existingPosts];
  await storePosts(updatedPosts);
  res.status(201).json({ message: 'Stored new post.', post: newPost });
});

app.listen(8081, () => {
    console.log('Server is running on port 8081');
  });
  