import React from "react";
function Footer() {
  return (
   <footer style={{backgroundColor:"rgb(250,250,250)"}}>
     <div className="container border-top mt-5 mb-5">
      <div className="row mt-4">
        <div className="col">
          <img
          className="mb-2"
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
          <p>
            © 2010 - 2026, Zerodha Broking Ltd.<br></br>
            All rights reserved.
          </p>
          <i className = "fa fa-facebook me-2" aria-hidden="true"></i>
          <i className="fa fa-instagram me-2" aria-hidden="true"></i>
          <i className="fa fa-linkedin-square me-2" aria-hidden="true"></i>
          <i className="fa fa-twitter-square me-2" aria-hidden="true"></i>
        </div>
        <div className="col ">
          <p >Company</p>
          <a style={{textDecoration:"none"}} href=" ">About </a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Referral Programme</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Careers</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Products</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Pricing</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Press & Media</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Zerodha cares(CSR)</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Zerodha.tech</a>
          <br></br>
        </div>
        <div className="col">
          <p>Support</p>
          <a style={{textDecoration:"none"}} href=" ">Contact</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Support Protal</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Z-Connect Blog</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">List of changes</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Download & Resources</a>
          <br></br>
        </div>
        <div className="col">
          <p>Account</p>w
          <a style={{textDecoration:"none"}} href=" ">Open an Account</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">Fund Transfer</a>
          <br></br>
          <a style={{textDecoration:"none"}} href=" ">60 days challenge</a>
          <br></br>
        </div>
      </div>
      <div className="mt-4 fs-10">
      <p class="text-muted small">
        Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.:
        INZ000031633. CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019.
      </p>

      <p class="text-muted small">
        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
        Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
        560078, Karnataka, India.
      </p>

      <p class="text-muted small">
        For any complaints pertaining to securities broking please write to
        <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for
        DP related issues write to
        <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>.
      </p>

      <p class="text-muted small">
        Please ensure you carefully read the Risk Disclosure Document as
        prescribed by SEBI.
      </p>

      <p class="text-muted small">
        ICF – Procedure to file a complaint on SEBI SCORES: Register on SCORES
        portal. Mandatory details for filing complaints on SCORES: Name, PAN,
        Address, Mobile Number, E-mail ID.
      </p>

      <p class="text-muted small">
        Benefits of SCORES: Effective communication, speedy redressal of
        grievances, Smart Online Dispute Resolution and Grievances Redressal
        Mechanism.
      </p>

      <p class="text-muted small">
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>

      <p class="text-muted small">
        Attention investors:
        <br />
        1) Stock brokers can accept securities as margins from clients only by
        way of pledge in the depository system w.e.f September 01, 2020.
        <br />
        2) Update your e-mail and phone number with your stock broker /
        depository participant and receive OTP directly from depository on your
        e-mail and/or mobile number to create pledge.
        <br />
        3) Check your securities / MF / bonds in the consolidated account
        statement issued by NSDL/CDSL every month.
      </p>

      <p class="text-muted small">
        India's largest broker based on networth as per NSE. NSE broker
        factsheet.
      </p>

      <p class="text-muted small">
        Prevent unauthorised transactions in your account. Update your mobile
        numbers and email IDs with your stock brokers. Receive information of
        your transactions directly from Exchange on your mobile/email at the end
        of the day. Issued in the interest of investors.
      </p>

      <p class="text-muted small">
        KYC is a one-time exercise while dealing in securities markets. Once KYC
        is done through a SEBI registered intermediary (broker, DP, Mutual Fund
        etc.), you need not undergo the same process again when you approach
        another intermediary.
      </p>

      <p class="text-muted small">
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non-allotment, the funds will remain in your bank
        account.
      </p>

      <p class="text-muted small">
        As a business, we don't give stock tips and have not authorized anyone
        to trade on behalf of others. If you find anyone claiming to be part of
        Zerodha and offering such services, please create a ticket.
      </p>

      <p class="text-muted small">
        Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No. CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.
      </p>
      </div>
    </div>
   </footer>
  );
}

export default Footer;
