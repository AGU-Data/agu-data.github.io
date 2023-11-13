---
layout: post
title: Guidance for AGU Authors - R Scripts and Markdown
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/r-logo-horiz-128.png"
date: 05 November 2021
tags: [R Scripts, R Markdown, Software Sharing, Author Guidance, AGU]
---


## Guidance for AGU Authors: R Script(s)/Markdown

R is a popular programming language in the AGU community used for analyses and reporting. The following recommendations are available to help guide authors through the process of sharing their R script(s)/Markdown when submitting to AGU journals. Please note that any data used in your R script(s)/Markdown must be preserved and cited separately according to [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-and-Software-for-Authors) guidance.

**First**, read. This article, [Principles for data analysis workflows](https://doi.org/10.1371/journal.pcbi.1008770), highlights three phases to creating a reproducible workflow to ensure your analyses produce consistent results. The [Tidyverse Style Guide](https://style.tidyverse.org/index.html) and Jenny Bryan’s [naming things](https://speakerdeck.com/jennybc/how-to-name-files) are also nice places to learn how to make your code and files easier to read. Also, to create reproducible documents vs script files, [R Markdown: The Definitive Guide](https://bookdown.org/yihui/rmarkdown/) is a recommended read. Additional resources include: [The Carpentries ](https://carpentries.org/)(e.g., [R for Reproducible Scientific Analysis](https://swcarpentry.github.io/r-novice-gapminder/)), [rOpenSci](https://ropensci.org/), [SESYNC](https://www.sesync.org/), [RStudio](https://www.rstudio.com/). 

**Second**, store and preserve. Upload your R script(s) (e.g., R Markdown Notebook) in a public preservation repository that gives you a Digital Object Identifier (DOI), so that your scripts are preserved in the scholarly record and can be cited. We recommend using the following solution:

* _GitHub with documentation_ (e.g., [README](https://data.research.cornell.edu/content/readme)) with [sessioninfo](https://www.rdocumentation.org/packages/devtools/versions/2.4.2) included in the document or an [renv](https://rstudio.github.io/renv/articles/renv.html) file, [(open source) license](https://r-pkgs.org/license.html) (e.g., [MIT](https://choosealicense.com/licenses/mit/)), [citation file](https://citation-file-format.github.io/#/what-is-a-citation-cff-file) (e.g., CFF), [CodeMeta](https://codemeta.github.io/codemeta-generator/)/JSON-LD file. Use the GitHub release bridge with [Zenodo](https://zenodo.org/) to get a DOI ([Making your code citable](https://guides.github.com/activities/citable-code/)) or create an [Open Science Framework](http://osf.io) project to link your GitHub repository, reference library, and other project information in one place.

**Third**, display. Facilitate the reporting of your research to readers using a reproducible analysis environment. Services like [Binder](https://www.marsja.se/how-to-use-binder-r-statistical-environment-for-reproducible-research/) (also see [The Turing Way’s instructions](https://the-turing-way.netlify.app/reproducible-research/renv/renv-binder.html)) and [shinyapps.io](https://www.shinyapps.io/) allow for user interaction with the code or data directly, while other hosting methods, such as [RPubs](https://rpubs.com/), document the analysis process in a static manner.

No matter which option you choose, make sure you obtain a publicly accessible link so that it can be displayed to any reader, but also **note that the above are not preservation solutions**.

**Fourth**, cite and describe. Establish the connection between your script(s) and paper using these two steps.

* Cite your script(s), using your DOI, in the References section of your paper. Example citation below:  

Matt Selensky. (2021). mselensky/Selensky2021&#95;LavaBeds&#95;Lithoautotrophy: Stable Carbon Isotope Depletions in Lipid Biomarkers Suggest Subsurface Carbon Fixation in Lava Caves (v1.0.0) [Collection]. Zenodo. [https://doi.org/10.5281/zenodo.5016282](https://doi.org/10.5281/zenodo.5016282)  

_Note: The “[Collection]” bracketed description is used as the citation contains both software and data. For only software, use [Software], for only data, use [Dataset]._  

* Describe the availability of your script(s) by including the DOI of the preserved release used by your paper, link to the development platform (e.g., GitHub), and the display link (e.g., RPubs) in the Availability Statement of your paper. For AGU, the Availability Statement is located in the Open Research section. Statement template is below:

“The R script(s)/Markdown used to execute/report on the analyses in the paper can be found at &lt;GitHub&gt;, displayed at &lt;RPubs&gt;, and is preserved at &lt;in-text citation to DOI where script(s)/Markdown are preserved, e.g., Zenodo or OSF, version, and license&gt;”

Erdmann, Christopher, Meyer, Michael F., Little, John R., Hondula, Kelly, Stachelek, Jemma, Oleksy, Isabella, Brousil, Matthew R., Claborn, Kelly, Mesman, Jorrit, & Dennis, Tim. (2021). Guidance for AGU Authors: R Script(s)/Markdown. Zenodo. [https://doi.org/10.5281/zenodo.5647998](https://doi.org/10.5281/zenodo.5647998)

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.5647998.svg)](https://doi.org/10.5281/zenodo.5647998)


**Additional Resources (Since Publication):**
- [How to Cite R and R Packages](https://ropensci.org/blog/2021/11/16/how-to-cite-r-and-r-packages/)
- [cffr](https://docs.ropensci.org/cffr/) provides utilities to generate, parse, modify and validate CITATION.cff files automatically for R packages, as well as tools and examples for working with .cff more generally.

