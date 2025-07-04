import nonfictionalData from "../nonfiction.json"
import BookCard from "./BookCard";
export default function NonFiction() {
  return (
    <div>
      <h1>Non-Fiction Books</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {nonfictionalData.map ((el,i)=> <BookCard author={el.author} img={el.img} title={el.title} year={el.year} price={el.price} />)}
      </div>
    </div>
  );
}
