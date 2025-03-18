import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <div class="about-container">
      <h1>About AmCart</h1>
      <p>Welcome to <strong>AmCart</strong>, your one-stop shop for the best products at unbeatable prices!</p>
      <p>Our mission is to provide high-quality products, seamless shopping experiences, and excellent customer service.</p>
      <p>At AmCart, we value:</p>
      <ul>
        <li>🚀 Fast & Reliable Service</li>
        <li>💰 Affordable Pricing</li>
        <li>📦 Wide Range of Products</li>
        <li>🎯 Customer Satisfaction</li>
      </ul>
      <p>Shop with confidence at <strong>AmCart</strong> and experience the future of eCommerce!</p>
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 {
      color: #333;
    }
    p {
      font-size: 18px;
      color: #555;
      line-height: 1.6;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul li {
      font-size: 18px;
      margin: 8px 0;
    }
  `]
})
export class AboutUsComponent {}
