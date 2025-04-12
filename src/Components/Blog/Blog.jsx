import React from 'react'
import { useBlogs } from '../BlogAPI/BlogAPI'
import NoImg from '../../assets/NoImg.png'
import { Spiral } from 'ldrs/react'
import 'ldrs/react/Spiral.css'


const Blog = () => {

  const { blogs, isLoading, isError } = useBlogs()


  if (isLoading) return <div className='flex justify-center'><Spiral size="40" speed="0.9" color="#a5c3cb" /></div>
  if (isError) return <p>Error fetching blogs</p>;

  return (
    <section className="py-5 pb-7 bg-gradient-to-b from-white via-gray-200 to-gray-100">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            {blogs.map((blog, index) => (
              <div key={index} className='cursor-pointer shadow-lg rounded-lg hover:-translate-y-1 transition duration-150'>
                <a href={blog.url} target='_blank' title="" className="block aspect-w-4 aspect-h-3">
                  <img className="object-cover w-full h-full" src={blog.urlToImage || NoImg} alt={blog.title} />
                </a>
                <div className='px-3 pb-2'>
                  <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                  <p className="mt-6 text-xl font-semibold">
                      <a href={blog.url} target='_blank' title="" className="text-black">{blog.title}</a>
                  </p>
                  <p className="mt-4 text-gray-600 line-clamp-3">{blog.description}</p>
                  <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                  <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">{blog.publishedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Blog
