import logo from "./logo.svg";
import styles from "./App.module.css";
import perfume from "./assets/images/perfume.jpg";
import perfume2 from "./assets/images/perfumeMobile.jpg";
import cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <div className="App">
      <body>
        <article className={styles.productContainer}>
          <div className={styles.picture}>
            <img src={perfume2} alt="Perfume" />
          </div>
          <div className={styles.productContent}>
            <div className={styles.productDetails}>
              <p className={styles.category}>Perfume</p>
              <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
              <p>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
            </div>
            <div className={styles.productPrice}>
              <p className={styles.currentPrice}>$149.99</p>
              <s className={styles.originalPrice}>$169.99</s>
            </div>
            <div className={styles.addToCart}>
              <button>
                {" "}
                <img src={cart} alt="icon-cart" />
                Add to Cart
              </button>
            </div>
          </div>
        </article>
        {/* <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div> */}
      </body>
    </div>
  );
}

export default App;
