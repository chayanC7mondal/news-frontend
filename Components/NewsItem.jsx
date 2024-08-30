const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2 p-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{ height: "200px", objectFit: "cover" }} className="card-img-top" alt={title || "News Image"} />
      <div className="card-body">
        <h5 className="card-title">{typeof title === 'string' ? title.slice(0, 50) : "No Title Available"}</h5>
        <p className="card-text">
          {typeof description === 'string' ? description.slice(0, 90) : "This is the news description."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
