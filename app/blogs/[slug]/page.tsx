const BlogbyId = ({ params }: { params: { slug: string } }) => {
  return <div>Blog-Name-{params.slug}</div>;
};

export default BlogbyId;
