import React from 'react'

const Footer = () => (
        <div id="footer">
          <div class="container">
            <div class="row">
              <section class="3u 6u(narrower) 12u$(mobilep)">
                <h3>Get Zuul</h3>
                <ul class="links">
                  <li><a href="https://git.zuul-ci.org/">Source</a></li>
                  <li><a href="https://pypi.python.org/pypi/zuul/">Install</a></li>
                  <li><a href="https://zuul-ci.org/docs/">Documentation</a></li>
                </ul>
              </section>
              <section class="3u 6u$(narrower) 12u$(mobilep)">
                <h3>Get Involved</h3>
                <ul class="links">
                  <li><a href="http://lists.zuul-ci.org/cgi-bin/mailman/listinfo">Mailing lists</a></li>
                  <li><a href="http://webchat.freenode.net/?channels=%23zuul">IRC</a> #zuul on Freenode</li>
                  <li><a href="https://storyboard.openstack.org/#!/project/679">Bugs</a></li>
                  <li><a href="https://review.openstack.org/#/q/status:open+project:openstack-infra/zuul">Code Review</a></li>
                </ul>
              </section>
            </div>
          </div>

          {/* Copyright */}
          <div class="copyright">
            <ul class="menu">
              <li>&copy; Zuul Contributors. Licensed under Creative Commons Attribution 3.0</li><li>Title image by James E. Blair</li><li>Design based on Arcana from: <a href="http://html5up.net">HTML5 UP</a></li><li><a href="https://git.zuul-ci.org/zuul-website/tree/">Browse page source</a></li>
            </ul>
          </div>

        </div>
)

export default Footer
