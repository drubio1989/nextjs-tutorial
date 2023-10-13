'use client';

import { useQuery } from '@tanstack/react-query'
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {

  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard 
          key={post._id} 
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

function Feed() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['promptData'],
    queryFn: () =>
      fetch("/api/prompt").then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={''}
          onChange={{}}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList data={data} handleTagClick={{}} />
    </section>
  )
}

export default Feed;