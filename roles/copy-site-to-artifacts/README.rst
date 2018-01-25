Copy the Zuul website to the artifacts directory

This copies the website build output to the artifacts directory so
that it is published.

**Role Variables**

.. zuul:rolevar:: source_dir
   :default: {{ zuul_work_dir }}/html

   The source directory.

.. zuul:rolevar:: zuul_work_dir
   :default: {{ zuul.project.src_dir }}

   The location of the main working directory of the job.
