// src/components/Documents.js
import React, { useState } from 'react';
import Modal from './Modal';
import './Documents.css';
import Icon from '../icons/document.svg';

const documents = [
  { 
    title: 'Aadhar Card', 
    icon: 'document', 
    highlight: true,   
    requiredDocs: ['Aadhar Card','Mobile number and email id'],
    website: 'https://resident.uidai.gov.in/' 
  },
  { 
    title: 'Pan Card', 
    icon: 'document', 
    highlight: true, 
    requiredDocs: ['Aadhaar Card', '2 Photos','Signature','Mobile No. and Email ID'],
    website: 'https://www.pan.utiitsl.com/'
  },
  { 
    title: 'Pik Vima', 
    icon: 'document', 
    highlight: true,  
    requiredDocs: ['Aadhaar Card', 'Bank Passbook','7/12 Utara','Mobile No. and Email ID'],
    website: 'https://pmfby.gov.in/'
  },
  { 
    title: 'PM Kisan Samman Nidhi', 
    icon: 'document', 
    highlight: true,  
    requiredDocs: ['Aadhaar Card', 'Bank Passbook','7/12 Utara','Mobile No. and Email ID'],
    website: 'https://pmkisan.gov.in/'
  },
  { 
    title: 'Age Nationality and Domicile Certificate', 
    icon: 'document', 
    highlight: false,  
    requiredDocs: ['Aadhar Card','School Leaving Certificate/ Fathers Domicile Certificate/ Bonafide Certificate','Residence Proof by Gram Sevak/  Residence Proof by Talathi', ' Self-Declaration'],
    website: '' 
  },
  { 
    title: 'Income Certificate', 
    icon: 'document', 
    highlight: false,  
    requiredDocs: ['Aadhar Card', 'Ration Card/ Voter ID Card','School Leaving Certificate/ Birth Certificate',' If applicant is owner of the land then 7/12 to yield 8-A Talathi report', 'Self-Declaration'],
    website: '' 
  },
  { 
    title: 'Others', 
    icon: 'document', 
    highlight: false,  
    requiredDocs: [],
    website: ''
  },
  // Add other documents as needed
];



const Documents = () => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleDocumentClick = (index) => {
      setSelectedDocument(documents[index]);
    };
  
    const closeModal = () => {
      setSelectedDocument(null);
    };
  
    const filteredDocuments = documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  
    return (
      <div className="documents-container">
        <h1>Online Services and Certificates - Required Documents</h1><br/>
        <input
          type="text"
          placeholder="Search Certificates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="documents-grid">
          {filteredDocuments.map((doc, index) => (
            <div
              key={index}
              className={`document-card ${doc.highlight ? 'highlight' : ''}`}
              onClick={() => handleDocumentClick(index)}
            >
              <div className="document-icon">
                {/* <img src={`/icons/${doc.icon}.svg`} alt={doc.title} /> */}
                <img src={Icon} alt={doc.title} />
              </div>
              <div className="document-title">{doc.title}</div>
            </div>
          ))}
        </div>
        {selectedDocument && (
  <Modal
    show={!!selectedDocument}
    onClose={closeModal}
    title={selectedDocument.title}
    documents={selectedDocument.requiredDocs}
    website={selectedDocument.website}  // Pass the website link here
  />
)}

      </div>
    );
  };
  
  export default Documents;