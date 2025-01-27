import React from "react";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 Tips for a Cleaner Home",
      excerpt:
        "Discover the secrets to maintaining a spotless home with these professional tips.",
      image:"https://img.freepik.com/free-photo/dissatisfied-sad-afro-american-woman-feels-fatigue-after-doing-housework-uses-cleaning-tools_273609-50167.jpg?semt=ais_hybrid",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Home Cleaning",
    },
    {
      id: 2,
      title: "The Benefits of Green Cleaning",
      excerpt:
        "Learn why eco-friendly cleaning solutions are better for your health and the environment.",
      image:
        "https://img.freepik.com/free-photo/surprised-hesitant-young-housewife-hides-broom-shruggs-shoulders-bewilderment-opens-eyes-widely-wears-headband_273609-24235.jpg?semt=ais_hybrid",
      date: "March 10, 2024",
      author: "Michael Brown",
      category: "Green Living",
    },
    {
      id: 3,
      title: "Office Cleaning Best Practices",
      excerpt:
        "Essential tips for maintaining a clean and productive workplace environment.",
      image:
        "https://img.freepik.com/free-photo/future-motherhood-pregnancy-concept-happy-expectant-mother-holds-babys-mobile-feeding-bottle-prepares-become-mom-awaits-newborn-isolated-rosy-wall-clouds_273609-39609.jpg?semt=ais_hybrid",
      date: "March 5, 2024",
      author: "Emma Davis",
      category: "Commercial Cleaning",
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="section-header">
        <h2>Latest Articles</h2>
        <p>Tips, tricks, and insights from our cleaning experts</p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="blog-date">
                  <i className="far fa-calendar"></i>
                  {post.date}
                </span>
                <span className="blog-author">
                  <i className="far fa-user"></i>
                  {post.author}
                </span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
