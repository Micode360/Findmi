import "./css/user.darshboard.css"
import profile from "../img/testimonial.jpg"
import GeneralPosts from "./attatchments/generalPosts";
const UserDarshboard = () => {
  let tags = [
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
    'Sports',
    'Hero',
    'Wetin Dey',
  ]
  return (
    <div className="users_container">
      <div className="users_nav mflex mjustify-between msticky">
        <h4>Posts</h4>

        <div className="msearch_container">
          <div className="mi-search dsearch ml1">
            <input type="text" placeholder="Search tags" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="posts_tags mflex malign-center mb1 msticky">
        <div className="f1">Recent tags:</div>

        {
          tags.map((tag, index) => (
            <div className="Itag f1" key={index}>
              {tag}
            </div>
          ))
        }
      </div>

      <GeneralPosts />

      <GeneralPosts />

      <GeneralPosts />
    </div>
  );
};

export default UserDarshboard;
