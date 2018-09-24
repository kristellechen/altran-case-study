module.exports = {

  // Get Engagement Table
  getEngagementList () {
    return new Promise((resolve, reject) => {
      const json = [
        {
          'id': 1,
          'data': 'Development'
        },
        {
          'id': 2,
          'data': 'Project Management'
        },
        {
          'id': 3,
          'data': 'Requirements Definition'
        },
        {
          'id': 4,
          'data': 'Design'
        },
        {
          'id': 5,
          'data': 'Development'
        },
        {
          'id': 6,
          'data': 'Verification'
        },
        {
          'id': 7,
          'data': 'Test'
        },
        {
          'id': 8,
          'data': 'Consulting'
        },
        {
          'id': 9,
          'data': 'ESS'
        },
        {
          'id': 10,
          'data': 'Software Development'
        },
        {
          'id': 11,
          'data': 'Process Consulting'
        },
        {
          'id': 12,
          'data': 'IoT'
        },
        {
          'id': 13,
          'data': 'Analytics'
        }
      ]

      resolve(json)
    })
  },

  // Get Services Table
  getServicesList () {
    return new Promise((resolve, reject) => {
      const json = [{ id: 1, data: 'Software Development' }, { id: 2, data: 'Product Consulting' }, { id: 3, data: 'System Development' }, { id: 4, data: 'Process Consulting' }]
      resolve(json)
    })
  },

  // Get the Keyword Table
  getKeywordList () {
    return new Promise((resolve, reject) => {
      const json = [
        {
          'id': 50,
          'data': '3 Axis Stepper'
        },
        {
          'id': 128,
          'data': '3D Mapping'
        },
        {
          'id': 92,
          'data': '501 (k)'
        },
        {
          'id': 20,
          'data': 62304
        },
        {
          'id': 27,
          'data': 'AC Box'
        },
        {
          'id': 94,
          'data': 'Accuracy'
        },
        {
          'id': 62,
          'data': 'Acquisition'
        },
        {
          'id': 17,
          'data': 'ADA'
        },
        {
          'id': 24,
          'data': 'AMAT'
        },
        {
          'id': 103,
          'data': 'Analytics'
        },
        {
          'id': 58,
          'data': 'Architecture Assement'
        },
        {
          'id': 98,
          'data': 'Architecture Definition'
        },
        {
          'id': 105,
          'data': 'Architecture Platform'
        },
        {
          'id': 63,
          'data': 'Architecture Strategy'
        },
        {
          'id': 97,
          'data': 'Assessment'
        },
        {
          'id': 13,
          'data': 'ATE'
        },
        {
          'id': 14,
          'data': 'Automated Test Equipment'
        },
        {
          'id': 85,
          'data': 'Beverage Filler Valve'
        },
        {
          'id': 77,
          'data': 'Big Data'
        },
        {
          'id': 32,
          'data': 'Biology'
        },
        {
          'id': 90,
          'data': 'Cancer'
        },
        {
          'id': 118,
          'data': 'Cardiac'
        },
        {
          'id': 15,
          'data': 'Chip Design'
        },
        {
          'id': 49,
          'data': 'Chromatography'
        },
        {
          'id': 2,
          'data': 'Class II'
        },
        {
          'id': 29,
          'data': 'Cloud'
        },
        {
          'id': 108,
          'data': 'Cloud Based Portal'
        },
        {
          'id': 6,
          'data': 'Code'
        },
        {
          'id': 36,
          'data': 'Connectivity'
        },
        {
          'id': 115,
          'data': 'Consulting'
        },
        {
          'id': 86,
          'data': 'Consumer Goods'
        },
        {
          'id': 59,
          'data': 'Control System'
        },
        {
          'id': 25,
          'data': 'Cost Reduction'
        },
        {
          'id': 31,
          'data': 'Cybersecurity'
        },
        {
          'id': 11,
          'data': 'Data Analytics'
        },
        {
          'id': 104,
          'data': 'Data Management'
        },
        {
          'id': 106,
          'data': 'Design'
        },
        {
          'id': 41,
          'data': 'Development'
        },
        {
          'id': 111,
          'data': 'DFMA'
        },
        {
          'id': 28,
          'data': 'Diabetes'
        },
        {
          'id': 51,
          'data': 'Driven Sample'
        },
        {
          'id': 82,
          'data': 'Drug Development'
        },
        {
          'id': 57,
          'data': 'Dual Beam SEM'
        },
        {
          'id': 56,
          'data': 'ECG'
        },
        {
          'id': 43,
          'data': 'Electrical'
        },
        {
          'id': 99,
          'data': 'Embedded'
        },
        {
          'id': 3,
          'data': 'EMR'
        },
        {
          'id': 30,
          'data': 'Enterprise'
        },
        {
          'id': 26,
          'data': 'Etch Tool'
        },
        {
          'id': 22,
          'data': 'FDA'
        },
        {
          'id': 68,
          'data': 'Fleet Control Management'
        },
        {
          'id': 47,
          'data': 'Fluidics'
        },
        {
          'id': 87,
          'data': 'Food and Beverage'
        },
        {
          'id': 84,
          'data': 'Hardware'
        },
        {
          'id': 4,
          'data': 'HIS'
        },
        {
          'id': 1,
          'data': 'HL7'
        },
        {
          'id': 55,
          'data': 'HRV'
        },
        {
          'id': 91,
          'data': 'Imaging'
        },
        {
          'id': 74,
          'data': 'Implantable'
        },
        {
          'id': 112,
          'data': 'Integration and Test'
        },
        {
          'id': 48,
          'data': 'Ion-exchange'
        },
        {
          'id': 16,
          'data': 'iOS'
        },
        {
          'id': 39,
          'data': 'IoT'
        },
        {
          'id': 81,
          'data': 'Lab & Test'
        },
        {
          'id': 93,
          'data': 'Lens Surface'
        },
        {
          'id': 35,
          'data': 'LIM'
        },
        {
          'id': 37,
          'data': 'LIS'
        },
        {
          'id': 52,
          'data': 'Loading Automation'
        },
        {
          'id': 88,
          'data': 'Logistics Management'
        },
        {
          'id': 73,
          'data': 'LVAD'
        },
        {
          'id': 119,
          'data': 'Magnetic'
        },
        {
          'id': 65,
          'data': 'Manufacturing'
        },
        {
          'id': 44,
          'data': 'Mechanical'
        },
        {
          'id': 83,
          'data': 'Metrics'
        },
        {
          'id': 5,
          'data': 'Migration'
        },
        {
          'id': 102,
          'data': 'Mobile'
        },
        {
          'id': 60,
          'data': 'Motion Control'
        },
        {
          'id': 34,
          'data': 'Neurology'
        },
        {
          'id': 72,
          'data': 'Next-Generation Device'
        },
        {
          'id': 66,
          'data': 'Off-Shore'
        },
        {
          'id': 127,
          'data': 'Oncology'
        },
        {
          'id': 67,
          'data': 'On-Shore'
        },
        {
          'id': 113,
          'data': 'Package Analytics'
        },
        {
          'id': 124,
          'data': 'Pharmacy'
        },
        {
          'id': 7,
          'data': 'Platform'
        },
        {
          'id': 126,
          'data': 'Platform Architecture'
        },
        {
          'id': 54,
          'data': 'Portable EEG System'
        },
        {
          'id': 116,
          'data': 'Predictive Maintenance'
        },
        {
          'id': 23,
          'data': 'Process Gap Assessment'
        },
        {
          'id': 125,
          'data': 'Product Architecture'
        },
        {
          'id': 40,
          'data': 'Product Costs'
        },
        {
          'id': 61,
          'data': 'Product Line'
        },
        {
          'id': 107,
          'data': 'Product Platform'
        },
        {
          'id': 122,
          'data': 'Radiation'
        },
        {
          'id': 21,
          'data': 'Remediation'
        },
        {
          'id': 117,
          'data': 'Remote Diagnostics'
        },
        {
          'id': 70,
          'data': 'Retail Distribution'
        },
        {
          'id': 80,
          'data': 'Roadmap'
        },
        {
          'id': 69,
          'data': 'Robotics'
        },
        {
          'id': 109,
          'data': 'Sanmina'
        },
        {
          'id': 53,
          'data': 'Scalability'
        },
        {
          'id': 79,
          'data': 'Scanning System'
        },
        {
          'id': 101,
          'data': 'Security'
        },
        {
          'id': 12,
          'data': 'Semiconductor'
        },
        {
          'id': 114,
          'data': 'Sensors'
        },
        {
          'id': 123,
          'data': 'Service Oriented Architecture'
        },
        {
          'id': 19,
          'data': 'Software'
        },
        {
          'id': 45,
          'data': 'SOM'
        },
        {
          'id': 100,
          'data': 'Systems'
        },
        {
          'id': 121,
          'data': 'Technology Strategy'
        },
        {
          'id': 96,
          'data': 'Test processes'
        },
        {
          'id': 71,
          'data': 'Time to Market'
        },
        {
          'id': 46,
          'data': 'Touchscreen'
        },
        {
          'id': 18,
          'data': 'UI'
        },
        {
          'id': 8,
          'data': 'Upgrade'
        },
        {
          'id': 120,
          'data': 'Value Driven Analysis'
        },
        {
          'id': 110,
          'data': 'Value Engineering'
        },
        {
          'id': 64,
          'data': 'VDA'
        },
        {
          'id': 75,
          'data': 'Warehouse Automation'
        },
        {
          'id': 89,
          'data': 'WCS'
        },
        {
          'id': 10,
          'data': 'Windows 7'
        },
        {
          'id': 9,
          'data': 'Windows XP'
        },
        {
          'id': 76,
          'data': 'Wireless'
        },
        {
          'id': 95,
          'data': 'Workflow Management'
        },
        {
          'id': 78,
          'data': 'X-Ray'
        }
      ]

      resolve(json)
    })
  }
}
