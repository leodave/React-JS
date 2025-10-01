import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Posts from './pages/Posts'
import NewPost, {action as newPostAction} from './pages/NewPost'
import './index.css'
import RootLayout from './pages/RootLayout'
import PostDetails, {loader as detailLoader} from './pages/PostDetails'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '/', 
        element: <Posts />,
    },
      { path: '/create-post', element: <NewPost/>,action : newPostAction},
      { path: '/:id', element: <PostDetails />, loader: detailLoader}
    ],
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
