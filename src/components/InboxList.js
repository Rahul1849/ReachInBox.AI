import React from 'react';

const InboxList = ({ inboxData }) => {
  return (
    <div className="inbox-list">
      {inboxData.length > 0 ? (
        inboxData.map((message) => (
          <div key={message.id} className="inbox-item">
            <h3>{message.subject}</h3>
            <p>{message.preview}</p>
          </div>
        ))
      ) : (
        <p>No messages found.</p>
      )}
    </div>
  );
};

export default InboxList;
