// app/how-to-publish/page.js
import React from 'react';
import styles from './howtopublish.module.css'; // <-- Import as styles

export default function HowToPublish() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.subTitle}>Publish Your Research Paper</h1>

        <section >
          <p >
            An ultimate guide on how to publish a research paper in UGC approved International peer-reviewed journals.
            Publishing a research paper is an important milestone in any academic journey. It establishes your credibility as a researcher. This guide is for you to understand all crucial steps on how to publish a research paper.
          </p>
        </section>

        <div >
          <div >
            <h2 className={styles.subTitle}>Step 1: Prepare Your Manuscript</h2>
            <p >
              Before submitting your manuscript, ensure it meets the journal’s submission requirements:
            </p>
            <ul >
              <li>Review the Author’s Guidelines to ensure your manuscript is formatted correctly and adheres to ethical standards.</li>
              <li>Originality and Plagiarism Check: Ensure your work is original and free from plagiarism.</li>
              <li>Language Quality: Ensure clear, concise English, and consider professional editing if necessary.</li>
              <li>Gather Necessary Approvals: Include any ethical approvals if your research involves human participants, animals, or sensitive data.</li>
            </ul>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 2: Submission of Manuscript</h2>
            <p >
              The first step in publishing your research paper is submitting it to a journal. Choose an UGC & ISSN approved journal with global reach and a peer-reviewed policy.
            </p>
            <p >
              After submission, you will receive an acknowledgment email from the journal. You can track your paper's status with the provided tracking number.
            </p>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 3: The Review Process</h2>
            <p >
              Once submitted, your manuscript will be reviewed. This process starts with a basic check by the editorial team. If all is well, it will be forwarded to peer reviewers.
            </p>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 4: Acceptance Status</h2>
            <p >
              After peer review, the journal will notify you of the acceptance status:
            </p>
            <ul >
              <li>Acceptance: Your manuscript is accepted as-is.</li>
              <li>Revision Required: You need to make some changes before resubmitting.</li>
              <li>Rejection: If rejected, don’t be discouraged. Use the feedback to improve your manuscript.</li>
            </ul>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 5: Processing Charges</h2>
            <p >
              If your manuscript is accepted, you will be asked to pay processing charges. These are usually affordable and cover the publication costs.
            </p>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 6: Copyright Submission</h2>
            <p >
              You will be required to submit a copyright agreement, granting the journal the right to publish your research.
            </p>
          </div>

          <div >
            <h2 className={styles.subTitle}>Step 7: Publication</h2>
            <p >
              After completing the steps above, your paper will be formatted for publication. Once done, it will be made available, particularly if it's an open access journal.
            </p>
          </div>
        </div>


        <section>
          <p >
            This was a complete step-by-step guide on "How to Publish a Research Paper". Follow the guide to publish your research paper in the right journal.
          </p>
          <p >
            You may choose IJIRT as your journal. Being UGC & ISSN approved, we are credible in the academic community. Our global reach and open-access policy will help your paper gain more citations and reach.
          </p>

        </section></div>
      <div className={styles.rightSidebar}>
        <h2 className={styles.subTitle}>Join Our IPN</h2>
        <h3 >IJIRT Partner Network</h3>
        <p >
          Submit your research paper and those of your network (friends, colleagues, or peers) through your IPN account, and receive 800 INR for each paper that gets published.
        </p>
        <button className={styles.joinButton}>Join Now</button>
      </div>
    </div>

  );
}
