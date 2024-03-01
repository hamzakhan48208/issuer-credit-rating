import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit{


  records = [
    {
      "IssuerPriceProvider": "BARCLAYS",
      "IssuerName": "Barclays Bank PLC",
      "MoodysRating": "A1",
      "SPRating": "A",
      "FitchRating": "",
      "Guarantor": "Barclays Bank PLC",
      "CalcAgent": "Barclays Bank PLC",
      "CreatedAt": "31-Oct-2019 11:36:56 PM",
      "CreatedBy": "Amruta_12345",
      "UpdatedAt": "20-Oct-2023 12:53:53 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "BNPP",
      "IssuerName": "BNP Paribas",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "BNP Paribas",
      "CalcAgent": "BNP Paribas",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 10:42:17 AM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "CITI",
      "IssuerName": "Citigroup Global Markets Funding Luxembourg S.C.A.",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Citigroup Global Markets Limited",
      "CalcAgent": "Citigroup Global Markets Limited",
      "CreatedAt": "11-Apr-2018 12:48:54 PM",
      "CreatedBy": "Nishant",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "CS",
      "IssuerName": "Credit Suisse International",
      "MoodysRating": "A3",
      "SPRating": "A-",
      "FitchRating": "",
      "Guarantor": "Credit Suisse International",
      "CalcAgent": "Credit Suisse International",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "DB",
      "IssuerName": "DB",
      "MoodysRating": "A3",
      "SPRating": "BBB+",
      "FitchRating": "",
      "Guarantor": "Deutsche Bank AG London Branch",
      "CalcAgent": "Deutsche Bank AG London Branch",
      "CreatedAt": "18-Jan-2017 11:48:05 AM",
      "CreatedBy": "11986986PS",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "DB",
      "IssuerName": "DB",
      "MoodysRating": "A3",
      "SPRating": "BBB+",
      "FitchRating": "",
      "Guarantor": "Deutsche Bank AG London Branch",
      "CalcAgent": "Deutsche Bank AG London Branch",
      "CreatedAt": "11-Sep-2017 9:55:22 PM",
      "CreatedBy": "1291530PS",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "GS",
      "IssuerName": "Goldman Sachs International, London, UK",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Goldman Sachs International, London, UK",
      "CalcAgent": "Goldman Sachs International, London, UK",
      "CreatedAt": "13-Nov-2019 5:49:55 PM",
      "CreatedBy": "SYSTEM",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "HSBC",
      "IssuerName": "HSBC Bank PLC",
      "MoodysRating": "A1",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "HSBC Bank PLC",
      "CalcAgent": "HSBC Bank PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "JPM",
      "IssuerName": "J.P. Morgan Structured Products B.V.",
      "MoodysRating": "Aa2",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "JPMorgan Chase Bank N.A.",
      "CalcAgent": "J.P. Morgan Securities PLC",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
    {
      "IssuerPriceProvider": "LEONTEQ",
      "IssuerName": "LTQ",
      "MoodysRating": "B3",
      "SPRating": "B-",
      "FitchRating": "",
      "Guarantor": "LTQ",
      "CalcAgent": "LTQ",
      "CreatedAt": "09-Nov-2016 2:06:17 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "20-Oct-2023 12:52:30 PM",
      "UpdatedBy": "P_SCBSG"
    },
    {
      "IssuerPriceProvider": "MS",
      "IssuerName": "Morgan Stanley",
      "MoodysRating": "Aa3",
      "SPRating": "A+",
      "FitchRating": "",
      "Guarantor": "Morgan Stanley",
      "CalcAgent": "Morgan Stanley",
      "CreatedAt": "25-Jul-2019 2:22:46 PM",
      "CreatedBy": "Adm",
      "UpdatedAt": "28-Aug-2023 5:08:07 PM",
      "UpdatedBy": "SYSTEM_USER"
    },
  ]
  issuerProviderOptions = ["HSBC", "JPM", "UBS", "CS", "BNPP", "CITI", "DB", "LEONTEEQ", "RBC", "NATIXIS", "SOCGEN", "GS", "HTTPLINKUSER", "TDS", "MS", "MSEUROPE", "UKJPM", "BARCLAYS", "BVMS", "NOMURA", "UKJPMBV"];
  moddysRatingOptions = ["Baa2", "Aaa", "Aa1", "Aa2", "Aa3", "A1", "A2", "A3", "Baa1", "Baa3", "Ba1", "Ba2", "Ba3", "B1", "B2", "B3"];
  spRatingOptions = ["AAA", "AA+", "AA", "AA-", "A+", "A", "A-", "BBB+", "BBB", "BBB-", "BB+", "BB", "BB-", "B+", "B", "B-"];
  fitchRatingOptions = ["AAA", "AA+", "AA", "AA-", "A+", "A", "A-", "BBB+", "BBB", "BBB-", "BB+", "BB", "BB-", "B+", "B", "B-"];
  isEdit: boolean = false;
  editNumber: Number = -1;
  addPressed: boolean = false;

  //PAGINATION
  recordsFiltered = this.records;
  recordsArr = [5, 10, 25, 100];
  totalRecords = this.records.length;
  first = 0;
  last = 10;
  size = 10;

  ngOnInit(): void {
    // this.recordsArr = Array.from({ length: this.records.length }, (_, i) => i + 1);
    this.totalRecords = this.records.length;
    this.updateRecordsFiltered();
  }

  onRecordsLengthChanged() {
    this.last = this.first + Number(this.size);
    this.updateRecordsFiltered();
  }

  next() {
    const nextFirst = this.last;
    const nextLast = Math.min(this.last + Number(this.size), this.totalRecords);

    if (nextFirst >= this.totalRecords) {
      return; // Prevent going beyond total records
    }

    this.first = nextFirst;
    this.last = nextLast;
    this.updateRecordsFiltered();
  }

  prev() {
    const nextLast = this.first;
    const nextFirst = Math.max(this.first - Number(this.size), 0);

    if (nextFirst < 0 || nextLast == 0) {
      return; // Prevent going below zero
    }

    this.first = nextFirst;
    this.last = nextLast;
    this.updateRecordsFiltered();
  }

  updateRecordsFiltered() {
    this.recordsFiltered = this.records.slice(this.first, this.last);
  }

  //EDIT
  toggleEdit(i: Number){
    this.editNumber = i === this.editNumber ? -1 : i;
    this.isEdit = !this.isEdit;
  }
  addRecord(){
    this.addPressed = true;
    this.isEdit = true;
  }
  cancelAdd(){
    this.addPressed = false;
    this.isEdit = false;
  }

}
