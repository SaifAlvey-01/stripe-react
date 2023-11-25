export const Hosted = () => (
  <section>
    
    <form action="/hosted/create-checkout-session" method="POST">
      <input type="hidden"  name="amount" value={500}/> 
      <input type="hidden" name="product_name" value="Monthly Subscription"/> 
      <button type="submit" className="px-4 rounded-1 bg-dark">
        Checkout
      </button>
    </form>
  </section>
);