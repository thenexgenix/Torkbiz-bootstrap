import Image from "next/image";

const comments = [
  ["Johanna Erika","26 March 2023 , at 02:00 pm","3.png"],
  ["Tommy Reed","20 March 2023 , at 02:00 pm","1.png"],
  ["Max Adams","15 July 2023 , at 01:00 pm","2.png"],
  ["Chris Scott","19 Dec 2023 , at 04:00 pm","4.png"],
];

export default function BlogDetailsComments() {
  return (
    <div className="blog-details__comment" data-aos="fade-up" data-aos-duration="1000">
      <div className="sidebar">
        <div className="sidebar__comment">

          <div className="sidebar__head">
            <h3>Comment</h3>
          </div>

          <div className="sidebar__comment-body">
            <ul>
              {comments.map(([name, date, img], i) => (
                <li
                  key={i}
                  className={`sidebar__comment-item ${
                    i === 1 || i === 2 ? "sidebar__comment-item--reply" : ""
                  }`}
                >
                  <div className="comment">
                    <div className="comment__inner">

                      <div className="comment__head">
                        <div className="comment__author">
                          <div className="comment__author-thumb">
                            <Image
                              src={`/images/blog/user/${img}`}
                              alt={name}
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="comment__author-info">
                            <h6 className="mb-0">{name}</h6>
                            <span>{date}</span>
                          </div>
                        </div>

                        <div className="comment__action">
                          <a href="#post">
                            <Image
                              src="/images/blog/user/replay.svg"
                              alt="reply"
                              width={14}
                              height={14}
                            />{" "}
                            reply
                          </a>
                        </div>
                      </div>

                      <div className="comment__body">
                        <p className="mb-0">
                          We invite you to explore our trading blog for insights and expert analysis.
                        </p>
                      </div>

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
