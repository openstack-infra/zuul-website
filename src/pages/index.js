import React from 'react'

export default class IndexPage extends React.Component {
  render() {
    return (
      // Content must be wrapped in a container
      <div>

        {/* Banner */}
        <section id="banner">
          <header>
            <h2>Cross-Project CI/CD with Ansible</h2>
          </header>
        </section>

        {/* Highlights */}
        <section class="wrapper style1">
          <div class="container">
            <div class="row 200%">
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-gears"></i>
                  <h3>Project Gating</h3>
                  <p>Keep your builds evergreen by automatically merging changes only if they pass tests.</p>
                </div>
              </section>
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-pencil"></i>
                  <h3>CI/CD with Ansible</h3>
                  <p>Use the same Ansible to deploy your system and run your tests.</p>
                </div>
              </section>
              <section class="4u 12u(narrower)">
                <div class="box highlight">
                  <i class="icon major fa-wrench"></i>
                  <h3>Cross-Project Dependencies</h3>
                  <p>Easily test changes to multiple systems together before landing a single patch.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Gigantic Heading */}
        <section class="wrapper style2">
          <div class="container">
            <header class="major">
              <h2>Tested at scale</h2>
              <p>Zuul powers some of the largest Open Source development efforts</p>
            </header>
          </div>
        </section>

        {/* Video */}
        <section class="wrapper style1">
          <div class="container">
            <div class="row 200%">
              <section class="3u 12u(narrower)">
                <div class="box highlight">
                </div>
              </section>
              <section class="6u 12u(narrower)">
                <div class="box highlight">
                  <video controls poster="media/simulation-poster.png" width="100%">
                    <source src="media/simulation.webm" type="video/webm" />
                    <source src="media/simulation.mp4" type="video/mp4" />
                    <track src="media/simulation.vtt" label="English" kind="subtitles" srclang="en" />
                  </video>
                  <p>
                    See how Zuul tests cross-project changes in parallel.
                  </p>
                </div>
              </section>
              <section class="3u 12u(narrower)">
                <div class="box highlight">
                </div>
              </section>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
