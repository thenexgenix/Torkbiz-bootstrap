export default function BlogDetailsCommentForm() {
  return (
    <div className="blog-details__commentform" data-aos="fade-up" data-aos-duration="1000">
      <div className="sidebar">
        <div className="sidebar__commentform" id="post">

          <div className="sidebar__head">
            <h3>Leave A Comment</h3>
          </div>

          <div className="sidebar__commentform-body pt-25">
            <form>
              <div className="row g-4">

                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control" placeholder="Full Name" />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input className="form-control" placeholder="Email here" />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Enter Your Message"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="trk-btn trk-btn--border trk-btn--primary1 mt-4"
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
