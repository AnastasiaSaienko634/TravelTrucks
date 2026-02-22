import { Camper } from "@/types/campers";
import css from "./Reviews.module.css";

interface Props {
  camper: Camper;
}

const Reviews = ({ camper }: Props) => {
  if (camper.reviews?.length === 0) {
    return <p>No reviews yet!</p>;
  }
  return (
    <div>
      {camper.reviews?.map((review) => (
        <div key={review.reviewer_name} className={css.review}>
          <div className={css.headerReview}>
            {/* Reviewer Avatar  */}
            <div className={css.avatarReview}>{review.reviewer_name[0]}</div>

            {/* Info */}
            <div className={css.infoReview}>
              {/* Reviewer Name */}
              <p className={css.nameReview}>{review.reviewer_name}</p>
              {/* Review Stars */}
              <div className={css.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < review.reviewer_rating
                        ? css.starActive
                        : css.starInactive
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Review Comment */}
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
