zuul-ci.org website
===================

This repo contains the source code for the http://zuul-ci.org website. It is
built using `gatsby`_ which is a `JAMstack`_ static site generator based on
`react`.

yarn dependency management
--------------------------

`yarn`_ manages the javascript dependencies. That means the first step is
getting `yarn`_ installed. If you don't have `yarn`_ and don't know what that
means, there is a helper script:

.. code-block:: console

  tools/install-js-tools.sh

The ``tools/install-js-tools.sh`` script will add apt or yum repositories and
install `nodejs`_ and `yarn`_ from them. For RPM-based distros it needs to know
which repo description file to download, so it calls out to
``tools/install-js-repos-rpm.sh``.

Once yarn is installed, getting dependencies installed is:

.. code-block:: console

  yarn install

The ``yarn.lock`` file contains all of the specific versions that were
installed before. Since this is an application it has been added to the repo.

Building for development
------------------------

Once you've installed dependencies, run:

.. code-block:: console

  npm run develop

This will compile the content using developer mode settings and start a local
webserver serving the content.

Serving production code locally
-------------------------------

To build production version of the code (without developer flags enabled) run:

.. code-block:: console

  npm run build

You can then serve that content from a local webserver with:

.. code-block:: console

  npm run serve


.. _gatsby: https://www.gatsbyjs.org/
.. _react: https://www.reactjs.org/
.. _JAMstack: https://jamstack.org/
