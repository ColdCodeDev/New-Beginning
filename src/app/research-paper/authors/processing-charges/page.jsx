'use client'; // if you're using Next.js app directory (Next 13+)

import React from 'react';
import styles from './processingcharges.module.css'; // <-- Import your CSS module

export default function ProcessingCharges() {
  return (

    <div className={styles.container}>
      <div>
        <section>
          <h2>Processing Charges</h2>
          <p >
            At IJIRT, we strive to provide high-quality publication services at competitive rates. Below are the processing charges applicable to Indian and International authors.
          </p>

          <h3>For Indian Authors</h3>
          <ul>
            <li>Standard Paper (6 pages): INR 1850</li>
            <li>Number of Authors: Up to 13 authors without extra charge</li>
            <li>Extra Pages: Charges apply for additional pages</li>
          </ul>

          <h3>For International Authors</h3>
          <ul>
            <li>Standard Paper: $100</li>
            <li>Extra Pages: Charges apply for additional pages</li>
          </ul>

          <p>Payments should be made as per the options during acceptance notification.</p>
        </section>

        <section >
          <h2>Impact Factor</h2>
          <p>8.01 (Year 2024)</p>
          <h3>UGC Approved</h3>
          <p>Journal no 47859</p>
        </section>
      </div>
      <section className={styles.rightSidebar}>
        <h2>Join Our IPN</h2>
        <h3 >IJIRT Partner Network</h3>
        <p>
          Submit your research paper and those of your network (friends, colleagues, or peers) through your IPN account, and receive 800 INR for each paper that gets published.
        </p>
        <button className={styles.joinButton}>Join Now</button>
      </section>
    </div>

  );
}
