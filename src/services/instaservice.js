export default class InstaService {
  constructor() {
    this._apiBase = "https://my-json-server.typicode.com/Kirill255/react-instagram-app/";
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.json();
  };

  getAllPosts = async () => {
    const res = await this.getResource("posts");

    return res;
  };

  getAllUsers = async () => {
    const res = await this.getResource("posts");

    const users = res.map((user) => {
      const { id, name, altname, photo } = user;

      return {
        id,
        name,
        altname,
        photo
      };
    });

    return users;
  };

  // getAllPhotos === getAllUsers
  // shorter method
  getAllPhotos = async () => {
    const res = await this.getResource("posts");

    return res.map(this._transformPosts);
  };

  _transformPosts = (post) => {
    return {
      id: post.id,
      src: post.src,
      alt: post.alt
    };
  };
}
