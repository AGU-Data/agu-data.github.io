---
layout: post
title: Data and Software Sharing Guidance for Authors Submitting to AGU journals
feature-img: "assets/img/pexels/AGU-Stock-Underwater-Rocks-Sunlight-1314x400.jpg"
img: "assets/img/resources/agu-trademark-logo-horiz-128.png"
date: 21 July 2021
tags: [Data Sharing, Software Sharing, Author Guidance, AGU]
---


**Data and Software Sharing Guidance for Authors Submitting to AGU journals**

Data and software are the building blocks of the research published in the AGU journals. These digital objects need to be accessible, understandable, and open as possible for reuse to support transparency and replicability. These digital objects include:

1. Data from observations collected in the field;
2. Data from satellites (primarily level 2 or 3);
3. Data from laboratory experiments;
4. Software used for analysis and visualization of the data;
5. Software used to produce model output;
6. All data displayed in the figures of the paper.

Data and Software Availability Statements and Citations must satisfy [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors) requirements before publication. In this document, we offer guidance, templates, and examples to assist authors in meeting these requirements. The final determination of whether a manuscript meets these requirements is made by the journal editors. Author feedback is appreciated to help ensure that the process remains efficient, feasible, and meaningful.

AGU recognizes that not all data or software can be fully open.  Data or software that are sensitive or restricted must be protected through appropriate access controls. Data or software should be as open as possible, as closed as necessary. For data concerning Indigenous Peoples, authors should consult the [CARE Principles for Indigenous Data Governance](http://doi.org/10.5334/dsj-2020-043). 

**AGU Data Help Desk**

For questions or feedback regarding AGU’s Data and Software Sharing Guidance, contact [DataHelp@agu.org](mailto:DataHelp@agu.org). 


**Considerations for publication related to data and software**

1. **When to Make Your Data and Software Available**  
At the time your paper is <span style="text-decoration:underline;">submitted</span>, your data and software must be available to the editors and reviewers. At the time your paper is <span style="text-decoration:underline;">accepted</span>, your data and software availability statements must be clearly stated. A few repositories require the paper to be published before the data being registered and available, such that the persistent identifier resolves. These repositories are known, community-accepted repositories, and acceptable for use. Authors must still provide preliminary access to reviewers at the time of submission. Please ensure that your data and software are available with details of the online access location(s), data product names, variable names, time ranges, spatial locations, or any other search criteria to allow a reader and reviewer to Find and Access the data used and/or generated for the paper (including those represented in figures and tables). In summary, any data and software utilized in the work contained in the manuscript must be documented for free and open availability. Data or software that are sensitive and require restrictions on access (e.g., personal data, medical information, fossil locations, strategic models) must be preserved in a repository with appropriate access controls. 

2. **Availability Statement in Open Research Section (required)**

    1. <span style="text-decoration:underline;">Data Availability Statement (required):</span>  A Data Availability Statement is required in the Open Research section of your paper describing where and how your data are available, including an online means to access your data. Check links and files before submitting your paper to the journal so as to ensure the data are accessible for peer review. Many data repositories provide confidential data access for this purpose. [For data that are not publicly available, sensitive, or restricted, examples, templates, and specific guidance are provided in this document.]() 

    2. <span style="text-decoration:underline;">Software Availability Statement (required):</span> A Software Availability Statement is required in the Open Research section of your paper for software that is central to your research such as for model simulations, data analysis, data visualization, and model output analysis. The Availability Statement should contain a citation, licensing information, access restrictions, and a link to the development platform (e.g. GitHub). Note that “git/GitHub/GitLab” are not acceptable software repositories because they are not archival. [For software that are not publicly available, sensitive, or restricted, examples, templates, and specific guidance, are provided in this document.]()

3. **Data Citation (required)**  
Include data citations for the primary and processed research data in the References section of your paper. Doing so ensures proper credit is given for the data. Note, English-language (or English translation) for any cited sources is required. The [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors) guide provides information on how to cite your data.
    3. Primary Data and Processed Data: Some repositories “reserve a DOI” before publishing your data. Use this DOI in your data citation. Once your data are published, the DOI will resolve properly. Some repositories use other persistent identifiers or URLs which are permissible (e.g, GenBank). Some repositories will only provide a DOI close to or at the time of paper acceptance; in this case the DOI will need to be added during the final revision.
    4. Simulated Data / Model Output Data: [See the guidance for Numerical Models.](#bookmark=id.ashsx2axvar2) 
    5. Large Data (>1TB): Preservation of large data may be possible in some repositories for a fee. Authors should account for this in their research budget and Data Management Plan. Also, check with your university or institution and their repository.
    6. Data Used from Another Source (e.g., data created by others): Cite the specific source to ensure proper credit and allow readers to access the same version of the data. If the data are also associated with a publication, especially a data publication, cite both the paper and the repository. 
4. **Software Citation (required)**
If software is used to analyze or produce the data, including for model output, then include a software citation in the References section of your paper. The [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors) guide provides information on how to cite your software.
    4. Software you or your team have written: see the section below on preserving software.  
    5. Software already preserved: simply cite it. 
    6. Software created by others, but not preserved: work with the author on how they want it to be cited.

**Guidelines for Research Primarily Based on Numerical Models or Theory**

While numerical models or theoretical work may not utilize (input) data, often “output” such as figures or tables are considered data and should be made available in electronic form. Additionally, the software code (e.g. Python, Jupyter Notebooks, R, MATLAB) used to perform any data analysis and to produce the manuscript’s figures should be made available in a free and open platform (e.g., Github) and preserved in a repository (e.g., Zenodo). In the case where a manuscript makes no use of models, data, or analysis software (e.g., a purely theoretical paper or a review paper), then make note of this point in the Data and Software Availability Statements.

When the primary data for the research comes from numerical model simulations, follow these guidelines: 

1. **Citation of the model software**
    1. BEST OPTION (model in repository): Cite the model using a repository that registers the version used for the paper with a persistent identifier (e.g., Digital Object Identifier) and metadata that describes the model using community standards. For example, Github provides a [connection to Zenodo](https://guides.github.com/activities/citable-code/) for this purpose. If a published paper has the complete description, there should be a link in the repository to the published paper. Your citation should accurately capture the authors/creators of the model. In the Ocean modeling community it is common to use numerical models that are open access and well documented (e.g., GFDL-MOM, NEMO, ROMS, ADCIRC, FESOM, SHYFEM, SURF).
    2. GOOD OPTION (model described in paper): Cite the publication where the numerical model is described with information about the version used for this paper.
1. **Description of the numerical model.**
    1. Include a description of the model in the text of the paper that is adequate to support replicability. If a publication describes the model thoroughly, cite that paper.
2. **Information about the configuration/parameters used to run the model.**
1. This information should be included in the paper text as well as providing any script/workflow used. The script/workflow should be preserved in a repository and cited. Any boundary and/or initial condition datasets used should be described and cited. The goal is to provide sufficient information and resources so that an interested user, with sufficient computer resources, can replicate your simulation.
1. **Data and analysis software that supports the Summary Results, Tables and Figures.**
    1. BEST OPTION: Cite a package in an appropriate repository that includes scripts/workflows, provenance information, and summary files that support the research, figures, and tables, consistent with archives maintained for transparency and traceability by assessments such as the IPCC.

    2. GOOD OPTION: Cite files (e.g., scripts, descriptive detail) in an appropriate repository that support evaluating the research and provide the details behind the tables and figures.

    3. ACCEPTABLE OPTION: Provide the necessary information for transparency and traceability of the analysis using your community standards or guidance.

2. **Model Output Data.**

1. If model output is instrumental to evaluating the research, particularly with respect to producing manuscript figures or tables, then deposit the necessary model output in a community accepted, trusted repository (See [Commonly Used Repositories](#bookmark=id.ewy6ukgegh1a) for examples). There are currently limited resources for preserving files of very large size. However, selecting adequate output to produce manuscript figures and tables is generally much more manageable and is sufficient to meet the needs of replicability. 

AGU journals strongly prefer the publication of free and open-source software to ensure the replicability of results by readers.  

Proprietary or not "freely" available software can be used and cited provided that readers are able to access the software through standard and reasonable means (e.g., a software package associated with an instrument, or an available visualization script). Standard graphics, spreadsheet, or word processing programs do not need to be cited.

Software that can not be made available during peer review may result in the paper not being accepted.  The editor must be consulted in this case. 

**Highlight:** When deciding on what model data (e.g., simulation workflow outputs), simulation workflow configuration and code components to include with your paper, refer to the rubric and guidance developed by the [EarthCube Research Coordination Network (RCN)](https://modeldatarcn.github.io/) on model data management best practices.

**Selecting Your Repository**

Selecting a repository and determining data and software management best practices begins when you propose and fund your research project, through your Data (and Software) Management Plan. 

For publishing, you need to locate a repository that provides preservation services, such that:

1. The repository registers your data with a persistent identifier that is globally unique such as a Digital Object Identifier (DOI).  \
2. The data are freely accessible from a landing page that provides information (e.g., metadata) about your data, and preferably version controlled. 

Once published in an appropriate **_preservation_** repository, your data cannot be modified. We recommend you be in contact with the repository to understand their preservation practices and how they support the community and journal requirements.

Discipline-Specific Repositories:** These are specialized repositories which typically provide support and information on required standards for metadata and more.

AGU editors and staff have compiled a list of discipline-specific repositories and services to help authors find the repository that is right for your data. We are open to suggestions and additions to this list [See Appendix A for the list of commonly used repositories by journal](#bookmark=id.ewy6ukgegh1a).

**Institutional Repository:** Many universities are supporting research data and software management and compliance requirements for their researchers, and such services are often provided through the library. Librarians can be an excellent source of research data management support, including repository selection, and can help you comply with funder, publisher, and university requirements. 

**General Repository:** When using a general repository, make sure you provide documentation about your data that is in line with your community standards. Please refer to the[ Generalist Repository Comparison Chart](https://www.agu.org/-/media/Files/Publications/Generalist-Data-Repository-Grid.pdf) for additional repositories and guidance. Common repositories are:[ Zenodo](https://zenodo.org/), [Dryad](https://datadryad.org/), or[ Figshare](https://datadryad.org/). Dryad charges a fee that is [waived for U.S.NSF-funded authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/AGU-Partners-with-Dryad).

**Computing Center:** High-Performance Computers (HPC) have the infrastructure to support research using models and simulations, which may be involved in generating and/or analyzing high volumes of data. The operations team at the center may have recommendations for data management, storage, and preservation.

**National Repositories:** Some countries require authors to use their National Repositories for data and/or software preservation. 


**During Peer Review**

<span style="text-decoration:underline;">Data</span>: Your data must be available for peer review of your manuscript. Here are options to ensure confidential access to your data.


1. Preserve your data in a repository and make it available for peer review. Depending on the repository, this process can be done in a couple of ways:

    1. Provide a temporary private link (“share link”) in the last sentence of the Open Research section of your paper. This link will not be present in your published paper as it is not a persistent link. This approach allows your data to remain private until acceptance of the manuscript for publication.

    2. Provide the persistent identifier (e.g., DOI) for your data; i.e., when your dataset has completed the repository submission process and is now publicly available.

2. Include your data in the supplementary information of your paper, only <span style="text-decoration:underline;">for the purpose of peer review</span>.  The supplement is not a repository and can only be used to support the peer review process. You must still submit your data to a repository prior to paper acceptance.

<span style="text-decoration:underline;">Software</span>: For papers where software is central to the research, your software, or workflow, must be available, if the peer reviewer needs access. The options for providing or limiting access to your software are the same as for data.

Peer reviewers, with support from AGU staff, will ensure the link to the data and software resolves properly to a community-accepted, trusted repository and includes the data and software necessary to evaluate your research. 

 

**Paper Acceptance**

1. <span style="text-decoration:underline;">Data</span>: Relevant data and model results should be accessible at the time your paper is accepted. Note the possibility that in unusual cases the repository policy may not allow your data to be published until your paper is published. If that is the case, AGU will accept that your data will be made available after your paper is published. Please coordinate with the repository to ensure the availability of your data. \
2. <span style="text-decoration:underline;">Software</span>: For papers where software is central to your research, your software should be accessible at the time your paper is accepted.


**Availability Statements and Template Examples **

The Availability Statement is a narrative that indicates to the reader where and how to directly access your data and software and provides any information on licenses and restrictions. An Availability Statement should contain an in-text citation, licensing information (e.g., CC-BY 4.0, MIT) and access restrictions (e.g., authentication required) (here is an [example from JAMES](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019MS001726#jame20966-sec-0068-title)). Statements to the effect of "data available from authors" are not acceptable. Also, statements to the effect of “data available from[ http://nasa.gov](http://nasa.gov)” are not acceptable since high-level website references do not meet the [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors) requirements. Provide details of the specific locations, data product names, variable names, time ranges, spatial locations, and any other search criteria needed to Find and Access the data used/ generated in the paper (including those represented in figures and tables).

<span style="text-decoration:underline;">Data Availability Statement:</span>

1. **Data archived in a repository:** Datasets for this research are available in these in-text data citation references: Smith et al. (2019), [with this license, and these access restrictions if any], Jones et al. (2017) [with this license, and these access restrictions if any]. Such datasets must be findable and accessible (e.g. via URLs).  

2. **Data published in the literature:** Datasets for this research are included in this paper (and its supplementary information files): [citation for paper] or point to where the references are compiled. Such datasets _must be findable and accessible_ (e.g. via URLs). For example:  
Cline, D., R. Armstrong, R. Davis, K. Elder, and G. Liston. 2003. CLPX-Ground: ISA snow depth transects and related measurements ver. 2.0. Edited by M. A. Parsons and M. J. Brodzik. NASA National Snow and Ice Data Center Distributed Active Archive Center.[ https://doi.org/10.5060/D4MW2F23](https://nsidc.org/data/nsidc-0175). Accessed 2008-05-14. *Reproduced from[ESIP](https://esip.figshare.com/articles/Data_Citation_Guidelines_for_Earth_Science_Data_Version_2/8441816)*  
Citations for data in regular publications where data is not findable or accessible, i.e. not available are NOT acceptable. For a made-up example:  
Cline, D., R. Armstrong, R. Davis, K. Elder, and G. Liston. 2002. CLPX-Ground: ISA snow depth transects and related measurements, J. Ice., vol 1 (2), pp. 3-9. (journal is subscription only, and data is not available in the article or supplement information or is in a proprietary format that is no longer readable).

3. **Technical reports publishing the description of a dataset and its preparation, e.g., a data paper:** Datasets for this research are described in this paper: [citation for paper, with this license, and these access restrictions if any]. Such datasets must be findable and accessible (e.g. via URLs).  

4. **Theoretical papers, or most review papers:** Data were not used, nor created for this research.  

5. **Data not publicly available, but available to researchers with appropriate credentials:** Data for this research are not publicly available due to [Fill in reasons]. Data are stored in this in-text data citation reference: Smith et al. (2019), [with this license, and these access restrictions if any].  

6. **Data that are restricted by commercial, industry, patent, government policies, regulations or laws:** Data supporting this research are available in [cite in-text data citation reference from third party source], with [these restrictions that include information concerning required NDA, licensing, agreements], and are not accessible to the public or research community. [Provide a process for how other researchers can gain access.] NOTE: If your data are in this category, the editors will determine if this statement meets the AGU data guidelines sufficiently.

<span style="text-decoration:underline;">Software Availability Statement:</span>

The Availability Statement should contain a citation, licensing information, access restrictions, and a link to the development platform (e.g. GitHub). Note that “git/GitHub/GitLab” are not acceptable software repositories because they are not archival (see [AGU’s Data and Software for Authors](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors)).

1. **Software archived in a repository:** Software for this research is available in these in-text data citation references: Smith et al. (2019), [with this license, and these access restrictions if any], Jones et al. (2017) [with this license, and these access restrictions if any]. Such software must be findable and accessible (e.g. via URLs).  

2. **Software published in the literature as supplementary information:** Software for this research is included in this paper (and its supplementary information files): [citation for paper] or point to where the references are compiled. Such software must be findable and accessible (e.g. via URLs).  

3. **Software not publicly available, but available to researchers with appropriate credentials:** Software for this research is not publicly available due to [Fill in reasons]. Software is stored in this in-text citation reference: Smith et al. (2019), [with this license, and these access restrictions if any].  

4. **Software that are restricted by commercial, industry, patent, government policies, regulations or laws:** Software supporting this research are available in [cite in-text citation reference from third-party source], with [these restrictions that include information concerning required NDA, licensing, agreements], and is not accessible to the public or research community. [Provide a process for how other researchers can gain access.] NOTE: If your software is in this category, the editors will determine if this statement meets the AGU guidelines sufficiently.  

5. **Theoretical papers, or most review papers:** Software (other than for typesetting) was not used for this research.


**Appendix A: List of Commonly Used Discipline-Specific Repositories by Journal**

The data that supports the research reported in your paper must be deposited in a trusted repository. When identifying the most appropriate repositories for your data, first, refer to the AGU’s [journal-specific data guidance](https://www.agu.org/Publish-with-AGU/Publish/Author-Resources/Data-for-Authors). We recommend a repository that specializes in the data for your scientific discipline as this will maximize the probability that the deposited data will be findable, accessible, interoperable and reusable (FAIR). Otherwise, look to your [institutional repository](https://deepblue.lib.umich.edu/handle/2027.42/163716), your computing center, or a [general repository](https://www.agu.org/-/media/Files/Publications/Generalist-Data-Repository-Grid.pdf) (e.g.[ Zenodo](https://zenodo.org/),[ Dryad](https://datadryad.org/), [Figshare](https://figshare.com/)).

**ESS Commonly Used Repositories**

The following is a list of commonly used, FAIR aligned, open and generally accessible, data and software repositories used by ESS authors (based on 2020 articles):

1. [Zenodo](https://zenodo.org/)
2. [Figshare](https://figshare.com/)
3. [Dataverse](https://dataverse.harvard.edu/)
4. [Mendeley](https://data.mendeley.com/)

Also, the following is a list of organizational, funding aligned data and software sources that are commonly used by ESS authors (based on 2020 articles):

1.) [NASA](https://data.nasa.gov/); 2.) [NOAA](https://data.noaa.gov/); 3.) [ECMWF](https://www.ecmwf.int/); 4.) [NCAR](https://dashrepo.ucar.edu/); 5.) [China Meteorological Data Network](http://data.cma.cn/); 6.) [LLNL](https://www.llnl.gov/); 7.) [CloudSat Data Processing Center](http://www.cloudsat.cira.colostate.edu/); 8.) [USGS](https://www.usgs.gov/); 9.) [ESA](https://www.esa.int/); 10.) [GFZ](https://www.gfz-potsdam.de/en). 

**JAMES Commonly Used Repositories**

The following is a list of commonly used, FAIR aligned, open and generally accessible, data and software repositories used by JAMES authors (based on 2020 articles):

1. [Zenodo](https://zenodo.org/)
2. [Figshare](https://figshare.com/)
3. [PANGAEA](https://www.pangaea.de/)

Also, the following is a list of organizational, funding aligned data and software sources that are commonly used by JAMES authors (based on 2020 articles):

1.) [NCAR](https://dashrepo.ucar.edu/); 2.) [NASA](https://data.nasa.gov/); 3.) [NOAA](https://data.noaa.gov/); 4.) [ESGF](https://esgf.llnl.gov/); 5.) [DKRZ](https://www.dkrz.de/?set_language=en&cl=en); 6.) [ECMWF](https://www.ecmwf.int/); 7.) [IPSL](https://www.ipsl.fr/en/home-en/); 8.) [Copernicus](https://www.copernicus.eu/en/access-data); 9.) [Max Planck](https://www.mpg.de/en); 10.) [E3SM](https://e3sm.org/).

**JGR Oceans Commonly Used Repositories**

The following is a list of commonly used, FAIR aligned, open and generally accessible, data and software repositories used by JGR Oceans authors (based on 2020 articles):

1. [Zenodo](https://zenodo.org/)
2. [Figshare](https://figshare.com/)
3. [PANGAEA](https://www.pangaea.de/)

Also, the following is a list of organizational, funding aligned data and software sources that are commonly used by JGR Oceans authors (based on 2020 articles):

1.) [NOAA](https://data.noaa.gov/); 2.) [NASA](https://data.nasa.gov/); 3.) [Copernicus](https://www.copernicus.eu/en/access-data); 4.) [ECMWF](https://www.ecmwf.int/); 5.) [SOEST](https://www.soest.hawaii.edu/); 6.) [AVISO+](https://www.aviso.altimetry.fr/); 7.) [Remote Sensing Systems](https://remss.com/); 8.) [SEANOE](https://www.seanoe.org/); 9.) [WHOI](https://www.whoi.edu/)**;** 10.) [Met Office](https://www.metoffice.gov.uk/).
