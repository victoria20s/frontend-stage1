export default function About() {
  return (
    <main data-testid="test-about-page" className="page">
      <section>
        <h2>Bio</h2>
        <p data-testid="test-about-bio">I am a frontend developer learning React and building multi-page applications.</p>
      </section>

      <section>
        <h2>Goals in this program</h2>
        <p data-testid="test-about-goals">To master React, accessibility, and responsive UI design.</p>
      </section>

      <section>
        <h2>Areas of low confidence</h2>
        <p data-testid="test-about-confidence">Advanced state management and testing.</p>
      </section>

      <section>
        <h2>Note to future self</h2>
        <p data-testid="test-about-future-note">Keep practicing consistently and improving accessibility skills.</p>
      </section>

      <section>
        <h2>Extra thoughts</h2>
        <p data-testid="test-about-extra">Focus on writing clean, modular, and maintainable code.</p>
      </section>
    </main>
  )
}
