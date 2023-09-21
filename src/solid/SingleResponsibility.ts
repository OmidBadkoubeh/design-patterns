class BlogPost {
  constructor(public title: string, public content: string) {}

  createPost() {}

  updatePost() {}

  deletePost() {}
}

class BlogPostDisplay {
  constructor(private blogPost: BlogPost) {}

  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}

class BlogPostJson {
  constructor(private blogPost: BlogPost) {}

  returnJson() {
    return JSON.stringify({
      title: this.blogPost.title,
      content: this.blogPost.content,
    });
  }
}

export { BlogPost, BlogPostDisplay, BlogPostJson };
