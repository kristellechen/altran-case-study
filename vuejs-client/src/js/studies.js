module.exports = {

  // Get an  empty study stub used for creating a new study.
  getNewStudy () {
    return {
      caseId: '',
      client: 'new client name',
      projectName: '',
      year: '2018',
      brand: '',
      industry: '',
      sector: '',
      services: '',
      projectType: '',
      engagementType: '',
      discipline: '',
      technologies: '',
      keywordLookup: '',
      challenges: '',
      solution: '',
      provenResults: '',
      keywords: '',
      summary: '',
      team: '',
      images: ''
    }
  },

  getStudies () {
    return [{
      'ID': 1,
      'Client': 'Abaxis',
      'ProjectName': 'HL7 Interface Development',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Development',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': 'Software, Test',
      'Technologies': '',
      'Keyword': 'HL7, Class II, EMR',
      'Challenges': 'Current analyzer capable of sending only ASTM data\n\nAdding HL7 data capability to existing analyzer with minimum system changes\n\nSimplifying implementation of HL7 solution for small medical centers with limited IT support\n\nMissing documentation and artifa',
      'Solution': 'Created HL7 plug-in for analyzer that enabled broader connectivity \n\nDesigned and developed a plug-in to enable and simplify installation of HL7 solution \n\nDocumented QMS process to ensure consistency moving forward',
      'ProvenResults': 'Enabled analyzer to deliver data in HL7 format\n\nAble to deliver a customized configuration of HL7 solution to small medical center customers \n\nNow have artifacts and documentation that meet requirements for a Class II medical device',
      'Situation': 'Leading diagnostic medical device manufacturer must improve and expand their connectivity strategy for lab equipment. They need a solution to enable their existing blood chemistry analyzers to communicate via HL7 with EMRs/LIMs.',
      'Keywords': 'HL7, Class II, EMR',
      'ProjectSummary': 'Leading diagnostic medical device company needed a solution to enable existing devices to send HL7 data to EMRs.',
      'ProjectTeam': 'Matt Eisedrath, Peter Rudolph',
      'Images': 0
    },
    {
      'ID': 2,
      'Client': 'Abbott Diabetes',
      'ProjectName': 'Next Generation Hospital Glucose Meter and Data Management System',
      'Year': '(Pre 2009)',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Project Management, Requirements Definition, Design, Development, Verification',
      'ProjectApplicationType': 'Embedded',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'HL7, Class II, EMR, HIS',
      'Challenges': 'Diverse stakeholders accustomed to working in silo fashion (many from an acquired company)\n\nNo internal HL7 or enterprise platform experience\n\nVery tight time-to-market window (12 months)',
      'Solution': 'Provided dedicated team with deep domain and regulated development experience\n\nFull project responsibility: project management, requirements, architecture, design, development, and verification\n\nCollaborated with stakeholders to align technical decisions',
      'ProvenResults': 'Class II data management system designed to receive data from a point-of-care device\n\nDesigned and implemented HL7 interfaces for the HIS and EMR enabling connectivity with meter while minimizing labor and data collection procedures\n\nMet aggressive market',
      'Situation': 'A manufacturer of hospital-based diabetes blood glucose monitors and meters needed to make significant updates to their hospital-based meters and develop a new data management system. Company facing an aggressive market window and had limited experience i',
      'Keywords': 'HL7, Class II, HIS, EMR',
      'ProjectSummary': 'Manufacturer of hospital-based diabetes blood glucose monitors and glucose meters needed update to hospital-based meters and new data management system. Foliage developed Class II data management system designed to receive data from a point-of-care device',
      'ProjectTeam': 'Greg Walsh, John Carey',
      'Images': 0
    },
    {
      'ID': 3,
      'Client': 'Abbott Molecular',
      'ProjectName': 'Platform Upgrade & Migration',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Project Management, Development, Test',
      'ProjectApplicationType': 'Enterprise',
      'Engagement': 'Software Development',
      'Discipline': 'Software',
      'Technologies': 'Enterprise',
      'Keyword': 'Migration, Code, Platform, Upgrade, Windows XP, Windows 7',
      'Challenges': 'Need to certify that new OS is compatible with all pieces of their software platform\n\nMust maintain same operational efficiency for hundreds of customers while migrating to the new OS\n\nComplex assessment due to the reliance on third party software',
      'Solution': 'Assessment identified high-risk areas for porting and code requiring rewriting\n\nImplementation strategy focused on moving over a million lines of code to new OS\n\nEnsured compatibility of new OS with ~25 third party software applications',
      'ProvenResults': 'New OS allows for enhancement to existing product and future models\n\nNew user interface is more flexible and provides additional reporting options\n\nUpgraded verification test suite ensures continued accuracy of results',
      'Situation': 'Provider of diagnostic testing instruments is faced with obsolescence of current operating system (OS). This critical upgrade is necessary to maintain historical support levels \u000band will provide a solid foundation for the development \u000bof future instrument',
      'Keywords': 'Migration, code, platform, upgrade, Windows XP, Windows 7',
      'ProjectSummary': 'Windows XP migration to Windows 8.1, creation of Windows 8.1 Embedded Image, Verification testing of the code',
      'ProjectTeam': 'Dave Widland, Kevin Petriel',
      'Images': 0
    },
    {
      'ID': 4,
      'Client': 'Advantest',
      'ProjectName': 'Advanced Analytics for Error Detection During Chip Design',
      'Year': 2016,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Semiconductor Equipment',
      'Services': 'Consulting',
      'ProjectApplicationType': '',
      'Engagement': 'Product Consulting',
      'Discipline': 'Consulting, Analytics',
      'Technologies': '',
      'Keyword': 'Data Analytics, Semiconductor, ATE, Automated Test Equipment, Chip Design',
      'Challenges': 'Improvement of chip development cycle with semi-automatic evaluation of chip prototypes and structured exploration of test results\n\nInability to detect error patterns and draw conclusions about potential root causes in the preliminary chip design\n\nOptimiz',
      'Solution': 'Refined algorithmic approaches iteratively and implemented proof of concepts \n\nApplied agile development method using Extreme Programming\n\nDesigned and implemented algorithms supporting error detection, error localization, and operation optimization \n\nEva',
      'ProvenResults': 'A novel approach to analysis of chip design test results that can detect errors and optimize operations\n\nDemonstrator application for analysis and optimization of chips\n\nClean documentation of results and design decisions\n\nNew application programming inte',
      'Situation': 'A leading semiconductor company is trying to prove that advanced analytics can be used during chip design and development to detect design errors and optimize chip operations to vastly \nshorten the design cycle.',
      'Keywords': 'Data analytics, Semiconductor, ATE, automated test equipment, chip design',
      'ProjectSummary': 'A leading semiconductor company is trying to prove that advanced analytics can be used during chip design and development to detect design errors and optimize chip operations to vastly shorten the design cycle.',
      'ProjectTeam': 'Aamir Chaudhry and Scott Evans\nGerman Analytics Team – Rich Sanford',
      'Images': 0
    },
    {
      'ID': 5,
      'Client': 'AgaMatrix',
      'ProjectName': 'Mobile Application for Diabetes Data Management',
      'Year': 2011,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Design, Development',
      'ProjectApplicationType': 'Embedded, Data',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': 'iOS',
      'Keyword': 'iOS, ADA, UI, Software',
      'Challenges': 'Tight time-to-market with software needed in 90-day window\n\nSeveral competitors vying \u000bfor first-to-market position\n\nLack of mobile application development experience and limited resources',
      'Solution': 'Designed and developed fully functional iOS mobile application for new device\n\nIntegrated team worked seamlessly with client to hit 90-day market window\n\nDeveloped UI, core data model, and several critical features to power application',
      'ProvenResults': 'Hit market window with new iOS application\n\nApplication launched at ADA meeting and received favorably by diabetes industry\n\nDelivered recommendations to improve client’s internal development process',
      'Situation': 'An early-stage glucometers and data management solutions company struggling to develop an iOS application. They are looking to differentiate in a crowded marketplace with a    single device enabling proactive disease management –    iPhone plug-in meter w',
      'Keywords': 'iOS, ADA. UI, software',
      'ProjectSummary': 'As a development partner Foliage helped to develop an important mobile data management system for diabetics managing this chronic disease.',
      'ProjectTeam': 'John Carey, Greg Walsh',
      'Images': 0
    },
    {
      'ID': 6,
      'Client': 'Amgen',
      'ProjectName': 'Product Design History File and Requirements Remediation',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'ESS',
      'ProjectApplicationType': 'Requirements Remediation',
      'Engagement': 'System Development',
      'Discipline': 'EE, EM, Systems Test, Consulting',
      'Technologies': '',
      'Keyword': '62304, Remediation, FDA, Process Gap Assessment',
      'Challenges': 'Understanding the gaps between current practices and best practices relating to IEC 62304 design history files\n\nUndocumented requirements described by comments in code and some design documentation\n\nPerforming and documenting new verification tests to sho',
      'Solution': 'Performed gap analysis between current practices and IEC 62304 best practices\n\nDiscovered and documented requirements from source code and document review\n\nGenerated and documented new verification tests\n\nTraced the tests to requirements and demonstrated',
      'ProvenResults': 'Updated all requirements documents within the design history documents to comply with IEC 62304 \n\nFacilitated submission of requirements documentation to the FDA \n\nReported several defects discovered during code inspection \n\nUpdated the verification trace',
      'Situation': 'Due to changes in the regulatory environment, several commercial dermatological laser systems came to be regarded as medical devices. Manufacturer needs to reverse engineer the systems to achieve IEC 62304 compliance.',
      'Keywords': '62304, remediation, FDA process gap assessment',
      'ProjectSummary': 'Due to changes in the regulatory environment, several commercial dermatological laser systems came to be regarded as medical devices.  Manufacturer needed to reverse engineer the devices to achieve IEC 62304 compliance.',
      'ProjectTeam': 'Mark Hersey',
      'Images': 0
    },
    {
      'ID': 7,
      'Client': 'Applied Materials',
      'ProjectName': 'Cost Reduction of Etch Tool',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Semiconductor Equipment',
      'Services': 'ESS',
      'ProjectApplicationType': 'Value Engineering',
      'Engagement': 'System Development',
      'Discipline': '',
      'Technologies': 'Finite Element Analysis',
      'Keyword': 'AMAT, Cost Reduction, Etch Tool, AC Box',
      'Challenges': 'Reduce product costs within 6 months to quickly impact bottom line \n\nDocumentation for chamber cooling manifold unavailable as it was owned by the supplier \n\nEnsure changes to the unit do not compromise performance of etch tool\n\nInternal engineering resou',
      'Solution': 'Reverse engineered existing unit and identified high-cost components for replacement or redesign\n\nSelected alternate commercial off-the-shelf components based on cost, functional and material compatibility analysis\n\nPerformed finite element analysis and p',
      'ProvenResults': 'Reduced bill of materials cost by 32%\n\nOverall product cost reduced by 40% – double the original target of 20%\n\nCompetitive bidding identified new manufacturing partner and second source option\n\nRedesign and elimination of manufactured parts reduced assem',
      'Situation': 'Global company developing high precision manufacturing equipment for the semiconductor industry must meet corporate goal to reduce product costs by 20%. Chamber cooling manifold identified as individual subcomponent for significant cost reduction.',
      'Keywords': 'AMAT, cost reduction, etch tool, AC box',
      'ProjectSummary': 'Global company developing high precision manufacturing equipment for the semiconductor industry must meet corporate goal to reduce product costs by 20%. Chamber cooling manifold identified as individual subcomponent for significant cost reduction.',
      'ProjectTeam': 'Myron Pugh, Lee Plovnick, Chuck Shafer',
      'Images': 0
    },
    {
      'ID': 8,
      'Client': 'Arkray',
      'ProjectName': 'Cloud-based Diabetes Management System',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Software Development',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': 'Software',
      'Technologies': '',
      'Keyword': 'Diabetes, Cloud, Enterprise, Cybersecurity',
      'Challenges': 'Develop a new secure, easy-to-use cloud-based diabetes management system\n\nNew software must be developed to IEC 62304 standards and latest FDA cybersecurity guidance\n\nBalancing ease of use for patients while meeting current FDA cybersecurity guidance',
      'Solution': 'Performed cybersecurity risk assessment and identified security model to address security risks\n\nCreated a new secure cloud-based solution with a straightforward user interface\n\nDeveloped service oriented architecture based on the latest Microsoft technol',
      'ProvenResults': 'Cybersecurity assessment model quantified risks and enabled appropriate security controls that complied with FDA cybersecurity guidance\n\nNew cloud-based solution improved usability for patients  and providers\n\nEncryption technology secured only sensitive',
      'Situation': 'A patient-centric diabetes product company looking to develop  a secure cloud-based diabetes management system. Existing system was outdated, challenging for patients to use and didn’t meet latest FDA cybersecurity guidance.',
      'Keywords': 'Diabetes, cloud, enterprise, cybersecurity',
      'ProjectSummary': 'A patient-centric diabetes products company looking to develop a secure cloud-based diabetes management system. Existing system was outdated, challenging for patients to use and didn’t meet latest FDA cybersecurity guidance.',
      'ProjectTeam': 'Adam Hesse',
      'Images': 0
    },
    {
      'ID': 9,
      'Client': 'BioSignal',
      'ProjectName': 'Application Migration to the Cloud',
      'Year': 2014,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': '',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Migration, Cloud, Enterprise, Biology, Neurology',
      'Challenges': 'Create a highly scalable and multi-tenancy solution\n\nModify existing data model to support multiple users with different security requirements\n\nAn unmodifiable third party desktop application at the core of the prototype needed to be deployed in the cloud',
      'Solution': 'Integrated application remoting technology to seamlessly operate the third party desktop application from a browser\n\nRefactored prototype source code enabling future scalability\n\nIntroduced access token system to improve user experience while ensuring the',
      'ProvenResults': 'Client delivered to market a new cloud-based web admin portal serving multiple tenants in less than 6 months\n\nCreated all design history documents and facilitated FDA documentation submissions\n\nBusiness now well positioned to attract future funding and po',
      'Situation': 'An early stage company in the traumatic brain injury market looking to migrate a prototype single tenant web application to a scalable cloud infrastructure in less than 6 months.',
      'Keywords': 'Biology, cloud, migration, neurology, enterprise',
      'ProjectSummary': 'Migration strategy to merge multiple disparate HIS software systems to a new architecture',
      'ProjectTeam': 'Adam Hesse, John, Carey, Greg Walsh',
      'Images': 0
    },
    {
      'ID': 10,
      'Client': 'Bruker',
      'ProjectName': 'Bacterial Analysis & Microorganism ID System',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Consulting, Development, Verification',
      'ProjectApplicationType': '',
      'Engagement': 'System Development',
      'Discipline': 'Consulting, Software, Systems',
      'Technologies': '',
      'Keyword': 'LIM, Connectivity, Lab & Test, Workflow Management',
      'Challenges': 'Lack of technical know-how with complex system connectivity\n\nNeed additive system capability by expanding the technology\n\nTime-sensitive modification using the protocols native  to each device',
      'Solution': 'Identified alternatives and provided an analysis of build vs. buy\n\nProject management and quality assurance teams collaborated with client stakeholders to deliver expected results\n\nDeveloped and verified new connectivity solution',
      'ProvenResults': 'New middleware solution allowed strong connectivity between two devices\n\nIncreased overall robustness, quality control, and user certainty\n\nClear tactical plan solved connectivity issues \n\nIncreased revenue in 4 months',
      'Situation': 'Biotechnology division of a global R&D company must address connectivity limitations with current ID system in order to expand market share. The solution must enable two devices   to exchange necessary worklists and results.',
      'Keywords': 'LIM, connectivity, lab & test, workflow management',
      'ProjectSummary': 'Biotechnology division of a global R&D company must address connectivity limitations with current ID system in order to expand market share. The solution must enable two devices   to exchange necessary worklists and results.',
      'ProjectTeam': 'Tim Bosch, Madeline Shattow',
      'Images': 0
    },
    {
      'ID': 11,
      'Client': 'Cepheid',
      'ProjectName': 'Diagnositc Device Cloud Solution',
      'Year': 2014,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Process Consulting',
      'ProjectApplicationType': 'Embedded',
      'Engagement': 'System Development',
      'Discipline': 'Systems',
      'Technologies': '',
      'Keyword': 'EMR, Cloud, Cybersecurity, Connectivity, LIS, IoT',
      'Challenges': 'Effectively manage and minimize support costs associated with increasing product distribution in emerging markets \n\nDelivery of software upgrades and loss prevention of IP or tampering that could impact the performance of the device\n\nAbility to remotely a',
      'Solution': 'Developed delivery system to push software updates via a cloud-based solution eliminating costly and time consuming process of shipping CDs\n\nNew rigorous security model addressed regional data requirements including package encryption and signing, verbose',
      'ProvenResults': 'New cloud-based solution achieved $800,000 in annual savings over former costly manual process\n\nSoftware updates now being delivered quickly and securely without risk to the device\n\nNew architecture solution provides a solid framework to address current a',
      'Situation': 'Manufacturer of molecular diagnostic instruments under pressure from customers to simplify and secure the software update process for an existing device. The current product required manual updates (via CD) and did not allow for remote support. Need to dr',
      'Keywords': 'Cloud, cybersecurity, connectivity, LIS, EMR, IOT',
      'ProjectSummary': 'A leading molecular diagnostic company selected Foliage to develop a migration strategy and roadmap for moving their solution to the cloud.  The architecture leveraged cloud based platforms from BaaS providers in order to move software applications, remot',
      'ProjectTeam': "Norm Haas, Dan O'Connor, Adam Hesse",
      'Images': 0
    },
    {
      'ID': 12,
      'Client': 'Covidien (Mallinckrodt)',
      'ProjectName': 'Contrast Injector System Development',
      'Year': 2013,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Requirements Definition, Design, Development',
      'ProjectApplicationType': 'Systems, Control',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Software, Product Costs, Development, Electrical, Mechanical',
      'Challenges': 'Internal development resources stretched thin and lack of recent experience leading product development efforts\n\nCost considerations factored into development strategy – either develop from scratch or modify existing product\n\nExisting product required sig',
      'Solution': 'Created and drove development strategy well-aligned with business objectives and market needs\n\nFull project responsibility for system development - software, electrical,  and mechanical\n\nManaged high-performance teams ensuring strong communication among a',
      'ProvenResults': 'Well positioned to deliver the product to market within desired market window\n\nHigh quality product delivered with significantly improved software and product reliability\n\nHit initial target costs and completed follow-on Value Engineering engagement to lo',
      'Situation': 'A global healthcare medical device company must develop a contrast injection system for emerging markets. This next generation device requires more streamlined processes and must be easier to operate.',
      'Keywords': 'product costs, development, software, electrical, mechanical',
      'ProjectSummary': 'Developed complete contrast agent injector for the medical market including system design, mechanical system, electronic controls and software',
      'ProjectTeam': 'John Carey, Chris Miles',
      'Images': 0
    },
    {
      'ID': 13,
      'Client': 'Drew Scientific',
      'ProjectName': 'Whole Blood HbA1c Analyzer',
      'Year': 2011,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Design, Development',
      'ProjectApplicationType': 'Embedded',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'SOM, Touchscreen, Fluidics, Ion-exchange, Chromatography, 3 Axis Stepper, Driven Sample, Loading Automation',
      'Challenges': 'Meet aggressive cost reduction targets to achieve desired product margins – reduce manufacturing costs by a third\n\nIdentify high-cost components for replacement without sacrificing product integrity\n\nImprove precision of fluidics path to enhance overall i',
      'Solution': 'Achieved significant cost  reductions by employing design for manufacturability methods that minimize part count and simplify assembly\n\nSystem redesign including electro-mechanical and control software optimized and reduced fluidics path\n\nImplemented new',
      'ProvenResults': 'Met aggressive cost targets- reduced production costs by ~50%\n\nNew valve and pump component recommendations improved fluidics accuracy and met NGSP certification guidelines\n\nNew lower cost instrument improves manufacturer’s ability to compete in emerging',
      'Situation': 'Analytical device manufacturer looking to provide an upgrade in performance and accuracy for existing customers in emerging markets, at less than half the cost of competing devices. Key focus is on reducing product development costs while improving perfor',
      'Keywords': 'SOM,   touchscreen LCD,   \nfluidics, low cost ion-exchange chromatography\n3 axis stepper driven sample loading automation',
      'ProjectSummary': 'Developed prototype HbA1c analyzer product including electro-mechanical and control software.',
      'ProjectTeam': 'John Carey, Dave Warburton',
      'Images': 0
    },
    {
      'ID': 14,
      'Client': 'Evoke',
      'ProjectName': 'Web-based Portal for Wireless Wearable Sensor',
      'Year': 2012,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': '',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Data Analytics, Software, Connectivity, Scalability',
      'Challenges': 'Lack of technical resources and expertise developing web-based applications\n\nTransition from a product-based business model to new service-based business model\n\nAutomate a manual reporting and invoicing process to free up valuable technical resources and',
      'Solution': 'Experienced team led collaborative approach to design, development, and delivery of admin and client web-based portal\n\nRecommended underlying technology platforms to support scalable service-based business model\n\nCreated automated reporting process improv',
      'ProvenResults': 'Collaborative approach introduced best practices to ensure the efficient use of \u000bin-house resources during development projects\n\nScalable software architecture provided solid framework for future development initiatives\n\nAchieved 80-90% time savings with',
      'Situation': 'A start-up neuroscience company with a wireless device for health monitoring seeking new service-based business model for their innovative approach to controlling data quality in diagnosis reporting. Primary objectives for the solution included developing',
      'Keywords': 'data, connectivity, software, scalability',
      'ProjectSummary': 'A start-up neuroscience company with a wireless device for health monitoring seeking new service-based\nbusiness model for their innovative approach to controlling data quality in diagnosis reporting.\nPrimary objectives for the solution included developing',
      'ProjectTeam': 'Matt Eisedrath',
      'Images': 0
    },
    {
      'ID': 15,
      'Client': 'Evoke',
      'ProjectName': 'Portable ECG Monitor',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Design, Test, Verification',
      'ProjectApplicationType': '',
      'Engagement': 'System Development',
      'Discipline': 'EE, Software, Systems, Systems Test, Test',
      'Technologies': '',
      'Keyword': 'Data Analytics, Portable EEG System, HRV, ECG',
      'Challenges': 'Scope and scale of product requires complex system expertise\n\nPortable system must manage, upload, and analyze vast amounts of data from remote sources\n\nSystem must be portable and run on battery power for extended periods of time',
      'Solution': 'Developed multiple prototypes to help refine portable device design \n\nCreated custom display for the processing of EEG data\n\nDesigned custom lithium ion battery to allow up to 8 hours of continuous use',
      'ProvenResults': 'Product demo realized in six months and commercialization  in ten months\n\nDelivered full documentation of development process, source code, executable code, and images\n\nProvided roadmap to drive long-term product vision',
      'Situation': 'Start-up company wants to develop a new portable EEG system for brain assessment in the field. They need support to take them from concept to product commercialization in a very short period of time.',
      'Keywords': 'Portable EEG System, data analytics, Heart Rate Variability (HRV) and Electrocardiography (ECG)',
      'ProjectSummary': 'Start-up company wants to develop a new portable EEG system for brain assessment in the field. They need support to take them from concept to product commercialization in a short period of time.',
      'ProjectTeam': 'John Carey, Dave Meyers',
      'Images': 0
    },
    {
      'ID': 16,
      'Client': 'FEI',
      'ProjectName': 'High Performance Measurement System (Dual beam SEM)',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Inspection/Test/Measurement',
      'Services': 'Consulting',
      'ProjectApplicationType': 'Embedded',
      'Engagement': 'Product Consulting',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Semiconductor, Software, Dual Beam SEM, Architecture Assement',
      'Challenges': 'High configurability of current system compounding new development projects \n\nLegacy software built on older technologies and prone to breaking with any update\n\nLegacy architecture principles favor flexibility over reliability \n\nComplete rewrite of massiv',
      'Solution': 'Formulated new architecture focused on high reliability to address needs of semiconductor manufacturing market \n\nCurrent components assessed for reuse to achieve cost savings\n\nMigration strategy developed to incrementally bring up the new architecture qui',
      'ProvenResults': 'Increased development velocity with improved process knowledge and technical experience with new technologies\n\nNew architecture represents a dramatic simplification that supports high reliability\n\nArchitectural design introduced real-time control and pred',
      'Situation': 'Leading global provider of measurement systems looking to increase market share in semiconductor equipment market faced customer pressures to enhance product features. Current product suffering debilitating reliability issues each time new features are ad',
      'Keywords': 'Dual beam SEM, architecture assessment, semiconductor, Software Reliability',
      'ProjectSummary': 'Leading global provider of measurement systems looking to increase market share  in semiconductor equipment market faced customer pressures to enhance product features. Current product suffering debilitating reliability issues each time new features are a',
      'ProjectTeam': "Dan O'Connor, Scott Evans",
      'Images': 0
    },
    {
      'ID': 17,
      'Client': 'Gerber',
      'ProjectName': 'Next Generation Textile Cutter Control System',
      'Year': 2010,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Discrete Manufacturing',
      'Services': 'Consulting, Design, Development, Test',
      'ProjectApplicationType': 'Embedded, Controls',
      'Engagement': 'System Development',
      'Discipline': 'Hardware and Software',
      'Technologies': 'C#, Windows CE',
      'Keyword': 'Migration, Control System, Motion Control, Product Line, Acquisition',
      'Challenges': 'Multiple acquisitions resulted in the need to support several architectures – driving up R&D costs\n\nAging software and outdated technology creating reliability issues significantly delaying release of new features\n\nMust respond quickly to lower-priced, mo',
      'Solution': 'Assessed three architectures and identified components for reuse – reducing cost of the development effort\n\nDesigned and developed new control system including electronics and software, sensors, UI, real-time digital network, imaging, printing, and interf',
      'ProvenResults': 'New product line architecture developed in 16 months\n\nOne scalable, flexible platform architecture rolled out across multiple product lines\n\nFaster time to market for new features ‒ responding quicker to market demands\n\nEntry into new markets now possible',
      'Situation': 'Manufacturer of industrial cutting machines looking to develop next-generation textile cutter control system with scalable architecture to enable faster delivery of new product enhancements. Development efforts constrained by complications arising from mu',
      'Keywords': 'Control system, motion control, migration, product line, acquisition, architecture',
      'ProjectSummary': 'Manufacturer of industrial cutting machines looking to develop next generation textile cutter control system with scalable architecture to enable faster delivery of new product enhancements. Development efforts constrained by complications arising from mu',
      'ProjectTeam': 'Tom Mariano\nRick Flanders\nScott Evans',
      'Images': 0
    },
    {
      'ID': 18,
      'Client': 'GSI (Now ESI)',
      'ProjectName': 'Laser Marking Control System',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Discrete Manufacturing',
      'Services': 'Consulting, Design, Product Development',
      'ProjectApplicationType': 'Embedded, Controls',
      'Engagement': 'Software Development',
      'Discipline': 'Software, Systems',
      'Technologies': '',
      'Keyword': 'Migration, Architecture Strategy, VDA, Manufacturing, Off-Shore, On-Shore',
      'Challenges': 'Software architecture could no longer support adding new features without negatively affecting system performance\n\nEnhanced automation capabilities significantly decreased tool throughput\n\nLegacy architecture and design limitations preventing new enhancem',
      'Solution': 'Value-Driven Analysis captured and verified critical system requirements based on business and technical goals of the system\n\nEvaluation of existing code identified several components for reuse in new architecture\n\nLed development of new architecture stra',
      'ProvenResults': 'Three-week strategic plan provided short-term solution to enhance system performance and meet market demand\n\nLong term architecture and cost-effective migration plan to move existing product line onto a platform that could support future development\n\nFlex',
      'Situation': 'Global leader in laser precision technology developing next generation laser marker control system with architecture that can support product enhancements and new technologies. Urgent need to improve performance to sustain market position while developing',
      'Keywords': 'architecture strategy, VDA, migration, manufacturing, off-shore, on-shore',
      'ProjectSummary': 'Global leader in laser precision technology developing next generation laser marker control system with architecture that can support product enhancements and new technologies. Urgent need to improve performance to sustain market position while developing',
      'ProjectTeam': 'Tim Bowe, Karl Aeder',
      'Images': 0
    },
    {
      'ID': 19,
      'Client': 'Harvest Automation',
      'ProjectName': 'Fleet Management System for Autonomous Material Handling',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'AMH',
      'Services': 'Product Development',
      'ProjectApplicationType': '',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Fleet Control Management, Robotics, Retail Distribution, Time to Market',
      'Challenges': 'Extremely tight deadline   to have operating demo ready – 8 weeks\n\nUpgrading current fleet control management system to now operate  with multiple robots \n\nIdentified gaps in bandwidth and expertise in specific areas criticalto project execution',
      'Solution': 'Collaborated with business and technical leadership to define development plan that leveraged existing autonomous robot technology\n\nLed integrated team in software development effort \n\nDesigned and developed new fleet control management system',
      'ProvenResults': 'New demo-ready solution delivered on time and within budget\n\nWell positioned to enter the retail distribution and fulfillment market with new solution\n\nImproved development processes and best practices will enable product extensibility and acceleration of',
      'Situation': 'A material handling company focused on robotics looking to enter the e-commerce retail distribution and fulfillment arena with a solution to improve efficiency and productivity in thepick-to-order space. Company looking for assistance to leverage existing',
      'Keywords': 'Fleet Control Management, Robotics, Retail distribution, time to market',
      'ProjectSummary': 'A material handling company focused on robotics looking to enter the e-commerce retail distribution and fulfillment arena with a solution to improve efficiency and productivity in the pick-to-order space. Company looking for assistance to leverage existin',
      'ProjectTeam': 'Aamir Chaudhry',
      'Images': 0
    },
    {
      'ID': 20,
      'Client': 'Heartware',
      'ProjectName': 'LVAD Controller and Monitor',
      'Year': 2012,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Requirements Definition, Design, Development',
      'ProjectApplicationType': 'Control',
      'Engagement': 'Process Consulting',
      'Discipline': 'Systems Test',
      'Technologies': '',
      'Keyword': 'Control System, Next-Generation Device, LVAD, Implantable, Test processes',
      'Challenges': 'To remain competitive,must release a product to U.S. market quickly\n\nAvailability of key staff to focus on commercialization efforts is limited due to clinical trial work\n\nLack of systems knowledge with Class III medical devices',
      'Solution': 'Established a phased development plan to ensure product release within 18-month window\n\nSystems engineering support met product launch time frame\n\nReduced regulatory risk by identifying verification and validation criteria',
      'ProvenResults': 'Achieved commercialization of product in 17 months\n\nProduct received FDA Class III approval\n\nEstablished processes and procedures for future regulated product development',
      'Situation': 'LVAD device manufacturer that is CE approved and sold in Europe wants to enter the U.S. market. Device needs Class III approval and they are up against a tight 18-month plan to commercialize the product.',
      'Keywords': 'Control software, test processes, next-generation device, LVAD, implantable',
      'ProjectSummary': 'LVAD device manufacturer that is CE approved and sold in Europe wants to enter the U.S. market. Device needs Class III approval and they are up against a tight 18-month plan to commercialize the product.',
      'ProjectTeam': 'John Carey, Matt Eisendrath, John Montrone, Alan Walsh, Peter Ferguson',
      'Images': 0
    },
    {
      'ID': 21,
      'Client': 'Intelligrated',
      'ProjectName': 'Warehouse Control System Architecture',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'AMH',
      'Services': 'Consulting',
      'ProjectApplicationType': '',
      'Engagement': 'System Development',
      'Discipline': 'Consulting, Software, System Architecture',
      'Technologies': '',
      'Keyword': 'IoT, Warehouse Automation, Assessment, Architecture Definition',
      'Challenges': 'Next-generation system architecture was undocumented\n\nDevelopment of system had started, and was accumulating technical debt\n\nPartial product knowledge distributed across multiple divisions\n\nArchitecture needs to be extensible to Cloud and future IoT tech',
      'Solution': 'Architecture assessment identified key gaps, risks, and technical debt\n\nDesigned and documented a multi-tiered service oriented architecture to address a myriad of use cases and support future growth\n\nComprehensive project plan and estimate enabled priori',
      'ProvenResults': 'Architecture recommendations and system plans executed immediately\n\nDramatically reduced time to configure new warehouse system from months to weeks\n\nFuture plans to develop a comprehensive integration, test, and simulation strategy identified',
      'Situation': 'Due to a shift in the marketplace driven by e-commerce and omni-channel demand, the manufacturer of automated warehouse solutions must deliver a next-generation system with real-time adaptive workflows to optimize fulfillment operations. A highly configur',
      'Keywords': 'Assessment, Architecture Definition, Warehouse Automation, IoT',
      'ProjectSummary': 'Due to a shift in the marketplace driven by e-commerce and omni-channel demand, the manufacturer of automated warehouse solutions must deliver a next-generation system with real-time adaptive workflows to optimize fulfillment operations. A highly configur',
      'ProjectTeam': 'Amit Shah, Scott Evans',
      'Images': 0
    },
    {
      'ID': 22,
      'Client': 'Keurig',
      'ProjectName': 'Consumer Device IoT Platform',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Consumer Electronics',
      'Services': 'IoT, Design, Development',
      'ProjectApplicationType': '',
      'Engagement': 'System Development',
      'Discipline': 'EE, Software, Systems',
      'Technologies': '',
      'Keyword': 'Software, IoT, Wireless, Embedded, Systems',
      'Challenges': 'Identifying multiple connectivity, user interfaces, data transfer, capabilities, and scenarios to add to their product\n\nDetermining the most beneficial IoT capabilities to build into the product\n\nTesting a wide variety of customer use cases',
      'Solution': 'Designed and built a new test platform in four months \n\nSystem included multiple connectivity options, user interface methods, and data storage options\n\nCustomized various use cases to set up specific trials for consumer testing',
      'ProvenResults': 'Able to identify the most compelling IoT use cases with    new test platform\n\nExpanded use cases to gain detailed insights for specific product features \n\nGained an understanding of how to productize IoT features',
      'Situation': 'Manufacturer of beverage brewing systems facing intense pressure to add features and functionality that leverage the IoT. Need help identifying the most compelling features and functionality to appeal to new and existing customers.',
      'Keywords': 'IoT, Wireless, EE, Systems, Software, Embedded,',
      'ProjectSummary': 'Manufacturer of beverage brewing systems facing intense pressure to add features and functionality that leverage the IoT. Need help identifying the most compelling features and functionality to appeal to new and existing customers',
      'ProjectTeam': 'Tom Mariano',
      'Images': 0
    },
    {
      'ID': 23,
      'Client': 'KLA - Tencor',
      'ProjectName': 'Improved Data Handling Solution for Metrology',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Semiconductor Equipment',
      'Services': 'Project Management, Design, Development, Test',
      'ProjectApplicationType': 'Data',
      'Engagement': 'Software Development',
      'Discipline': 'Software, Test',
      'Technologies': 'MongoDB',
      'Keyword': 'Big Data',
      'Challenges': 'Equipment and metrology analysis software solution at risk due to increased competition\n\nCurrent data handling solution based on old technology unable to process massive amounts of data\n\nLimited resources available to quickly deliver improved solution wit',
      'Solution': 'Proposed architecture incorporating new Big Data technology to enable parallel processing of large amounts of data\n\nRedesigned database layer and recommended new technology to improve data access times\n\nManaged design, development and testing of improved',
      'ProvenResults': 'System throughput improved by 10X – leapfrogging the competition\n\nNew data handling solution with scalability and performance enhancements completed 6 months ahead of schedule\n\nWell-positioned to deliver new solution to market – improving competitive adva',
      'Situation': 'A global provider of process measurement and control, yield management and data analysis solutions for semiconductor manufacturing faced with making major improvements to an existing product. Customer requests driving enhancements to the capabilities and',
      'Keywords': 'Big Data',
      'ProjectSummary': 'A global provider of process measurement and control, yield management and data analysis solutions for semiconductor manufacturing faced with making major improvements to an existing product. Customer requests driving enhancements to the capabilities and',
      'ProjectTeam': 'Norm Haas',
      'Images': 0
    },
    {
      'ID': 24,
      'Client': 'L-3 Communications Security Detection',
      'ProjectName': 'High-energy X-ray Large Cargo Screening System',
      'Year': 2012,
      'Brand': 'Foliage',
      'Industry': 'Aerospace & Defense',
      'Sector': 'Government Systems',
      'Services': 'Requirements Definition, Design, Development',
      'ProjectApplicationType': 'Control',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'X-Ray, Scanning System, Security, Mobile',
      'Challenges': 'Each cargo scanner creates different image formats\n\nDiffering analysis tools requires specialized personnel and training requirements\n\nLimited opportunity to interchange personnel when needed',
      'Solution': 'Developed a secure network environment connecting all X-ray scanners to a common datacenter\n\nCreated a front-end for each scanner with a subsystem to convert images to a common format\n\nUpgraded selected image analysis application suite to manage all   X-r',
      'ProvenResults': 'Image analysts utilize a single application suite\n\nKey personnel now able to work together in a central location, increasing effectiveness\n\nEstablished Best-in-Class features that are now the key criteria in X-ray scanner selection',
      'Situation': 'A well-established international shipping port currently utilizing cargo scanners from several different manufacturers must reduce costs. By centralizing operations and utilizing a single effective image analysis application suite with existing scanners,',
      'Keywords': 'x-ray, scanning system, security, mobile',
      'ProjectSummary': 'Developed control software and hardware for a high-energy X-ray scanning system for large cargo containers. The full system was designed to be a fully mobile system',
      'ProjectTeam': 'Jay Gray, David Martin',
      'Images': 0
    },
    {
      'ID': 25,
      'Client': 'McKesson',
      'ProjectName': 'Advanced Population Health Solution',
      'Year': 2014,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Consulting',
      'ProjectApplicationType': 'Architecture, Big Data, Analytics, Platform Strategy',
      'Engagement': 'Product Consulting',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Platform, Big Data, Analytics',
      'Challenges': 'Multiple applications with redundant capabilities across business units \n\nBusiness units are siloed creating operational inefficiencies\n\nEach application has a unique approach to data acquisition and storage from a common data set',
      'Solution': 'Developed a centralized platform to support common capabilities required by various business units\n\nDeveloped a common data management platform that leverages cloud and big data technologies\n\nCreated customizable architecture to address the unique needs o',
      'ProvenResults': 'Defined architectural approach to create a common data management platform\n\nCreated cost, risk, and competency assessment models, providing visibility to executive management to inform decision making\n\nWell positioned to deliver a comprehensive product su',
      'Situation': 'Fortune 100 healthcare company needs to develop an advanced population health solution to address the market’s value-based reimbursement structure. Current population health market is highly fragmented, without a dominant product suite.',
      'Keywords': 'Big Data, analytics, platform strategy',
      'ProjectSummary': 'Fortune 100 healthcare company needs to develop an advanced population health solution to address the market’s value-based reimbursement structure. Existing population health market        is highly fragmented, without a dominate product suite.',
      'ProjectTeam': 'Tim Bosch, Matt Eisendrath',
      'Images': 0
    },
    {
      'ID': 26,
      'Client': 'McKesson',
      'ProjectName': 'Data Management System Architecture',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Consulting, Design, Development, Test, Verification',
      'ProjectApplicationType': '',
      'Engagement': 'Systems Development, Process Consulting',
      'Discipline': 'Consulting',
      'Technologies': '',
      'Keyword': 'Roadmap, Security, Data Management, Architecture Platform',
      'Challenges': 'Undocumented current architecture\n\nDisparate handling requirements for different data sources\n\nEnhance security to protect patient and customer data\n\nConstruct metadata and data access mechanisms to support advanced analytics and specific security needs',
      'Solution': 'Documented the current architecture and defined new secure solution for data management\n\nDeveloped rules-based data handling solution for disparate sources\n\nCreated roadmap to migrate current capabilities to new system  \n\nDefined tools and new processes t',
      'ProvenResults': 'Created complete documentation of current architecture\n\nDesigned and verified new data management approach and data access mechanisms\n\nNew robust architecture to support evolving business models and meet market needs',
      'Situation': 'Provider of pharmacy services needs to significantly expand patient data management and analytics capabilities. The current solution and technology are insufficient to meet increasing  data volumes, data sources, number of    customers, and analytics need',
      'Keywords': 'Data Management, Roadmap, Security, Architecture, Platform',
      'ProjectSummary': 'Provider of pharmacy services needs to significantly expand patient data management and analytic capabilities. The current solution and technology are insufficient to meet increasing  data volumes, data sources, number of customer and      analytic needs.',
      'ProjectTeam': 'Tim Bosch, Matt Eisendrath',
      'Images': 0
    },
    {
      'ID': 27,
      'Client': 'Medtronic - Navigation',
      'ProjectName': 'Intra-operative Surgical Imaging System',
      'Year': 2009,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Consulting, Requirements Definition, Design, Development',
      'ProjectApplicationType': '',
      'Engagement': 'Product Consulting',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Software, Design',
      'Challenges': 'The acquired surgical imaging system lacked key artifacts such as system architecture documentation\n\nAssessment findings needed quickly to incorporate into next product release\n\nFuture product enhancements were at a stand-still pending the resolution of r',
      'Solution': 'Performed full software and product architecture assessment in less than 10 weeks\n\nAssessed testing approach and processes to determine how reliability issues had been missed prior to release\n\nImprovements recommended to address the gaps identified in des',
      'ProvenResults': 'Implemented and tested refactored software control architecture solving reliability issues, improving system performance and resolving customer satisfaction challenges\n\nImproved architecture provided stronger foundation upon which to build new product fea',
      'Situation': 'Surgical imaging division of large, global medical device company needed to respond quickly to address product reliability issues voiced by customers. To isolate and stabilize these issues, a comprehensive product assessment was implemented.',
      'Keywords': 'software, design, architecture',
      'ProjectSummary': 'Assessed existing control software for an x-ray-based intrasurgical imaging system. Subsequently were engaged to provide a recommendation for a new software control architecture which would improve overall system reliability.',
      'ProjectTeam': "Tim Bowe, Dan O'Connor",
      'Images': 0
    },
    {
      'ID': 28,
      'Client': 'Novartis',
      'ProjectName': 'Companion Diagnostic (CDx) Platform Strategy',
      'Year': 2013,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Consulting, Development',
      'ProjectApplicationType': 'Class III, Product Platform, Architecture Strategy',
      'Engagement': 'Software Development',
      'Discipline': 'Software',
      'Technologies': '',
      'Keyword': 'Architecture Strategy, Lab & Test, Drug Development, Product Platform',
      'Challenges': 'Relying on spreadsheets and email for data acquisition and analysis\n\nManual process is very time consuming and prone to human error\n\nHigh cost and shrinking timeline to develop individual companion diagnostics',
      'Solution': 'Software managed data acquisition and analysis \n\nCommon platform allows CDx algorithms to be developed, tested, and released without redevelopment of common capabilities\n\nAutomated key manual processes',
      'ProvenResults': 'New platform streamlined and improved the data acquisition and analysis process\n\nAutomated process reduced analysis time and errors\n\nCommon platform now supports all drug trials',
      'Situation': 'Leading pharmaceutical company looking to automate the acquisition and analysis of clinical trial data. They need an approach that will help them streamline work processes to increase workflow efficiency and improve data quality and integrity.',
      'Keywords': 'product platform, architecture strategy, lab & test, drug development, metrics',
      'ProjectSummary': 'Leading pharmaceutical company looking to automate the acquisition and analysis of clinical trial data. They need an approach that will help them streamline work processes to increase workflow efficiency and improve data quality and integrity.',
      'ProjectTeam': 'Tim Bosch',
      'Images': 0
    },
    {
      'ID': 29,
      'Client': 'PepsiCo',
      'ProjectName': 'Universal Liquid Dispensing System',
      'Year': 2013,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Discrete Manufacturing',
      'Services': 'Consulting, Design, Development, Test, Project Management',
      'ProjectApplicationType': 'Hardware',
      'Engagement': 'System Development',
      'Discipline': 'ME, Test',
      'Technologies': '',
      'Keyword': 'Manufacturing, Hardware, Beverage Filler Valve, Consumer Goods, Food and Beverage, Systems',
      'Challenges': 'Existing dispensing system optimized for speed, not liquid variability \n\nDispensing system requires complete stop and rework as fluid viscosity changes, impacting cost and efficiency\n\nCost-effective solution must address consistent pour and liquid variabi',
      'Solution': 'Systems thinking approach identified potential solutions leading to redesign of existing dispensing valve \n\nDesigned and built prototype for new dispensing valve \n\nNew valve design optimized for reliability, consistency, and efficiency',
      'ProvenResults': 'Innovative universal dispensing valve capable of efficiently managing a range of fluid characteristics\n\nSolution delivered in less than six months ‒ patents on design pending\n\nFaster response to market trends now possible\n\nNew design provided new market p',
      'Situation': 'Beverage dispensing facilities must rapidly modify existing production process without downtime. Developing a universal liquid dispensing system to accurately dispense a range of fluid viscosities and inclusions at high speeds in a corrosive environment i',
      'Keywords': 'hardware, beverage filler valve, systems, manufacturing, consumer goods, food and beverage',
      'ProjectSummary': 'Beverage dispensing facilities must rapidly modify existing production process without down time. Developing a universal liquid dispensing system to accurately dispense a range of fluid viscosities and inclusions at high speeds in a corrosive environment',
      'ProjectTeam': 'David Martin, Dave Warburton, Tom Evans',
      'Images': 0
    },
    {
      'ID': 30,
      'Client': 'Philips',
      'ProjectName': 'Cloud-Based Portal for Mobile Imaging Device',
      'Year': 2012,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Software Development',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Cloud, Imaging, Mobile, Cloud Based Portal',
      'Challenges': 'Extreme competitive pressure to build a working, demonstrable solution in less than 90 days\n\nChallenged by availability of mobile and enterprise competencies\n\nBuild a foundational, scalable architecture while enabling connectivity to providers and externa',
      'Solution': 'Designed and developed cloud-based portal with connectivity to a mobile imaging device\n\nApplication of agile methodology led to rapid development of device\n\nDesigned and developed architecture and repository to capture data for advanced analytics',
      'ProvenResults': 'Created end-to-end working prototype with GUI features integrated with functional backend logic and services providing connectivity to the cloud\n\nProject completion in 90 days allowed client to maintain competitive timelines\n\nIdentified opportunities for',
      'Situation': 'A global medical device manufacturer looking to differentiate by introducing a mobile imaging device for use outside of traditional healthcare facilities. Primary objective was to rapidly build a cloud-based portal allowing a mobile device \nto send images',
      'Keywords': 'Cloud, imaging, mobile, cloud-based portal,',
      'ProjectSummary': 'A global medical device manufacturer looking to differentiate by introducing a mobile imaging device for use outside of traditional healthcare facilities.  Primary objective was to rapidly build a cloud-based portal allowing a mobile device to send images',
      'ProjectTeam': '',
      'Images': 0
    },
    {
      'ID': 31,
      'Client': 'Sanmina SCI',
      'ProjectName': 'Biopsy Imaging System',
      'Year': 2014,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'ESS',
      'ProjectApplicationType': 'Value Engineering',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Imaging, Sanmina, Value Engineering, DFMA',
      'Challenges': 'Project stakeholders siloed due to an acquisition\n\nInferior product reputation in the marketplace\n\nLack of power system expertise in-house\n\nExperiencing thermal issues in device cabinet',
      'Solution': 'Performed DFMA on design leading to simplified assembly\n\nPerformed cost analysis on components resulting in design optimization\n\nRecommended distributed power approach to resolve thermal issues',
      'ProvenResults': 'Achieved 32% cost reduction on components resulting in overall sustaining cost savings\n\nResolved thermal issues by redistributing power to the device\n\nROI achieved in 14 months',
      'Situation': 'A global medical device company needed to simplify assembly of its device to lower sustaining costs while solving  performance issues. Company reputation was at stake.',
      'Keywords': 'Sanmina, value engineering. Imaging, DFMA',
      'ProjectSummary': 'Biopsy Imaging system product cost too high with complex assembly and service processes, the service time drives low customer-perceived quality, and thermal issues inside cabinet.',
      'ProjectTeam': 'Carl Blahut, Myron Pugh',
      'Images': 0
    },
    {
      'ID': 32,
      'Client': 'SET Corporation',
      'ProjectName': 'Counter Bomber Surveillance System',
      'Year': 2009,
      'Brand': 'Foliage',
      'Industry': 'Aerospace & Defense',
      'Sector': 'Government Systems',
      'Services': 'Development, Test',
      'ProjectApplicationType': 'Commercial, ITAR Regulated, Windows CE, Python, Java, C++',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Software, Development, Systems, Integration and Test',
      'Challenges': 'Development schedule behind by 6 months  \n\nInsufficient in-house capabilities with complex software and systems, development, integration and test',
      'Solution': 'Determined clear path forward based on assessment of the development status \n\nAssessment revealed that additional development was not required\n\nUtilized best practices in continuous integration and regression testing ensuring  product launch schedule  was',
      'ProvenResults': 'Streamlined test and integration process\n\nReduced projected resource requirements, saving time and money\n\nRecovered schedule and launched product on time',
      'Situation': 'To secure investors for a second round of funding, DOD technology start-up must expedite the initial product launch. New product is a suicide bomber detection system that integrates sensors and software to automatically assess, at a safe distance, the thr',
      'Keywords': 'software and systems development, integration and test',
      'ProjectSummary': 'The client had a working prototype that was developed in a research environment. The system software was built and deployed by a collection of manual processes. There was no formal test plan or procedure to verify system operations.',
      'ProjectTeam': '',
      'Images': 0
    },
    {
      'ID': 33,
      'Client': 'SICK, Inc.',
      'ProjectName': 'Enterprise Analytics Software for Logistics Management',
      'Year': 2015,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'AMH',
      'Services': 'Analytics',
      'ProjectApplicationType': '',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Big Data, Logistics Management, Package Analytics, Sensors, Consulting',
      'Challenges': 'Needed package analytics software development support\n\nNew enterprise level software platform must manage multiple warehouses in real-time\n\nSoftware platform must align operational data from various sources to improve warehouse operations and productivity',
      'Solution': 'Created software requirements document\n\nDeveloped new visualization GUI to display reports, charts, and data \n\nProvided  business intelligence to improve efficiency and productivity utilizing advanced configuration management tools\n\nNew feature capabiliti',
      'ProvenResults': 'New enterprise level software platform delivered on time\n\nReporting analysis web service – API (predictive analysis) allowing company to plan for likely events before they even happen\n\nNew features and enhancements allow data to be displayed with charts a',
      'Situation': 'A solution provider for logistics automation looking to differentiate themselves in a crowded marketplace must deliver an enterprise level software platform. New platform must bring large amounts of real-time data from facility to enterprise level to enab',
      'Keywords': 'Package Analytics, Big Data, Logistics Management, Sensors, Consulting',
      'ProjectSummary': 'A solution provider for logistics automation looking to differentiate themselves in a crowded marketplace must deliver an enterprise level software platform. New platform must bring large amounts of real-time data from facility to enterprise level to enab',
      'ProjectTeam': 'Norb Gravelle, Roger Kerns,  Aamir Chaudhry',
      'Images': 0
    },
    {
      'ID': 34,
      'Client': 'Siemens',
      'ProjectName': 'Predictive Maintenance Strategy and Implementation',
      'Year': 2016,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Semiconductor Equipment',
      'Services': 'Consulting, Design, Development and Analytics',
      'ProjectApplicationType': '',
      'Engagement': 'Analytics',
      'Discipline': 'Consulting and Analytics',
      'Technologies': '',
      'Keyword': 'Data Analytics, Analytics, Predictive Maintenance, Remote Diagnostics',
      'Challenges': 'No predictive analytics being used on collected data\n\nData mining environments overwhelmed by large data volume and unable to interpret data\n\nCurrent data handling solution cannot process massive amounts of data\n\nLimited resources and lack of available in',
      'Solution': 'Reviewed and improved the data infrastructure\nImplemented advanced data analytics, reporting, and integration\n\nCreated a full data preparation cycle which improved data quality\n\nPut predictive business rules into effect and added predictive modeling to th',
      'ProvenResults': 'Effectively stabilized platform and overcame data quality issues\n\nProvided model templates to feed into a Model Factory\n\nDelivered models achieved necessary quality gates \n\nPredicted and prevented numerous egregious failures by implementing predictive mod',
      'Situation': 'Global capital equipment supplier dealing with high warranty and service costs for thousands of units running in the field. Predictive analytics could be a viable solution for driving costs down, but the current data handling solution is incapable of proc',
      'Keywords': 'Predictive maintenance, analytics, data, remote diagnostics',
      'ProjectSummary': 'Global capital equipment supplier dealing with high warranty and service costs for thousands of units running in the field. Predictive analytics could be a viable solution for driving costs down, but the current data handling solution is incapable of proc',
      'ProjectTeam': 'German analytics team',
      'Images': 0
    },
    {
      'ID': 35,
      'Client': 'Stereotaxis',
      'ProjectName': 'Multi-function Display for Surgical Navigation System',
      'Year': '(Pre 2009)',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': '',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'FDA, Robotics, Cardiac, Magnetic, Value Driven Analysis, Technology Strategy, Radiation',
      'Challenges': 'Commercialize the system including obtaining FDA approval\n\nExpand the technology into additional modalities, such as ultrasound\n\nLack of in-house resources to meet time-to-market goal of 9-12 months',
      'Solution': 'Working with management and in-house engineering teams, developed technology strategy and product roadmap \n\nVerified critical productrequirements using proprietary Value Driven Analysis tool\n\nReinforced client’s in-house capabilities with engineering and',
      'ProvenResults': 'Product received FDA approval and was brought to market early\n\nDelivered scalable and supportable platform architecture enabling future capability enhancements and extensions\n\nEnhanced market acceptability for this highly innovative product',
      'Situation': "Global manufacturer of robotics systems for the treatment of cardiac arrhythmias focused on developing a remote magnetic navigation system for cardiac catheterization. Additional requirement for new system is to reduce physicians' exposure to radiation du",
      'Keywords': 'robotics, cardiac, magnetic, radiation, FDA, value driven analysis, technology strategy',
      'ProjectSummary': 'Global manufacturer of robotics systems for the treatment of cardiac arrhythmias to develop a remote magnetic navigation system for cardiac catheterization, reducing physicians’ exposure to radiation during fluoroscopy procedures',
      'ProjectTeam': '',
      'Images': 0
    },
    {
      'ID': 36,
      'Client': 'SureWx',
      'ProjectName': 'Migration to Cloud ASP',
      'Year': 2014,
      'Brand': 'Foliage',
      'Industry': 'Aerospace & Defense',
      'Sector': 'Commerical Development',
      'Services': 'Consulting',
      'ProjectApplicationType': 'Deicing, Weather, Airlines, Cloud, Fault Tolerant',
      'Engagement': '',
      'Discipline': '',
      'Technologies': '',
      'Keyword': '',
      'Challenges': 'Tight time-to-market — needed a sufficient improvement on current solution to buy time to develop the new technology solution\n\nNew to cloud technology hampered by internal resistance to that approach',
      'Solution': 'Facilitated efforts from all key business and technical stakeholders\n\nProduced preliminary software architecture and high-level requirements for the new solution\n\nIntegrated team worked seamlessly with client to produce the deliverables in just three week',
      'ProvenResults': 'Produced interim approach to satisfy immediate need for the upcoming season\n\nProduced vision, architecture and requirements to serve as foundation for the long-term solution',
      'Situation': 'A market-leading Aerospace company looking to develop product vision and technology roadmap for the next 5+ years. To dominate their time-driven product space, they must launch a cloud-based system that supports short, efficient integration solutions for',
      'Keywords': 'deicing, weather, airlines, cloud, fault tolerant',
      'ProjectSummary': 'Early corporate focus on the design , manufacturing and deployment of Weather Station Hardware. Business model switched to that of an Application Service Provider. Prototype application and hosting center both need major upgrade to support the planned rap',
      'ProjectTeam': 'Ari Berman, Charlie Alfred, Michael Dixon',
      'Images': 0
    },
    {
      'ID': 37,
      'Client': 'Symbotic',
      'ProjectName': 'System Mixed Pallet Building',
      'Year': 2012,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'AMH',
      'Services': 'Design, Development',
      'ProjectApplicationType': 'Embedded',
      'Engagement': 'System Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': '',
      'Challenges': 'Customer demand driving urgency to deliver new solution within 6 months \n\nOff-the-shelf solutions did not meet specific custom requirements\n\nHighly available and scalable solution to be architected from the ground up',
      'Solution': 'Refined palletizing algorithms to generate an optimized solution\n\nTested palletizing algorithms in simulation to prove performance and efficiency measures\n\nProvided a highly experienced team to architect, design, develop, and test the new system',
      'ProvenResults': 'New solution developed with no impact on surrounding systems\n\nHighly robust, scalable system improved palletization efficiency\n\nUpdated system architecture documentation enabling more efficient development of future system features and enhancements\n\nHit m',
      'Situation': 'An automated material handling solution provider needed to develop a new mixed pallet building system within a very tight market window. Solution must provide fast re-planning, greater efficiency and control while allowing for customization to meet future',
      'Keywords': '',
      'ProjectSummary': 'An automated material handling solution provider developing a new mixed pallet building system within a very tight market window. Solution must provide fast re-planning, greater efficiency and control while allowing for customization to meet future busine',
      'ProjectTeam': 'Tom Mariano, Jeff Liscouski',
      'Images': 0
    },
    {
      'ID': 38,
      'Client': 'Symbotic',
      'ProjectName': 'Warehouse Automation & Control System',
      'Year': 2013,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'AMH',
      'Services': 'Consulting, Design, Development',
      'ProjectApplicationType': '',
      'Engagement': 'System Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'WCS',
      'Challenges': 'Extremely tight time-to-market deadline of 9 months\n\nRealized gaps in bandwidth, experience and expertise in specific areas \n\nOrganization and development processes not structured to deliver effectively',
      'Solution': 'Recommended process changes to improve the software development lifecycle\n\nCollaborated with business and technical leaders to define product roadmap and software development plans \n\nManaged integrated team comprised of both onshore and offshore resources',
      'ProvenResults': 'Met aggressive time-to-market goal with new warehouse automation solution\n\nDelivered highly configurable solution reducing customization for future installations\n\nNew innovative solution gave company strong competitive advantage in their market',
      'Situation': 'Company developing a new warehouse automation system faced aggressive time-to-market deadline to satisfy customer requirements. This solution would improve warehouse operational parameters such as storage density, inventory traceability and throughput cyc',
      'Keywords': 'WCS',
      'ProjectSummary': 'Company developing a new warehouse automation system faced aggressive time-to-market deadline to satisfy customer requirements. This solution would improve warehouse operational parameters such as storage density, inventory traceability and throughput cyc',
      'ProjectTeam': 'Tom Mariano, Jeff Liscouski',
      'Images': 0
    },
    {
      'ID': 39,
      'Client': 'TransEngen',
      'ProjectName': 'Pharmacy Benefit Verification System',
      'Year': 2013,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'HIT',
      'Services': 'Consulting',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'Cloud, Cybersecurity, Service Oriented Architecture, Pharmacy',
      'Challenges': 'Reduce prescription verification time from 1-3 business days to minutes by automating current process\n\nLooking for full responsibility partner to develop new cloud-based business model\n\nSystem design had to accommodate varied payer results',
      'Solution': 'Developed secure cloud-based system automating the prescription verification process\n\nCreated virtual hosting strategy with encrypted disks on VMWare and Linux technologies \n\nConfigured a fault tolerant firewall to secure patient data\n\nCollaborated with s',
      'ProvenResults': 'Highly sensitive patient data now secure in cloud-based environment\n\nReduced hosting costs by 70% with new virtual hosting solution\n\nAutomated verification process reduced response time from1-3 business days to ~5 minutes',
      'Situation': 'Healthcare technology company providing benefit verification services must expedite the prescription approval process while ensuring security of highly sensitive patient data. Current manual verification process takes 1-3 days before  prescription is writ',
      'Keywords': 'Cloud, cybersecurity, service oriented architecture (SOA), pharmacy',
      'ProjectSummary': 'Foliage was selected to develop a web based platform to be used by Pharmaceutical companies for investigating insurance reimbursements for new drugs.  The system interfaces with > 450 insurance companies to query reimbursement information, and processes t',
      'ProjectTeam': 'Adam Hesse',
      'Images': 0
    },
    {
      'ID': 40,
      'Client': 'Varian',
      'ProjectName': 'Amorphous Silicon Digital X-Ray Imager',
      'Year': '',
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': '',
      'ProjectApplicationType': 'Hardware',
      'Engagement': 'Product Consulting',
      'Discipline': '',
      'Technologies': 'Mixed signal PCB design\nInjection molded and cast part design',
      'Keyword': 'X-Ray, Product Architecture, Platform Architecture',
      'Challenges': 'Reduce noise output from existing device amplifiers\n\nScale existing panel design for a new panel format\n\nRequires USB communication functionality compatible with existing board',
      'Solution': 'Identified low noise circuit design elements from existing product line\n\nDesigned a prototype panel to ensure imaging performance and quality\n\nUsed a platform approach for product architecture to allow maximum configuration flexibility',
      'ProvenResults': 'Reduced noise and improved platform performance\n\nEnhanced imaging quality across the product line\n\nAbility to pursue new OEM business',
      'Situation': 'Leading manufacturer of oncology systems interested in developing a low cost imaging panel for dental application. Support needed to develop product architecture, conceptual design, and initial fabrication of the product.',
      'Keywords': 'X-ray, product architecture, platform architecture',
      'ProjectSummary': 'X-ray tube and imager manufacturer developing a low cost imaging panel for dental X-rays - needs help developing product architecture, conceptual design and initial fabrication of product',
      'ProjectTeam': '',
      'Images': 0
    },
    {
      'ID': 41,
      'Client': 'Viewray',
      'ProjectName': 'Radiation Therapy Control System',
      'Year': 2011,
      'Brand': 'Foliage',
      'Industry': 'Medical & Life Sciences',
      'Sector': 'MedTech',
      'Services': 'Consulting, Design, Development',
      'ProjectApplicationType': '',
      'Engagement': 'Software Development',
      'Discipline': '',
      'Technologies': '',
      'Keyword': 'FDA, Cancer, Imaging, 501 (k), Oncology',
      'Challenges': 'Development effort late and over budget – threatening cancellation of entire program\n\nNeeded assessment of current control system design effort to determine what, if anything, could be saved',
      'Solution': 'Designed and built new control system including software, programmable logic, printed circuit boards and mechanical enclosures\n\nProvided on-site integration and performance testing support\n\nProvided on-site verification',
      'ProvenResults': 'New radiation therapy control system delivered in time for performance demonstration\n\nAdditional Beta test sites arranged\n\nEnabled the start of 510(k) submission to FDA',
      'Situation': 'Venture-funded medical device company focused on developing advanced radiation therapy technology struggling with development effort of a combined real-time imaging and radiation therapy system for cancer treatment.',
      'Keywords': 'imaging, cancer, software, 501(k), FDA, oncology',
      'ProjectSummary': 'Combine real-time imaging and radiation therapy system for cancer treatment. Challenge: The majority of the system was built but the control system was late and over budget threatening the entire program. System assessment, Planning, Development\n2 write-u',
      'ProjectTeam': 'Dan Goldman, Greg Walsh',
      'Images': 0
    },
    {
      'ID': 42,
      'Client': 'Zygo',
      'ProjectName': 'Lithography Lens Metrology System',
      'Year': 2007,
      'Brand': 'Foliage',
      'Industry': 'Intelligent Manufacturing Solutions',
      'Sector': 'Semiconductor Equipment',
      'Services': 'Development, Test',
      'ProjectApplicationType': 'Embedded',
      'Engagement': 'Software Development',
      'Discipline': 'Software, Test',
      'Technologies': '',
      'Keyword': 'Time to Market, Lens Surface, Accuracy, 3D Mapping',
      'Challenges': 'Conflicting approaches to development across international offices stalling the project \n\nProduct knowledge dispersed across global teams impeding effective communication\n\nHighly customized and undocumented software framework requiring experience with com',
      'Solution': 'Highly collaborative approach built consensus on development strategy among global teams\n\nDeciphered highly complex algorithms without documentation and implemented changes that improved speed and accuracy\n\nProvided technical leadership on planning, defin',
      'ProvenResults': 'Successful full system test on the first attempt\n\nIdentification and correction of lens distortion down to the sub-nanometer level improved precision specifications by 8X \n\nProduct delivered on-time to meet very aggressive 10-month schedule',
      'Situation': 'Global supplier of optical metrology instruments must deliver new innovative product to meet customer need under extremely tight time constraints. This new product uses 3D mapping to characterize a lens surface requiring a level of accuracy that had never',
      'Keywords': 'Time to market, 3D mapping, lens surface, accuracy',
      'ProjectSummary': 'Global supplier of optical metrology instruments must deliver new innovative product to meet customer need under extremely tight time constraints. This new product uses 3D mapping to characterize a lens surface requiring a level of accuracy that had never',
      'ProjectTeam': 'Rick Flanders, Tom Mariano',
      'Images': 0
    }
    ]
  },
  getEngagementTypes () {
    return [{
      'engagementId': 1,
      'name': 'Software Development'
    },
    {
      'engagementId': 2,
      'name': 'Product Consulting'
    },
    {
      'engagementId': 3,
      'name': 'System Development'
    },
    {
      'engagementId': 4,
      'name': 'Process Consulting'
    }
    ]
  },
  getKeywords () {
    return [
      {
        'keywordId': 50,
        'name': '3 Axis Stepper'
      },
      {
        'keywordId': 128,
        'name': '3D Mapping'
      },
      {
        'keywordId': 92,
        'name': '501 (k)'
      },
      {
        'keywordId': 20,
        'name': 62304
      },
      {
        'keywordId': 27,
        'name': 'AC Box'
      },
      {
        'keywordId': 94,
        'name': 'Accuracy'
      },
      {
        'keywordId': 62,
        'name': 'Acquisition'
      },
      {
        'keywordId': 17,
        'name': 'ADA'
      },
      {
        'keywordId': 24,
        'name': 'AMAT'
      },
      {
        'keywordId': 103,
        'name': 'Analytics'
      },
      {
        'keywordId': 58,
        'name': 'Architecture Assement'
      },
      {
        'keywordId': 98,
        'name': 'Architecture Definition'
      },
      {
        'keywordId': 105,
        'name': 'Architecture Platform'
      },
      {
        'keywordId': 63,
        'name': 'Architecture Strategy'
      },
      {
        'keywordId': 97,
        'name': 'Assessment'
      },
      {
        'keywordId': 13,
        'name': 'ATE'
      },
      {
        'keywordId': 14,
        'name': 'Automated Test Equipment'
      },
      {
        'keywordId': 85,
        'name': 'Beverage Filler Valve'
      },
      {
        'keywordId': 77,
        'name': 'Big Data'
      },
      {
        'keywordId': 32,
        'name': 'Biology'
      },
      {
        'keywordId': 90,
        'name': 'Cancer'
      },
      {
        'keywordId': 118,
        'name': 'Cardiac'
      },
      {
        'keywordId': 15,
        'name': 'Chip Design'
      },
      {
        'keywordId': 49,
        'name': 'Chromatography'
      },
      {
        'keywordId': 2,
        'name': 'Class II'
      },
      {
        'keywordId': 29,
        'name': 'Cloud'
      },
      {
        'keywordId': 108,
        'name': 'Cloud Based Portal'
      },
      {
        'keywordId': 6,
        'name': 'Code'
      },
      {
        'keywordId': 36,
        'name': 'Connectivity'
      },
      {
        'keywordId': 115,
        'name': 'Consulting'
      },
      {
        'keywordId': 86,
        'name': 'Consumer Goods'
      },
      {
        'keywordId': 59,
        'name': 'Control System'
      },
      {
        'keywordId': 25,
        'name': 'Cost Reduction'
      },
      {
        'keywordId': 31,
        'name': 'Cybersecurity'
      },
      {
        'keywordId': 11,
        'name': 'Data Analytics'
      },
      {
        'keywordId': 104,
        'name': 'Data Management'
      },
      {
        'keywordId': 106,
        'name': 'Design'
      },
      {
        'keywordId': 41,
        'name': 'Development'
      },
      {
        'keywordId': 111,
        'name': 'DFMA'
      },
      {
        'keywordId': 28,
        'name': 'Diabetes'
      },
      {
        'keywordId': 51,
        'name': 'Driven Sample'
      },
      {
        'keywordId': 82,
        'name': 'Drug Development'
      },
      {
        'keywordId': 57,
        'name': 'Dual Beam SEM'
      },
      {
        'keywordId': 56,
        'name': 'ECG'
      },
      {
        'keywordId': 43,
        'name': 'Electrical'
      },
      {
        'keywordId': 99,
        'name': 'Embedded'
      },
      {
        'keywordId': 3,
        'name': 'EMR'
      },
      {
        'keywordId': 30,
        'name': 'Enterprise'
      },
      {
        'keywordId': 26,
        'name': 'Etch Tool'
      },
      {
        'keywordId': 22,
        'name': 'FDA'
      },
      {
        'keywordId': 68,
        'name': 'Fleet Control Management'
      },
      {
        'keywordId': 47,
        'name': 'Fluidics'
      },
      {
        'keywordId': 87,
        'name': 'Food and Beverage'
      },
      {
        'keywordId': 84,
        'name': 'Hardware'
      },
      {
        'keywordId': 4,
        'name': 'HIS'
      },
      {
        'keywordId': 1,
        'name': 'HL7'
      },
      {
        'keywordId': 55,
        'name': 'HRV'
      },
      {
        'keywordId': 91,
        'name': 'Imaging'
      },
      {
        'keywordId': 74,
        'name': 'Implantable'
      },
      {
        'keywordId': 112,
        'name': 'Integration and Test'
      },
      {
        'keywordId': 48,
        'name': 'Ion-exchange'
      },
      {
        'keywordId': 16,
        'name': 'iOS'
      },
      {
        'keywordId': 39,
        'name': 'IoT'
      },
      {
        'keywordId': 81,
        'name': 'Lab & Test'
      },
      {
        'keywordId': 93,
        'name': 'Lens Surface'
      },
      {
        'keywordId': 35,
        'name': 'LIM'
      },
      {
        'keywordId': 37,
        'name': 'LIS'
      },
      {
        'keywordId': 52,
        'name': 'Loading Automation'
      },
      {
        'keywordId': 88,
        'name': 'Logistics Management'
      },
      {
        'keywordId': 73,
        'name': 'LVAD'
      },
      {
        'keywordId': 119,
        'name': 'Magnetic'
      },
      {
        'keywordId': 65,
        'name': 'Manufacturing'
      },
      {
        'keywordId': 44,
        'name': 'Mechanical'
      },
      {
        'keywordId': 83,
        'name': 'Metrics'
      },
      {
        'keywordId': 5,
        'name': 'Migration'
      },
      {
        'keywordId': 102,
        'name': 'Mobile'
      },
      {
        'keywordId': 60,
        'name': 'Motion Control'
      },
      {
        'keywordId': 34,
        'name': 'Neurology'
      },
      {
        'keywordId': 72,
        'name': 'Next-Generation Device'
      },
      {
        'keywordId': 66,
        'name': 'Off-Shore'
      },
      {
        'keywordId': 127,
        'name': 'Oncology'
      },
      {
        'keywordId': 67,
        'name': 'On-Shore'
      },
      {
        'keywordId': 113,
        'name': 'Package Analytics'
      },
      {
        'keywordId': 124,
        'name': 'Pharmacy'
      },
      {
        'keywordId': 7,
        'name': 'Platform'
      },
      {
        'keywordId': 126,
        'name': 'Platform Architecture'
      },
      {
        'keywordId': 54,
        'name': 'Portable EEG System'
      },
      {
        'keywordId': 116,
        'name': 'Predictive Maintenance'
      },
      {
        'keywordId': 23,
        'name': 'Process Gap Assessment'
      },
      {
        'keywordId': 125,
        'name': 'Product Architecture'
      },
      {
        'keywordId': 40,
        'name': 'Product Costs'
      },
      {
        'keywordId': 61,
        'name': 'Product Line'
      },
      {
        'keywordId': 107,
        'name': 'Product Platform'
      },
      {
        'keywordId': 122,
        'name': 'Radiation'
      },
      {
        'keywordId': 21,
        'name': 'Remediation'
      },
      {
        'keywordId': 117,
        'name': 'Remote Diagnostics'
      },
      {
        'keywordId': 70,
        'name': 'Retail Distribution'
      },
      {
        'keywordId': 80,
        'name': 'Roadmap'
      },
      {
        'keywordId': 69,
        'name': 'Robotics'
      },
      {
        'keywordId': 109,
        'name': 'Sanmina'
      },
      {
        'keywordId': 53,
        'name': 'Scalability'
      },
      {
        'keywordId': 79,
        'name': 'Scanning System'
      },
      {
        'keywordId': 101,
        'name': 'Security'
      },
      {
        'keywordId': 12,
        'name': 'Semiconductor'
      },
      {
        'keywordId': 114,
        'name': 'Sensors'
      },
      {
        'keywordId': 123,
        'name': 'Service Oriented Architecture'
      },
      {
        'keywordId': 19,
        'name': 'Software'
      },
      {
        'keywordId': 45,
        'name': 'SOM'
      },
      {
        'keywordId': 100,
        'name': 'Systems'
      },
      {
        'keywordId': 121,
        'name': 'Technology Strategy'
      },
      {
        'keywordId': 96,
        'name': 'Test processes'
      },
      {
        'keywordId': 71,
        'name': 'Time to Market'
      },
      {
        'keywordId': 46,
        'name': 'Touchscreen'
      },
      {
        'keywordId': 18,
        'name': 'UI'
      },
      {
        'keywordId': 8,
        'name': 'Upgrade'
      },
      {
        'keywordId': 120,
        'name': 'Value Driven Analysis'
      },
      {
        'keywordId': 110,
        'name': 'Value Engineering'
      },
      {
        'keywordId': 64,
        'name': 'VDA'
      },
      {
        'keywordId': 75,
        'name': 'Warehouse Automation'
      },
      {
        'keywordId': 89,
        'name': 'WCS'
      },
      {
        'keywordId': 10,
        'name': 'Windows 7'
      },
      {
        'keywordId': 9,
        'name': 'Windows XP'
      },
      {
        'keywordId': 76,
        'name': 'Wireless'
      },
      {
        'keywordId': 95,
        'name': 'Workflow Management'
      },
      {
        'keywordId': 78,
        'name': 'X-Ray'
      }
    ]
  },
  getServices () {
    return [
      {
        'serviceId': 1,
        'name': 'Development'
      },
      {
        'serviceId': 2,
        'name': 'Project Management'
      },
      {
        'serviceId': 3,
        'name': 'Requirements Definition'
      },
      {
        'serviceId': 4,
        'name': 'Design'
      },
      {
        'serviceId': 5,
        'name': 'Development'
      },
      {
        'serviceId': 6,
        'name': 'Verification'
      },
      {
        'serviceId': 7,
        'name': 'Test'
      },
      {
        'serviceId': 8,
        'name': 'Consulting'
      },
      {
        'serviceId': 9,
        'name': 'ESS'
      },
      {
        'serviceId': 10,
        'name': 'Software Development'
      },
      {
        'serviceId': 11,
        'name': 'Process Consulting'
      },
      {
        'serviceId': 12,
        'name': 'IoT'
      },
      {
        'serviceId': 13,
        'name': 'Analytics'
      }
    ]
  }
}
