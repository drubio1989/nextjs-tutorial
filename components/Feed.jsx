'use client';

import { useState, useEffect } from "react"

// import PromptCard from "./PromptCard";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  console.log(post)
  // const [copied, setCopied] = useState('')
  // const handleCopy = () => {
  //   setCopied(post.prompt);
  //   navigator.clipboard.writeText(post.prompt);
  //   setTimeout(() => setCopied(""), 3000)
  // }

  return (
    <div className="prompt_card">

      {/* <div className='flex justify-between items-start gap-5'>
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
            src={post.creator.image} 
            alt='user_image' 
            width={40} 
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>
       
        <div>  
          <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
          <p
            className='font-inter text-sm blue_gradient cursor-pointer'
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            #{post.tag}
          </p>

        </div>
        <div className='copy_btn' onClick={() => {}}>
          <Image 
            src={copied === post.prompt ? '/assets/icons/tick.svg': '/assets/icons/copy.svg'}
            height={12}
            width={12}  
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p 
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p> */}
    </div>
  )
}

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
     
      <PromptCard post={data[0]}/>
      {/* {data.map((post) => {
        <PromptCard 
          key={post._id} 
          post={post} 
          handleTagClick={handleTagClick} 
        />
      })} */}
    </div>
  )
}

const Feed = () => {

  // const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  // const handleSearchChange = (e) => {

  // }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);


  return (
    <section className='feed'>
      {/* <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form> */}
      <PromptCardList data={posts} handleTagClick={{}} />
    </section>
  )
}

export default Feed;