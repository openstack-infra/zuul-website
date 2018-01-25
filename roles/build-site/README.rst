Build the Zuul website

The Zuul website is currently static, however, if it later is built
by a static site generator, or otherwise needs pre-processing,
this role should perform that.

Right now, it just copies files.

**Role Variables**

.. zuul:rolevar:: output_dir
   :default: {{ zuul_work_dir }}/html

   The destination directory.

.. zuul:rolevar:: zuul_work_dir
   :default: {{ zuul.project.src_dir }}

   The location of the main working directory of the job.
