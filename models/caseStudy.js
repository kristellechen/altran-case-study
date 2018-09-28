const mongoose = require('mongoose')

// Case Study Schema
const caseSchema = new mongoose.Schema({
  caseId: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: false
  },
  sector: {
    type: String,
    required: false
  },
  services: {
    type: String,
    required: false
  },
  projectType: {
    type: String,
    required: false
  },
  engagementType: {
    type: String,
    required: false
  },
  discipline: {
    type: String,
    required: false
  },
  technologies: {
    type: String,
    required: false
  },
  keywordLookup: {
    type: String,
    required: false
  },
  challenges: {
    type: String,
    required: false
  },
  solution: {
    type: String,
    required: false
  },
  provenResults: {
    type: String,
    required: false
  },
  keywords: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false
  },
  team: {
    type: String,
    required: false
  },
  images: {
    type: Number,
    required: false
  }
})

const CaseStudies = module.exports = mongoose.model('CaseStudies', caseSchema)

// load initial data
module.exports.loadCaseStudies = (callback) => {
  CaseStudies.create( { 
    caseId: 1,
    client: 'Abaxis',
    projectName: 'HL7 Interface Development',
    year: 2015,
    brand: 'Foliage',
    industry: 'Medical & Life Sciences',
    sector: 'MedTech',
    services: 'Development',
    projectType: '',
    engagementType: 'Software Development',
    discipline: 'Software, Test',
    technologies: '',
    keywordLookup: 'HL7, Class II, EMR',
    challenges: 'Current analyzer capable of sending only ASTM data\n\nAdding HL7 data capability to existing analyzer with minimum system changes\n\nSimplifying implementation of HL7 solution for small medical centers with limited IT support\n\nMissing documentation and artifa',
    solution: 'Created HL7 plug-in for analyzer that enabled broader connectivity \n\nDesigned and developed a plug-in to enable and simplify installation of HL7 solution \n\nDocumented QMS process to ensure consistency moving forward',
    provenResults: 'Enabled analyzer to deliver data in HL7 format\n\nAble to deliver a customized configuration of HL7 solution to small medical center customers \n\nNow have artifacts and documentation that meet requirements for a Class II medical device',
    situation: 'Leading diagnostic medical device manufacturer must improve and expand their connectivity strategy for lab equipment. They need a solution to enable their existing blood chemistry analyzers to communicate via HL7 with EMRs/LIMs.',
    keywords: 'HL7, Class II, EMR',
    summary: 'Leading diagnostic medical device company needed a solution to enable existing devices to send HL7 data to EMRs.',
    team: 'Matt Eisedrath, Peter Rudolph',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 2,
    client: 'Abbott Diabetes',
    projectName: 'Next Generation Hospital Glucose Meter and Data Management System',
    year: '(Pre 2009)',
    brand: 'Foliage',
    industry: 'Medical & Life Sciences',
    sector: 'MedTech',
    services: 'Project Management, Requirements Definition, Design, Development, Verification',
    projectType: 'Embedded',
    engagementType: '',
    discipline: '',
    technologies: '',
    keywordLookup: 'HL7, Class II, EMR, HIS',
    challenges: 'Diverse stakeholders accustomed to working in silo fashion (many from an acquired company)\n\nNo internal HL7 or enterprise platform experience\n\nVery tight time-to-market window (12 months)',
    solution: 'Provided dedicated team with deep domain and regulated development experience\n\nFull project responsibility: project management, requirements, architecture, design, development, and verification\n\nCollaborated with stakeholders to align technical decisions',
    provenResults: 'Class II data management system designed to receive data from a point-of-care device\n\nDesigned and implemented HL7 interfaces for the HIS and EMR enabling connectivity with meter while minimizing labor and data collection procedures\n\nMet aggressive market',
    situation: 'A manufacturer of hospital-based diabetes blood glucose monitors and meters needed to make significant updates to their hospital-based meters and develop a new data management system. Company facing an aggressive market window and had limited experience i',
    keywords: 'HL7, Class II, HIS, EMR',
    summary: 'Manufacturer of hospital-based diabetes blood glucose monitors and glucose meters needed update to hospital-based meters and new data management system. Foliage developed Class II data management system designed to receive data from a point-of-care device',
    team: 'Greg Walsh, John Carey',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 3,
    client: 'Abbott Molecular',
    projectName: 'Platform Upgrade & Migration',
    year: 2015,
    brand: 'Foliage',
    industry: 'Medical & Life Sciences',
    sector: 'HIT',
    services: 'Project Management, Development, Test',
    projectType: 'Enterprise',
    engagementType: 'Software Development',
    discipline: 'Software',
    technologies: 'Enterprise',
    keywordLookup: 'Migration, Code, Platform, Upgrade, Windows XP, Windows 7',
    challenges: 'Need to certify that new OS is compatible with all pieces of their software platform\n\nMust maintain same operational efficiency for hundreds of customers while migrating to the new OS\n\nComplex assessment due to the reliance on third party software',
    solution: 'Assessment identified high-risk areas for porting and code requiring rewriting\n\nImplementation strategy focused on moving over a million lines of code to new OS\n\nEnsured compatibility of new OS with ~25 third party software applications',
    provenResults: 'New OS allows for enhancement to existing product and future models\n\nNew user interface is more flexible and provides additional reporting options\n\nUpgraded verification test suite ensures continued accuracy of results',
    situation: 'Provider of diagnostic testing instruments is faced with obsolescence of current operating system (OS). This critical upgrade is necessary to maintain historical support levels \u000band will provide a solid foundation for the development \u000bof future instrument',
    keywords: 'Migration, code, platform, upgrade, Windows XP, Windows 7',
    summary: 'Windows XP migration to Windows 8.1, creation of Windows 8.1 Embedded Image, Verification testing of the code',
    team: 'Dave Widland, Kevin Petriel',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 4,
    client: 'Advantest',
    projectName: 'Advanced Analytics for Error Detection During Chip Design',
    year: 2016,
    brand: 'Foliage',
    industry: 'Intelligent Manufacturing Solutions',
    sector: 'Semiconductor Equipment',
    services: 'Consulting',
    projectType: '',
    engagementType: 'Product Consulting',
    discipline: 'Consulting, Analytics',
    technologies: '',
    keywordLookup: 'Data Analytics, Semiconductor, ATE, Automated Test Equipment, Chip Design',
    challenges: 'Improvement of chip development cycle with semi-automatic evaluation of chip prototypes and structured exploration of test results\n\nInability to detect error patterns and draw conclusions about potential root causes in the preliminary chip design\n\nOptimiz',
    solution: 'Refined algorithmic approaches iteratively and implemented proof of concepts \n\nApplied agile development method using Extreme Programming\n\nDesigned and implemented algorithms supporting error detection, error localization, and operation optimization \n\nEva',
    provenResults: 'A novel approach to analysis of chip design test results that can detect errors and optimize operations\n\nDemonstrator application for analysis and optimization of chips\n\nClean documentation of results and design decisions\n\nNew application programming inte',
    situation: 'A leading semiconductor company is trying to prove that advanced analytics can be used during chip design and development to detect design errors and optimize chip operations to vastly \nshorten the design cycle.',
    keywords: 'Data analytics, Semiconductor, ATE, automated test equipment, chip design',
    summary: 'A leading semiconductor company is trying to prove that advanced analytics can be used during chip design and development to detect design errors and optimize chip operations to vastly shorten the design cycle.',
    team: 'Aamir Chaudhry and Scott Evans\nGerman Analytics Team – Rich Sanford',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 5,
    client: 'AgaMatrix',
    projectName: 'Mobile Application for Diabetes Data Management',
    year: 2011,
    brand: 'Foliage',
    industry: 'Medical & Life Sciences',
    sector: 'HIT',
    services: 'Design, Development',
    projectType: 'Embedded, Data',
    engagementType: 'Software Development',
    discipline: '',
    technologies: 'iOS',
    keywordLookup: 'iOS, ADA, UI, Software',
    challenges: 'Tight time-to-market with software needed in 90-day window\n\nSeveral competitors vying \u000bfor first-to-market position\n\nLack of mobile application development experience and limited resources',
    solution: 'Designed and developed fully functional iOS mobile application for new device\n\nIntegrated team worked seamlessly with client to hit 90-day market window\n\nDeveloped UI, core data model, and several critical features to power application',
    provenResults: 'Hit market window with new iOS application\n\nApplication launched at ADA meeting and received favorably by diabetes industry\n\nDelivered recommendations to improve client’s internal development process',
    situation: 'An early-stage glucometers and data management solutions company struggling to develop an iOS application. They are looking to differentiate in a crowded marketplace with a    single device enabling proactive disease management –    iPhone plug-in meter w',
    keywords: 'iOS, ADA, UI, Software',
    summary: 'As a development partner Foliage helped to develop an important mobile data management system for diabetics managing this chronic disease.',
    team: 'John Carey, Greg Walsh',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 6,
    client: 'Amgen',
    projectName: 'Product Design History File and Requirements Remediation',
    year: '',
    brand: 'Foliage',
    industry: 'Medical & Life Sciences',
    sector: 'MedTech',
    services: 'ESS',
    projectType: 'Requirements Remediation',
    engagementType: 'Software Development',
    discipline: 'EE, EM, Systems Test, Consulting',
    technologies: '',
    keywordLookup: '62304, Remediation, FDA, Process Gap Assessment',
    challenges: 'Understanding the gaps between current practices and best practices relating to IEC 62304 design history files\n\nUndocumented requirements described by comments in code and some design documentation\n\nPerforming and documenting new verification tests to sho',
    solution: 'Performed gap analysis between current practices and IEC 62304 best practices\n\nDiscovered and documented requirements from source code and document review\n\nGenerated and documented new verification tests\n\nTraced the tests to requirements and demonstrated',
    provenResults: 'Updated all requirements documents within the design history documents to comply with IEC 62304 \n\nFacilitated submission of requirements documentation to the FDA \n\nReported several defects discovered during code inspection \n\nUpdated the verification trace',
    situation: 'Due to changes in the regulatory environment, several commercial dermatological laser systems came to be regarded as medical devices. Manufacturer needs to reverse engineer the systems to achieve IEC 62304 compliance.',
    keywords: '62304, remediation, FDA process gap assessment',
    summary: 'Due to changes in the regulatory environment, several commercial dermatological laser systems came to be regarded as medical devices.  Manufacturer needed to reverse engineer the devices to achieve IEC 62304 compliance.',
    team: 'Mark Hersey',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
  CaseStudies.create( { 
    caseId: 7,
    client: 'Applied Materials',
    projectName: 'Cost Reduction of Etch Tool',
    year: '',
    brand: 'Foliage',
    industry: 'Intelligent Manufacturing Solutions',
    sector: 'Semiconductor Equipment',
    services: 'ESS',
    projectType: 'Value Engineering',
    engagementType: 'System Development',
    discipline: '',
    technologies: 'Finite Element Analysis',
    keywordLookup: 'AMAT, Cost Reduction, Etch Tool, AC Box',
    challenges: 'Reduce product costs within 6 months to quickly impact bottom line \n\nDocumentation for chamber cooling manifold unavailable as it was owned by the supplier \n\nEnsure changes to the unit do not compromise performance of etch tool\n\nInternal engineering resou',
    solution: 'Reverse engineered existing unit and identified high-cost components for replacement or redesign\n\nSelected alternate commercial off-the-shelf components based on cost, functional and material compatibility analysis\n\nPerformed finite element analysis and p',
    provenResults: 'Reduced bill of materials cost by 32%\n\nOverall product cost reduced by 40% – double the original target of 20%\n\nCompetitive bidding identified new manufacturing partner and second source option\n\nRedesign and elimination of manufactured parts reduced assem',
    situation: 'Global company developing high precision manufacturing equipment for the semiconductor industry must meet corporate goal to reduce product costs by 20%. Chamber cooling manifold identified as individual subcomponent for significant cost reduction.',
    keywords: 'AMAT, Cost Reduction, Etch Tool, AC Box',
    summary: 'Global company developing high precision manufacturing equipment for the semiconductor industry must meet corporate goal to reduce product costs by 20%. Chamber cooling manifold identified as individual subcomponent for significant cost reduction.',
    team: 'Myron Pugh, Lee Plovnick, Chuck Shafer',
    images: 0 }, (err) => {
    if (err) console.log(err)
  })
}

// ADD case studies
module.exports.addCaseStudy = (study, callback) => {
  CaseStudies.create(study).then(callback)
}

// GET case studies
module.exports.getCaseStudies = (callback, limit) => {
  CaseStudies.find().limit(limit).exec().then(callback)
}

// GET case studies by id
module.exports.getCaseStudyById = (id, callback) => {
  CaseStudies.findById(id).exec().then(callback)
}

// UPDATE case studies
module.exports.updateCaseStudies = (id, study, callback) => {
  var query = {_id: id }
  var update = {
    caseId: study.caseId,
    client: study.client,
    projectName: study.projectName,
    year: study.year,
    brand: study.brand,
    industry: study.industry,
    sector: study.sector,
    services: study.services,
    projectType: study.projectType,
    engagementType: study.engagementType,
    discipline: study.discipline,
    technologies: study.technologies,
    keywordLookup: study.keywordLookup,
    challenges: study.challenges,
    solution: study.solution,
    keywords: study.keywords,
    summary: study.summary,
    team: study.team,
    images: study.images
  }
  options = {new:true}
  CaseStudies.findOneAndUpdate(query, update, options).exec().then(callback)
}

// DELETE case studies
module.exports.removeCaseStudies = (id, callback) => {
  var query = { _id: id }
  CaseStudies.findOneAndRemove(query).exec().then(callback)
}