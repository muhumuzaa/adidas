import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () =>{
    return (
        <section className="max-container">
           
            <h3 className="capitalize text-4xl text-center font-palanquin font-bold">What our <span className=" text-coral-red">customer</span> say?</h3>
            <p className="font-montserrat mt-4 info-text max-w-lg m-auto">You need to add a media query to change flex-direction from row to column at the breaking point you define. You will likely want to change or remove your justify-content in this</p>
            <div className="justify-evenly mt-24 flex flex-1 items-center max-lg:flex-col gap-14">
                {reviews.map((review) =>(
                    <ReviewCard 
                    key={review.customerName}
                    imgURL = {review.imgURL}
                    customerName = {review.customerName}
                    rating = {review.rating}
                    feedback = {review.feedback}
                    />
                ))}
            </div>   

        </section>
    )
}

export default CustomerReviews;