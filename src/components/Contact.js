import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.sharedContacts && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.contact;
      var skills = this.props.sharedContacts.data.map(function (data, i) {
        return (
          <div>
            <span>
            {data.info}
            </span>
          </div>
        );
      });
    }
    return (
      <section id="contact">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="boxes">
              {skills}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;