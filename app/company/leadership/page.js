import Banner from "@/components/hero/Banner";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner
        title={"The experts behind \nour success"}
        tag={"Our team"}
        description={""}
      />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="team-member-wrapper">
              <div className="member-image">Member image</div>
              <div className="member-images"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
