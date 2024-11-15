import { Post } from '../types/post';

interface PostContentProps {
  post: Post;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.description}</p>
    </div>
  );
};

export default PostContent;
