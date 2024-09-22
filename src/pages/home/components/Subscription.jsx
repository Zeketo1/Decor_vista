import "../../../styles/home/Subscription.css";

const Subscription = () => {
  return (
    <section className="subscription-container">
      <div>
        <span>Stay Updated</span> {/* Updated title */}
        <p>
          Join our community and be the first to access premium designs
        </p>{" "}
        {/* Updated description */}
        <form>
          <input type="email" required placeholder="Enter your email" />{" "}
          {/* Added placeholder */}
          <button>Subscribe</button> {/* Updated button text */}
        </form>
      </div>
    </section>
  );
};

export default Subscription;
