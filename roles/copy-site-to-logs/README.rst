Copy the Zuul website to the logs directory

This copies the website build output to the logs directory so that it
is published as a draft.

**Role Variables**

.. zuul:rolevar:: source_dir
   :default: {{ zuul_work_dir }}/html

   The source directory.

.. zuul:rolevar:: zuul_work_dir
   :default: {{ zuul.project.src_dir }}

   The location of the main working directory of the job.
