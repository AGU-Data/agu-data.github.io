---
layout: post
title: Guidance for AGU Authors - Jupyter Notebooks
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/jupyter-logo.png"
date: 14 June 2021
tags: [Jupyter, Resources]
---

## Guidance For AGU Authors: Jupyter Notebooks

Jupyter Notebooks are increasingly being used for documenting data science workflows and replicating relevant analyses in research. The following recommendations are available to help guide authors through the process of sharing their Jupyter Notebooks when publishing in AGU journals. Please note that any data used by your notebook must be preserved and cited separately from the notebook according to [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-and-Software-for-Authors) guidance.

**First**, read. [Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks](https://doi.org/10.1371/journal.pcbi.1007007) and the recommendations from [Jupyter Notebooks and reproducible data science](https://markwoodbridge.com/2017/03/05/jupyter-reproducible-science.html) will help you with creating computational notebooks that are easier to read, run, and explore.

**Second**, store and preserve. Upload your notebook ina public repository that gives you a Digital Object Identifier (DOI), so that your notebook is preserved in the scholarly record and can be cited. We recommend using the following solution:  

* *GitHub with documentation* (e.g., README),[(open source) license](https://choosealicense.com/), [citation file](https://citation-file-format.github.io/#/what-is-a-citation-cff-file) (e.g., CFF), [CodeMeta](https://codemeta.github.io/codemeta-generator/)/JSON-LD file. Manage dependencies (with [conda-lock](https://pythonspeed.com/articles/conda-dependency-management/)). Use the GitHub release bridge with [Zenodo](https://zenodo.org/) to get a DOI ([Making your code citable](https://guides.github.com/activities/citable-code/)).

**Third**, execute. Facilitate the rerunning of your notebook by readers through a zero-install environment in the cloud. We recommend [these instructions](https://the-turing-way.netlify.app/reproducible-research/renv/renv-binder.html) and the following solution:

* [Binder](https://mybinder.org/) or [Pangeo](https://binder.pangeo.io/), upload your notebook and an environment.yml file, run it, and share it via link

No matter which execution environment you choose, make sure you obtain a publicly accessible link to your notebook so that it can be executed by any reader.

**Fourth**, cite and describe. Establish the connection between your notebook and paper using these two steps.

* Cite your notebook, using your DOI, in the References section of your paper. Example citation below:  
  
Fenner, M. (2019).Jupyter Notebook FREYA PID GraphKey Performance Indicators(KPIs)(Version 1.1.0). DataCite. [https://doi.org/10.14454/3BPW-W3812](https://doi.org/10.14454/3BPW-W3812)

* Describe the availability of your notebook by including the DOI of the preserved release used by your paper and the execution link in the Availability Statement of your paper. For AGU, the Availability Statement is located in the Open Research section. Statement template is below:  
  
“The Jupyter Notebook to execute the analysis in the paper can be found at <include link to rerunnable notebook link in the cloud> and is preserved at <include link to hostednotebook DOI, version, and license>”

**Fifth**, render (optional). Consider rendering your notebook using the [Executable Book Project](https://executablebooks.org/en/latest/) and [Jupyter Book](https://jupyterbook.org/intro.html). An example [project gallery](https://executablebooks.org/en/latest/gallery.html) of Jupyter Books is available. The [Neuro Libre Project](https://www.neurolibre.com/) features additional Jupyter Book examples.

Erdmann, Christopher, Stall, Shelley, Gentemann, Chelle, Holdgraf, Chris, Fernandes, Filipe P. A., & Gehlen, Karsten Peters-von. (2021, May 20). Guidance for AGU Authors - Jupyter Notebooks. Zenodo. [http://doi.org/10.5281/zenodo.4910038](http://doi.org/10.5281/zenodo.4910038) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.4910038.svg)](https://doi.org/10.5281/zenodo.4910038)
