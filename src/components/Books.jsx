import { useState } from "react"
import {books as bookData} from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard"

import styles from "./Books.module.css"
import SearchBox from "./SearchBox"


function Books() {
  const [books, setbooks] = useState(bookData)
  const [liked, setliked] = useState([])
  const [search, setsearch] = useState([])

  const handleLikeedList =(book, status) =>{
    if (status){
      const newLikedList = liked.filter((i) => i.id !== book.id)
      setliked(newLikedList)
    }else{
      setliked((liked) => [...liked,book])
    }
}
const searchHandler = () =>{
      if(search){
      const newBooks = bookData.filter((book) =>
      book.title.toLocaleLowerCase().includes(search)
      );
      setbooks(newBooks);
    }else{
      setbooks(bookData);
    }
  }
  return (
   <>
   <SearchBox searchHandler={searchHandler} search={search} setsearch={setsearch}/>
    <div className={styles.container}>
        <div className={styles.cards}>
        {books.map((book)=>(
            <BookCard key={book.id} data={book} handleLikeedList={handleLikeedList}/>
        ))}
        </div>
        {!!liked.length && <div className={styles.favorite}>
          <h4>Favorite</h4>
        {liked.map((book)=>(
          <SideCard key={book.id} data={book}/>
        ))}</div>
        }
    </div>
   </>
  )
}

export default Books